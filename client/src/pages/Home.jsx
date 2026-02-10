import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then(setArticles);
  }, []);

  const featured = articles[0];

  return (
    <div className="home-page">
      <h1 className="page-title">Welcome to MiniWiki</h1>
      <p className="subtitle">The free encyclopedia that anyone can read</p>

      {featured && (
        <section className="featured-article">
          <h2>Featured Article</h2>
          <div className="featured-card">
            <h3>
              <Link to={`/wiki/${featured.slug}`}>{featured.title}</Link>
            </h3>
            <p>{featured.summary}</p>
            <Link to={`/wiki/${featured.slug}`} className="read-more">
              Read full article →
            </Link>
          </div>
        </section>
      )}

      <section className="all-articles">
        <h2>All Articles</h2>
        <div className="article-grid">
          {articles.map((article) => (
            <div key={article.slug} className="article-card">
              <h3>
                <Link to={`/wiki/${article.slug}`}>{article.title}</Link>
              </h3>
              <p>{article.summary}</p>
              <div className="article-categories">
                {article.categories.map((cat) => (
                  <span key={cat} className="category-tag">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
