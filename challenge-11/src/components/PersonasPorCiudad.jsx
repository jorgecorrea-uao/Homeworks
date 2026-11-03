export const PersonasPorCiudad = ({ grafo, ciudad, onChange }) => {
  const personas = grafo.peopleInCity(ciudad)

  return (
    <section className="panel">
      <h2>Personas por ciudad</h2>
      <select value={ciudad} onChange={e => onChange(e.target.value)}>
        <option value="">Selecciona una ciudad</option>
        {grafo.getCities().map(c => (
          <option key={c.id} value={c.id}>{c.nombre}</option>
        ))}
      </select>
      {ciudad && (
        personas.length
          ? (
            <ul>
              {personas.map(p => (
                <li key={p.id}>{p.nombre} · {p.edad} años</li>
              ))}
            </ul>
          )
          : <p>Nadie vive en {ciudad}</p>
      )}
    </section>
  )
}