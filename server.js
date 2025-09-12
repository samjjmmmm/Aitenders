// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import Database from "@replit/database";

const app = express();
const db = new Database();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, 'public/uploads');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const checkAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!ADMIN_PASSWORD || authHeader === ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

app.get("/api/page/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const pageData = await db.get(`page_${slug}`);
    res.json(pageData || {});
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve page data." });
  }
});

app.post("/api/page/:slug", checkAuth, async (req, res) => {
  try {
    const slug = req.params.slug;
    const updatedPageData = req.body;
    await db.set(`page_${slug}`, updatedPageData);
    res.json({ status: "success", message: `Page '${slug}' saved!` });
  } catch (error) {
    res.status(500).json({ error: "Failed to save page data." });
  }
});

app.post("/api/upload", checkAuth, upload.single('imageUpload'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  res.json({ status: "success", filePath: `/uploads/${req.file.filename}` });
});

app.listen(3001, () => {
  console.log('CMS API server running on port 3001');

  
});

// In server.js

// ... (keep all your existing code)

// ADD THIS HEALTH CHECK ROUTE
app.get("/api/health", (req, res) => {
  console.log("Health check endpoint hit!");
  res.json({ status: "ok", timestamp: new Date() });
});

app.get("/api/page/:slug", async (req, res) => {
  // ... your existing code for this route
});

// ... (rest of your file)