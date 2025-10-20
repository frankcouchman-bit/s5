// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ArticleWriter from "@/pages/landing/ArticleWriter.jsx";
import AIWriter from "@/pages/landing/AIWriter.jsx";
import WritingTool from "@/pages/landing/WritingTool.jsx";

function Home() {
  return (
    <div style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>SEOScribe</h1>
      <p style={{ color: "#374151" }}>
        Choose a landing page to preview. These are SEO-optimized with JSON-LD and FAQs.
      </p>
      <ul style={{ marginTop: 16, lineHeight: 1.8 }}>
        <li><Link to="/article-writer">Article Writer</Link></li>
        <li><Link to="/ai-writer">AI Writer</Link></li>
        <li><Link to="/writing-tool">Writing Tool</Link></li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-writer" element={<ArticleWriter />} />
        <Route path="/ai-writer" element={<AIWriter />} />
        <Route path="/writing-tool" element={<WritingTool />} />
      </Routes>
    </BrowserRouter>
  );
}
