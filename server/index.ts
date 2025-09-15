import express, { type Request, Response, NextFunction } from "express";
import http from 'http';
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { translationService } from './translations';

const app = express();
const server = http.createServer(app); // Create the server instance here

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  try {
    // ====================================================================
    // THE FIX: Set up static/Vite routes BEFORE application routes
    // ====================================================================
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Now register API routes and the main application catch-all
    await registerRoutes(app);
    // ====================================================================

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      // It's often better not to re-throw the error, as it can crash the process
      // unless you have a top-level unhandled exception catcher.
      console.error(err);
    });

    // Initialize translation system
    try {
      await translationService.initializeLanguages();
      console.log('✅ Languages initialized');
      console.log('ℹ️ Skipping translation seeding for faster startup');
    } catch (error) {
      console.error('Error initializing translations:', error);
    }

    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`serving on port ${port}`);
    });

  } catch (error) {
    console.error('Critical server startup error:', error);
    process.exit(1);
  }
})().catch((error) => {
  console.error('Unhandled error in server startup:', error);
  process.exit(1);
});