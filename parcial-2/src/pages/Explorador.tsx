import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Explorador() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Explorador</h2>
      <p>Bienvenido {user?.email}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

export default Explorador;