import { useQueue } from "../context/QueueContext";

const cop = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

export default function Ejercicio1() {
  const { queue, attend } = useQueue();

  return (
    <main style={{ padding: 20 }}>
      <h1>Cola del cajero</h1>

      <div style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "center" }}>
        <span>Tamaño: {queue.size()}</span>
        <span>Siguiente (peek): {queue.peek()?.name ?? "—"}</span>
        <button onClick={attend} disabled={queue.isEmpty()}>
          Atender (dequeue)
        </button>
      </div>

      <ol>
        {queue.items.map((p, i) => (
          <li key={i} style={i === 0 ? { fontWeight: "bold" } : undefined}>
            {p.name} · {cop.format(p.withdrawalAmount)} · llegó{" "}
            {p.arrivalDate.toLocaleTimeString("es-CO", { hour12: false })}
          </li>
        ))}
      </ol>
    </main>
  );
}