import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n"; // Initialize i18next

createRoot(document.getElementById("root")!).render(<App />);
