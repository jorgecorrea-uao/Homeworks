import { useRef, useState } from "react";
import LinkedList from "../structures/LinkedList";
import songs from "../data/songs";

function buildPlaylist() {
  const list = new LinkedList();
  songs.forEach((song) => list.append(song));
  return list;
}

function MusicPlayer() {
  const playlist = useRef(buildPlaylist());
  const [current, setCurrent] = useState(playlist.current.current);

  const handleNext = () => {
    setCurrent(playlist.current.next());
  };

  const handleReset = () => {
    setCurrent(playlist.current.reset());
  };

  const isLast = !current.next;

  return (
    <div className="page">
      <h1>Reproductor de música</h1>
      <p className="hint">Lista simplemente enlazada — solo avanza</p>

      <div className="card">
        <h2>{current.value.title}</h2>
        <p>{current.value.artist}</p>
        <p>{current.value.duration}</p>
      </div>

      <div className="buttons">
        <button onClick={handleNext} disabled={isLast}>
          Siguiente
        </button>
        <button onClick={handleReset}>Volver al inicio</button>
      </div>

      <p className="info">Canciones en la lista: {playlist.current.size()}</p>
    </div>
  );
}

export default MusicPlayer;