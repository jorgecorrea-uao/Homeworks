import { useContext, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user, cargando } = useContext(AuthContext);

  if (cargando) {
    return <p className="cargando">Cargando...</p>;
  }

  return user ? children : <Navigate to="/login" replace />;
};