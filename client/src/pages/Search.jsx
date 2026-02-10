import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="search-page">
      <h1 className="page-title">Search results</h1>
      {query && (
        <p className="search-query">
          Showing results for: <strong>{query}</strong>
        </p>
      )}

      {loading && <p>Searching...</p>}

      {!loading && query && results.length === 0 && (
        <p className="no-results">
          No articles matched your search. Try a different term or{" "}
          <Link to="/">browse all articles</Link>.
        </p>
      )}

      <div className="search-results">
        {results.map((article) => (
          <div key={article.slug} className="search-result">
            <h2>
              <Link to={`/wiki/${article.slug}`}>{article.title}</Link>
            </h2>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
