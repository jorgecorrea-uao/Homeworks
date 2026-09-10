import { useRef, useState, useEffect } from "react";
import LinkedList from "./estructuras/LinkedList";
import DoublyLinkedList from "./estructuras/DoublyLinkedList";
import CircularLinkedList from "./estructuras/CircularLinkedList";
import CircularDoublyLinkedList from "./estructuras/CircularDoublyLinkedList";
import { pacientes, medicos, comite } from "./datos/clinica";

function crearListas() {
  const espera = new LinkedList();
  pacientes.forEach((p) => espera.append(p));

  const historial = new DoublyLinkedList();

  const guardia = new CircularLinkedList();
  medicos.forEach((m) => guardia.append(m));

  const administrativo = new CircularDoublyLinkedList();
  comite.forEach((c) => administrativo.append(c));

  return { espera, historial, guardia, administrativo };
}

function App() {
  const listas = useRef(crearListas());
  const [, setTick] = useState(0);
  const refrescar = () => setTick((t) => t + 1);

  const { espera, historial, guardia, administrativo } = listas.current;

  useEffect(() => {
    const id = setInterval(() => {
      listas.current.guardia.next();
      refrescar();
    }, 10000);

    return () => clearInterval(id);
  }, []);

  const atender = () => {
    if (!espera.head) return;
    const paciente = espera.head.value;
    espera.remove(paciente);
    historial.append(paciente);
    refrescar();
  };

  return (
    <div>
      <h1>Sistema de la clinica</h1>

      <h2>Medico de guardia</h2>
      <p>
        {guardia.current.value.nombre} — {guardia.current.value.especialidad}
      </p>
      <small>Rota automaticamente cada 10 segundos</small>

      <h2>Pacientes en espera ({espera.size()})</h2>
      <ul>
        {espera.toArray().map((p) => (
          <li key={p.id}>
            {p.nombre} — {p.motivo}
          </li>
        ))}
      </ul>
      <button onClick={atender} disabled={!espera.head}>
        Atender siguiente
      </button>

      <h2>Historial de atencion ({historial.size()})</h2>
      <ul>
        {historial.toArray().map((p) => (
          <li key={p.id}>
            {p.nombre} — {p.motivo}
          </li>
        ))}
      </ul>

      <h2>Comite administrativo</h2>
      <p>
        {administrativo.current.value.nombre} —{" "}
        {administrativo.current.value.cargo}
      </p>
      <button onClick={() => { administrativo.back(); refrescar(); }}>
        Anterior
      </button>
      <button onClick={() => { administrativo.next(); refrescar(); }}>
        Siguiente
      </button>
    </div>
  );
}

export default App;
