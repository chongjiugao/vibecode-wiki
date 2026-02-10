import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Search from "./pages/Search";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <div className="wiki-app">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="wiki-body">
        <Sidebar />
        <main className="wiki-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wiki/:slug" element={<Article />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
