import { useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase/config'


export function useFirebaseAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return unsub
  }, [])

  const register = async (email, password) => {
    setError(null)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      return res.user
    } catch (e) {
      setError(e.message)
      throw e
    }
  }

  const login = async (email, password) => {
    setError(null)
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      return res.user
    } catch (e) {
      setError(e.message)
      throw e
    }
  }

  const logout = () => signOut(auth)

  return { user, loading, error, register, login, logout }
}