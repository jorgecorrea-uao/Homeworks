import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import './App.css'

// lista inicial, simula los datos que llegarian de un servidor
const CONTACTOS_INICIALES = [
  { id: 1, nombre: 'Ana Gomez', telefono: '3001234567' },
  { id: 2, nombre: 'Carlos Ruiz', telefono: '3109876543' },
  { id: 3, nombre: 'Maria Lopez', telefono: '3157654321' },
]

function App() {
  // el estado vive aqui y baja a los hijos por props
  const [contactos, setContactos] = useState([])
  const [cargando, setCargando] = useState(true)

  // el [] del final hace que se ejecute una sola vez, al montar
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setContactos(CONTACTOS_INICIALES)
      setCargando(false)
    }, 1500) // 1.5 segundos simulando la carga

    // limpieza: cancela el temporizador si el componente se desmonta antes
    return () => clearTimeout(temporizador)
  }, [])

  const agregarContacto = (nombre, telefono) => {
    const nuevo = { id: crypto.randomUUID(), nombre, telefono }
    // el spread crea un array nuevo, no se modifica el anterior
    setContactos([...contactos, nuevo])
  }

  const eliminarContacto = (id) => {
    // filter devuelve todos menos el que coincide
    setContactos(contactos.filter((contacto) => contacto.id !== id))
  }

  return (
    <main className="app">
      <h1>Mis contactos</h1>

      {/* mientras cargando sea true se ve el loader, si no la app */}
      {cargando ? (
        <Loader />
      ) : (
        <>
          <ContactForm onAgregar={agregarContacto} />
          <ContactList contactos={contactos} onEliminar={eliminarContacto} />
        </>
      )}
    </main>
  )
}

export default App
