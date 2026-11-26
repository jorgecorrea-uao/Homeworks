import { useState } from "react";

export default function SearchCard({ trie, onSelect }) {
  const [text, setText] = useState("");
  const [found, setFound] = useState(null);

  const prefix = text.trim().toLowerCase();

  const handleSearch = () => setFound(trie.search(prefix));

  return (
    <section className="card">
      <h2>Buscador (Trie)</h2>
      <input
        placeholder="Escribe una canción..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setFound(null);
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
      {found !== null && (
        <p className={found ? "ok" : "error"}>{found ? "La canción existe" : "La canción no existe"}</p>
      )}
      <ul>
        {prefix &&
          trie.suggest(prefix).map((title) => (
            <li key={title} onClick={() => onSelect(title)}>
              {title}
            </li>
          ))}
      </ul>
    </section>
  );
}