const express = require("express");
const path = require("path");
const cors = require("cors");
const articles = require("./articles");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Serve React build in production
app.use(express.static(path.join(__dirname, "../client/dist")));

// List all articles (title + summary)
app.get("/api/articles", (req, res) => {
  const list = articles.map(({ slug, title, summary, categories }) => ({
    slug,
    title,
    summary,
    categories,
  }));
  res.json(list);
});

// Search articles by title/content
app.get("/api/search", (req, res) => {
  const query = (req.query.q || "").toLowerCase().trim();
  if (!query) {
    return res.json([]);
  }
  const results = articles
    .filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.content.toLowerCase().includes(query)
    )
    .map(({ slug, title, summary }) => ({ slug, title, summary }));
  res.json(results);
});

// Get single article by slug
app.get("/api/articles/:slug", (req, res) => {
  const article = articles.find((a) => a.slug === req.params.slug);
  if (!article) {
    return res.status(404).json({ error: "Article not found" });
  }
  res.json(article);
});

// All non-API routes serve the React app (for client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Wiki server running on http://localhost:${PORT}`);
});
