import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import { Login } from './components/Login'
import { Tareas } from './components/Tareas'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setSession(session))
    return () => subscription.unsubscribe()
  }, [])

  const subirAvatar = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const { data: { user } } = await supabase.auth.getUser()
    const ruta = `${user.id}/${Date.now()}-${file.name}`

    const { error } = await supabase.storage.from('avatars').upload(ruta, file, { upsert: true })
    if (error) return alert(error.message)

    const { data } = supabase.storage.from('avatars').getPublicUrl(ruta)
    const { error: errorUser } = await supabase.auth.updateUser({ data: { avatar_url: data.publicUrl } })
    if (errorUser) alert(errorUser.message)
  }

  if (!session) return <Login />

  const url = session.user.user_metadata?.avatar_url

  return (
    <>
      <header>
        <span>{session.user.email}</span>
        <button onClick={() => supabase.auth.signOut()}>Cerrar sesión</button>
      </header>
      <input type="file" accept="image/*" onChange={subirAvatar} />
      {url && <img src={url} width={160} />}
      <Tareas />
    </>
  )
}

export default App