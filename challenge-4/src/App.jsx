import { useState } from 'react';
import { Stack } from './structures/Stack';
import { mockBooks } from './data/mockBooks';
import './App.css';

const emptyForm = { name: '', isbn: '', author: '', editorial: '' };

export default function App() {
  const [stack, setStack] = useState(() => Stack.from(mockBooks));
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => !v.trim())) return;
    const next = Stack.from(stack);
    next.push({ ...form });
    setStack(next);
    setForm(emptyForm);
  };

  const handlePop = () => {
    const next = Stack.from(stack);
    next.pop();
    setStack(next);
  };

  // Del tope hacia abajo
  const booksFromTop = [...stack].reverse();

  return (
    <main className="container">
      <h1>Pila de libros</h1>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
        <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} />
        <input name="author" placeholder="Autor" value={form.author} onChange={handleChange} />
        <input name="editorial" placeholder="Editorial" value={form.editorial} onChange={handleChange} />
        <button type="submit">Push</button>
      </form>

      <div className="info">
        <span>Tamaño: {stack.size()}</span>
        <span>Tope (peek): {stack.isEmpty() ? '—' : stack.peek().name}</span>
        <button onClick={handlePop} disabled={stack.isEmpty()}>Pop</button>
      </div>

      <ul className="stack">
        {booksFromTop.map((b, i) => (
          <li key={b.isbn + i} className={i === 0 ? 'top' : ''}>
            <strong>{b.name}</strong>
            <small>{b.author} · {b.editorial} · ISBN {b.isbn}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}