import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useArbol } from '../hooks/useArbol';
import { RAIZ_ID } from '../tree/ArbolNario';
import type { TipoNodo } from '../tree/Nodo';
import NodoItem from '../components/NodoItem';

function Explorador() {
  const { user, logout } = useContext(AuthContext);
  const { arbol, isPending, error, crear } = useArbol();

  const [seleccionado, setSeleccionado] = useState(RAIZ_ID);
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState<TipoNodo>('carpeta');
  const [mensaje, setMensaje] = useState('');

  const destino = arbol.buscar(seleccionado) ?? arbol.raiz;

  const handleCrear = async () => {
    setMensaje('');
    try {
      await crear(destino.valor.id, nombre, tipo);
      setNombre('');
    } catch (err) {
      setMensaje((err as Error).message);
    }
  };

  return (
    <div>
      <header className="barra">
        <h1>Explorador</h1>
        <div>
          <span>{user?.email}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      </header>

      <main className="contenido">
        <section className="panel">
          <ul className="arbol">
            <NodoItem nodo={arbol.raiz} seleccionado={destino.valor.id} onSeleccionar={setSeleccionado} />
          </ul>
        </section>

        <aside className="panel">
          {destino.esCarpeta() ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCrear();
              }}
            >
              <h3>Crear en {destino.valor.nombre}</h3>
              <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoNodo)}>
                <option value="carpeta">Carpeta</option>
                <option value="archivo">Archivo</option>
              </select>
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
              {(mensaje || error) && <p className="error">{mensaje || error}</p>}
              <button type="submit" className="btn" disabled={isPending}>
                Crear
              </button>
            </form>
          ) : (
            <p className="aviso">{destino.valor.nombre} es un archivo, no puede tener hijos.</p>
          )}
        </aside>
      </main>
    </div>
  );
}

export default Explorador;