import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export const Tareas = () => {
  const [tareas, setTareas] = useState([])
  const [titulo, setTitulo] = useState('')

  const cargar = async () => {
    const { data, error } = await supabase
      .from('tareas')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) console.error(error)
    else setTareas(data)
  }

  const crear = async (e) => {
    e.preventDefault()
    if (!titulo.trim()) return
    const { error } = await supabase.from('tareas').insert({ titulo: titulo.trim() })
    if (error) return alert(error.message)
    setTitulo('')
  }

  const completar = async (id, valor) => {
    const { error } = await supabase.from('tareas').update({ completada: valor }).eq('id', id)
    if (error) alert(error.message)
  }

  const borrar = async (id) => {
    const { error } = await supabase.from('tareas').delete().eq('id', id)
    if (error) alert(error.message)
  }

  useEffect(() => {
    cargar()

    const canal = supabase
      .channel('cambios-tareas')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'tareas' },
        (payload) => {
          if (payload.eventType === 'INSERT')
            setTareas(t => t.some(x => x.id === payload.new.id) ? t : [payload.new, ...t])
          if (payload.eventType === 'UPDATE')
            setTareas(t => t.map(x => x.id === payload.new.id ? payload.new : x))
          if (payload.eventType === 'DELETE')
            setTareas(t => t.filter(x => x.id !== payload.old.id))
        })
      .subscribe()

    return () => { supabase.removeChannel(canal) }
  }, [])

  return (
    <section>
      <h2>Mis tareas</h2>
      <form onSubmit={crear}>
        <input placeholder="Nueva tarea" value={titulo} onChange={e => setTitulo(e.target.value)} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completada} onChange={() => completar(t.id, !t.completada)} />
            <span style={{ textDecoration: t.completada ? 'line-through' : 'none' }}>{t.titulo}</span>
            <button onClick={() => borrar(t.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </section>
  )
}