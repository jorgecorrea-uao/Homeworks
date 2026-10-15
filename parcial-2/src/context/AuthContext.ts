import { createContext } from 'react';
import type { useAuth } from '../hooks/useAuth';

type AuthContextType = ReturnType<typeof useAuth>;

export const AuthContext = createContext({} as AuthContextType);