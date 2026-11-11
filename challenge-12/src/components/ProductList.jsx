export default function ProductList({ products }) {
  return (
    <section className="card">
      <h2>Productos en el Trie ({products.length})</h2>
      <ul className="products">
        {products.map((p) => (
          <li key={p.name}>
            {p.name} <span className="muted">{p.popularity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}