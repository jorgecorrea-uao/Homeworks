export default function TopCard({ heap, onSelect }) {
  return (
    <section className="card">
      <h2>Top 5 (Max Heap)</h2>
      <ol>
        {heap.top(5).map((song) => (
          <li key={song.title} onClick={() => onSelect(song.title)}>
            {song.title} - {song.plays} reproducciones
          </li>
        ))}
      </ol>
    </section>
  );
}