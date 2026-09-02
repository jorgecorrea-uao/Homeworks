import { useState } from 'react'

// recibe por props la funcion que agrega el contacto en App
function ContactForm({ onAgregar }) {
  // estado propio para lo que el usuario va escribiendo
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  const manejarEnvio = (evento) => {
    evento.preventDefault() // evita que el formulario recargue la pagina

    // no agregar si algun campo esta vacio
    if (nombre.trim() === '' || telefono.trim() === '') return

    onAgregar(nombre.trim(), telefono.trim()) // avisa hacia arriba

    // limpiar los inputs
    setNombre('')
    setTelefono('')
  }

  return (
    <form className="form" onSubmit={manejarEnvio}>
      {/* inputs controlados: su value sale del estado */}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(evento) => setNombre(evento.target.value)}
      />
      <input
        type="tel"
        placeholder="Telefono"
        value={telefono}
        onChange={(evento) => setTelefono(evento.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default ContactForm
