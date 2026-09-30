import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueue } from "../context/QueueContext";

export default function Ejercicio2() {
  const { addPerson } = useQueue();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(amount);
    if (!name.trim() || !value || value <= 0) return;
    addPerson(name.trim(), value);
    navigate("/ejercicio-1");
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Nueva persona</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 300 }}>
        <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Monto a retirar" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Enqueue</button>
      </form>
    </main>
  );
}