import type { ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { useAuth } from '../hooks/useAuth';

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, cargando, login, register, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ user, cargando, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}