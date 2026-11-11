export default function SearchBar({ prefix, k, onPrefixChange, onKChange }) {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Buscar producto por prefijo..."
        value={prefix}
        onChange={(e) => onPrefixChange(e.target.value)}
        autoFocus
      />
      <label>
        Top K
        <input type="number" min="1" value={k} onChange={(e) => onKChange(Number(e.target.value) || 1)} />
      </label>
    </div>
  );
}