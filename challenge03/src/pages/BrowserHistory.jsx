import { useRef, useState } from "react";
import DoublyLinkedList from "../structures/DoublyLinkedList";
import pages from "../data/pages";

function buildHistory() {
  const list = new DoublyLinkedList();
  pages.forEach((page) => list.append(page));
  list.reset?.();
  return list;
}

function BrowserHistory() {
  const history = useRef(buildHistory());
  const [current, setCurrent] = useState(history.current.head);

  const handleBack = () => {
    setCurrent(history.current.back());
  };

  const handleForward = () => {
    setCurrent(history.current.forward());
  };

  const canBack = !!current.prev;
  const canForward = !!current.next;

  return (
    <div className="page">
      <h1>Historial del navegador</h1>
      <p className="hint">Lista doblemente enlazada — avanza y retrocede</p>

      <div className="card">
        <h2>{current.value.title}</h2>
        <p>{current.value.url}</p>
      </div>

      <div className="buttons">
        <button onClick={handleBack} disabled={!canBack}>
          ← Atrás
        </button>
        <button onClick={handleForward} disabled={!canForward}>
          Adelante →
        </button>
      </div>

      <p className="info">Páginas visitadas: {history.current.size()}</p>
    </div>
  );
}

export default BrowserHistory;