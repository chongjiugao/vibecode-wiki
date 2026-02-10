import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then(setArticles);
  }, []);

  return (
    <aside className="wiki-sidebar">
      <nav>
        <h3>Navigation</h3>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
        </ul>
        <h3>Articles</h3>
        <ul>
          {articles.map((a) => (
            <li key={a.slug}>
              <Link to={`/wiki/${a.slug}`}>{a.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
