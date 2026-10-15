import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { auth } from '../firebase/config';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cancelar = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
      setCargando(false);
    });
    return cancelar;
  }, []);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  return { user, cargando, login, register, logout };
}