// pinta un solo contacto con su boton de eliminar
// recibe por props el contacto y la funcion que lo borra en App
function ContactItem({ contacto, onEliminar }) {
  return (
    <li className="item">
      <div className="datos">
        <strong>{contacto.nombre}</strong>
        <span>{contacto.telefono}</span>
      </div>

      {/* la flecha es necesaria: sin ella se ejecutaria al renderizar */}
      <button type="button" onClick={() => onEliminar(contacto.id)}>
        Eliminar
      </button>
    </li>
  )
}

export default ContactItem
