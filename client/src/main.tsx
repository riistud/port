import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add Font Awesome
const fontAwesomeLink = document.createElement("link");
fontAwesomeLink.rel = "stylesheet";
fontAwesomeLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(fontAwesomeLink);

// Add Inter font
const interFontLink = document.createElement("link");
interFontLink.rel = "stylesheet";
interFontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
document.head.appendChild(interFontLink);

// Add title and meta tags
document.title = "Kaizen Developer Portfolio";
const metaDesc = document.createElement("meta");
metaDesc.name = "description";
metaDesc.content = "Professional portfolio for Kaizen Developer showcasing skills and projects";
document.head.appendChild(metaDesc);

const ogTitle = document.createElement("meta");
ogTitle.setAttribute("property", "og:title");
ogTitle.content = "Kaizen Developer Portfolio";
document.head.appendChild(ogTitle);

const ogDesc = document.createElement("meta");
ogDesc.setAttribute("property", "og:description");
ogDesc.content = "JavaScript, PHP, Python, NodeJS developer showcasing projects and skills";
document.head.appendChild(ogDesc);

const ogType = document.createElement("meta");
ogType.setAttribute("property", "og:type");
ogType.content = "website";
document.head.appendChild(ogType);

createRoot(document.getElementById("root")!).render(<App />);
