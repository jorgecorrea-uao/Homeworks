import { createContext, useContext } from 'react'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth() 
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)