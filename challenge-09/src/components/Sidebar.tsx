import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { Nodo } from '../tree/Nodo';

function ItemMenu({ nodo, nivel }: { nodo: Nodo; nivel: number }) {
  const [abierto, setAbierto] = useState(false);
  const tieneHijos = nodo.hijos.length > 0;

  return (
    <li>
      <div className="item">
        <NavLink
          to={nodo.valor.link}
          end
          className="link"
          style={{ paddingLeft: 16 + nivel * 16 }}
          onClick={() => tieneHijos && setAbierto(true)}
        >
          {nodo.valor.title}
        </NavLink>
        {tieneHijos && (
          <button className="toggle" onClick={() => setAbierto(!abierto)}>
            {abierto ? '▴' : '▾'}
          </button>
        )}
      </div>
      {tieneHijos && abierto && (
        <ul>
          {nodo.hijos.map((hijo) => (
            <ItemMenu key={hijo.valor.link} nodo={hijo} nivel={nivel + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

const Sidebar = ({ raiz }: { raiz: Nodo }) => (
  <nav className="sidebar">
    <ul>
      {raiz.hijos.map((hijo) => (
        <ItemMenu key={hijo.valor.link} nodo={hijo} nivel={0} />
      ))}
    </ul>
  </nav>
);

export default Sidebar;