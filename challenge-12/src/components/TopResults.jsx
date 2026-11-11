export default function TopResults({ prefix, k, results, totalMatches }) {
  return (
    <section className="card">
      <h2>
        searchTopK("{prefix}", {k})
      </h2>
      <p className="muted">
        {totalMatches} coincidencias en el Trie, mostrando las {results.length} más populares
      </p>
      {results.length === 0 ? (
        <p className="muted">Sin resultados</p>
      ) : (
        <ol className="results">
          {results.map((p) => (
            <li key={p.name}>
              <span>
                <strong>{p.name.slice(0, prefix.trim().length)}</strong>
                {p.name.slice(prefix.trim().length)}
              </span>
              <span className="badge">{p.popularity}</span>
            </li>
          ))}
        </ol>
      )}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </section>
  );
}