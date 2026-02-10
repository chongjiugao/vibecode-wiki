import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// Convert wiki-style content to React elements
// Handles [[Link]], [[Slug|Display Text]], ## headings, paragraphs, and lists
function WikiContent({ content }) {
  const lines = content.split("\n");
  const elements = [];
  let listItems = [];

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`}>
          {listItems.map((item, i) => (
            <li key={i}>{parseInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  function parseInline(text) {
    // Split on [[...]] wiki links
    const parts = text.split(/(\[\[[^\]]+\]\])/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[\[([^\]]+)\]\]$/);
      if (match) {
        const inner = match[1];
        let slug, display;
        if (inner.includes("|")) {
          [slug, display] = inner.split("|");
          slug = slugify(slug);
        } else {
          display = inner;
          slug = slugify(inner);
        }
        return (
          <Link key={i} to={`/wiki/${slug}`}>
            {display}
          </Link>
        );
      }
      // Bold
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      if (boldParts.length > 1) {
        return boldParts.map((bp, j) => {
          const boldMatch = bp.match(/^\*\*(.+)\*\*$/);
          if (boldMatch) return <strong key={`${i}-${j}`}>{boldMatch[1]}</strong>;
          return bp;
        });
      }
      return part;
    });
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} id={slugify(line.slice(3))}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} id={slugify(line.slice(4))}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(<p key={i}>{parseInline(line)}</p>);
    }
  }
  flushList();

  return <>{elements}</>;
}

// Extract headings for table of contents
function TableOfContents({ content }) {
  const headings = [];
  for (const line of content.split("\n")) {
    if (line.startsWith("## ")) {
      headings.push({ level: 2, text: line.slice(3) });
    } else if (line.startsWith("### ")) {
      headings.push({ level: 3, text: line.slice(4) });
    }
  }

  if (headings.length === 0) return null;

  return (
    <nav className="toc">
      <h2>Contents</h2>
      <ol>
        {headings.map((h, i) => (
          <li key={i} className={h.level === 3 ? "toc-sub" : ""}>
            <a href={`#${slugify(h.text)}`}>{h.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Article() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setArticle(null);
    setError(false);
    fetch(`/api/articles/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then(setArticle)
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="article-page">
        <h1 className="page-title">Article not found</h1>
        <p>
          The article you are looking for does not exist.{" "}
          <Link to="/">Return to the main page</Link>.
        </p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article-page">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="article-page">
      <h1 className="page-title">{article.title}</h1>
      <div className="article-meta">
        {article.categories.map((cat) => (
          <span key={cat} className="category-tag">
            {cat}
          </span>
        ))}
      </div>
      <TableOfContents content={article.content} />
      <div className="article-body">
        <WikiContent content={article.content} />
      </div>
    </div>
  );
}
