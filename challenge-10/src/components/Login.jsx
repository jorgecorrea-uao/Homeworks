import { useState } from 'react'
import { supabase } from '../lib/supabase'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registrar = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin }
    })
    if (error) return alert(error.message)
    if (!data.session) alert('Revisa tu correo para confirmar la cuenta')
  }

  const iniciarSesion = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
  }

  return (
    <form onSubmit={iniciarSesion}>
      <h2>Iniciar sesión</h2>
      <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña (mín. 6)" value={password} onChange={e => setPassword(e.target.value)} minLength={6} required />
      <button type="submit">Entrar</button>
      <button type="button" onClick={registrar}>Registrarse</button>
    </form>
  )
}