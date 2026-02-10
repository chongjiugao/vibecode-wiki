import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ theme, onToggleTheme }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="wiki-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">W</span>
          <div className="logo-text">
            <strong>MiniWiki</strong>
            <span>The Free Encyclopedia</span>
          </div>
        </Link>
        <div className="header-actions">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search MiniWiki"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <button className="theme-toggle" onClick={onToggleTheme} title="Toggle dark mode">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        </div>
      </div>
    </header>
  );
}
