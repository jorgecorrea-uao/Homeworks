export default function RelatedCard({ graph, selected, onSelect }) {
  return (
    <section className="card">
      <h2>Relacionadas (Grafo)</h2>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        {graph.nodes.map((title) => (
          <option key={title}>{title}</option>
        ))}
      </select>
      <ul>
        {graph.getNeighbors(selected).map((title) => (
          <li key={title} onClick={() => onSelect(title)}>
            {title}
          </li>
        ))}
      </ul>
    </section>
  );
}