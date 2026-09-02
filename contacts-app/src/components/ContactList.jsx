import ContactItem from './ContactItem'

// no guarda estado, solo recorre la lista que le llega y la reparte
function ContactList({ contactos, onEliminar }) {
  // renderizado condicional: mensaje cuando no queda ningun contacto
  if (contactos.length === 0) {
    return <p className="vacio">No hay contactos todavia.</p>
  }

  return (
    <ul className="lista">
      {contactos.map((contacto) => (
        // key: React lo usa para identificar cada elemento de la lista
        <ContactItem
          key={contacto.id}
          contacto={contacto}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  )
}

export default ContactList
