import { useState } from "react";

export default function AddSongCard({ trie, heap, graph, onChange }) {
  const [newSong, setNewSong] = useState({ title: "", plays: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    const title = newSong.title.trim().toLowerCase();
    if (!title || trie.search(title)) return;
    trie.insert(title);
    heap.push({ title, plays: Number(newSong.plays) || 0 });
    graph.addNode(title);
    setNewSong({ title: "", plays: "" });
    onChange();
  };

  return (
    <form className="card" onSubmit={handleAdd}>
      <h2>Insertar canción</h2>
      <input
        placeholder="Título"
        value={newSong.title}
        onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Reproducciones"
        value={newSong.plays}
        onChange={(e) => setNewSong({ ...newSong, plays: e.target.value })}
      />
      <button>Agregar</button>
    </form>
  );
}