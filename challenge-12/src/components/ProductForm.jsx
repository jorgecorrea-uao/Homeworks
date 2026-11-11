import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [popularity, setPopularity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd(name, popularity)) {
      setName("");
      setPopularity("");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Agregar producto</h2>
      <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="number"
        min="0"
        max="100"
        placeholder="Popularidad"
        value={popularity}
        onChange={(e) => setPopularity(e.target.value)}
      />
      <button>Insertar</button>
    </form>
  );
}