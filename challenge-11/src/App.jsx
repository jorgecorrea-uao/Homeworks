import { useState } from 'react'
import { crearGrafo } from './data/semilla'
import { GrafoVisual } from './components/GrafoVisual'
import { PersonasPorCiudad } from './components/PersonasPorCiudad'
import './App.css'

function App() {
  const [grafo] = useState(crearGrafo)
  const [data, setData] = useState(() => grafo.toD3())
  const [ciudadSel, setCiudadSel] = useState('Cali')
  const [nuevaCiudad, setNuevaCiudad] = useState('')
  const [persona, setPersona] = useState({ nombre: '', edad: '', ciudad: '' })
  const [amistad, setAmistad] = useState({ a: '', b: '' })
  const [aEliminar, setAEliminar] = useState('')

  const ciudades = grafo.getCities()
  const personas = grafo.getPeople()

  const refrescar = () => {
    setData(grafo.toD3())
    grafo.printGraph()
  }

  const verCiudad = (ciudad) => {
    setCiudadSel(ciudad)
    if (ciudad) grafo.printPeopleInCity(ciudad)
  }

  const agregarCiudad = (e) => {
    e.preventDefault()
    const nombre = nuevaCiudad.trim()
    if (!nombre) return
    if (grafo.searchNode(nombre)) return alert(`${nombre} ya existe en el grafo`)
    grafo.addCity(nombre)
    setNuevaCiudad('')
    refrescar()
  }

  const agregarPersona = (e) => {
    e.preventDefault()
    const nombre = persona.nombre.trim()
    const edad = Number(persona.edad)
    if (!nombre || !edad || !persona.ciudad) return alert('Completa nombre, edad y ciudad')
    if (grafo.searchNode(nombre)) return alert(`${nombre} ya existe en el grafo`)
    grafo.addPerson(nombre, edad, persona.ciudad)
    setPersona({ nombre: '', edad: '', ciudad: '' })
    refrescar()
  }

  const agregarAmistad = (e) => {
    e.preventDefault()
    if (!amistad.a || !amistad.b) return
    if (amistad.a === amistad.b) return alert('Escoge dos personas distintas')
    grafo.addFriendship(amistad.a, amistad.b)
    setAmistad({ a: '', b: '' })
    refrescar()
  }

  const eliminarNodo = (e) => {
    e.preventDefault()
    const nodo = grafo.searchNode(aEliminar)
    if (!nodo) return
    if (nodo.tipo === 'ciudad' && !grafo.removeCity(nodo.id))
      return alert(`No puedes eliminar ${nodo.id}: todavía vive gente ahí`)
    if (nodo.tipo === 'persona') grafo.removeNode(nodo.id)
    if (ciudadSel === nodo.id) setCiudadSel('')
    setAEliminar('')
    refrescar()
  }

  const clickNodo = (id) => {
    const nodo = grafo.searchNode(id)
    if (nodo?.tipo === 'ciudad') verCiudad(id)
    else grafo.printAdjacency(id)
  }

  return (
    <main>
      <h1>Grafo de amigos y ciudades</h1>

      <div className="layout">
        <aside>
          <form className="panel" onSubmit={agregarCiudad}>
            <h2>Nueva ciudad</h2>
            <input placeholder="Nombre" value={nuevaCiudad} onChange={e => setNuevaCiudad(e.target.value)} />
            <button type="submit">Agregar ciudad</button>
          </form>

          <form className="panel" onSubmit={agregarPersona}>
            <h2>Nueva persona</h2>
            <input placeholder="Nombre" value={persona.nombre} onChange={e => setPersona({ ...persona, nombre: e.target.value })} />
            <input type="number" min="1" placeholder="Edad" value={persona.edad} onChange={e => setPersona({ ...persona, edad: e.target.value })} />
            <select value={persona.ciudad} onChange={e => setPersona({ ...persona, ciudad: e.target.value })}>
              <option value="">Ciudad donde vive</option>
              {ciudades.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
            </select>
            <button type="submit">Agregar persona</button>
          </form>

          <form className="panel" onSubmit={agregarAmistad}>
            <h2>Nueva amistad</h2>
            <select value={amistad.a} onChange={e => setAmistad({ ...amistad, a: e.target.value })}>
              <option value="">Persona 1</option>
              {personas.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
            </select>
            <select value={amistad.b} onChange={e => setAmistad({ ...amistad, b: e.target.value })}>
              <option value="">Persona 2</option>
              {personas.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
            </select>
            <button type="submit">Conectar</button>
          </form>

          <form className="panel" onSubmit={eliminarNodo}>
            <h2>Eliminar nodo</h2>
            <select value={aEliminar} onChange={e => setAEliminar(e.target.value)}>
              <option value="">Selecciona un nodo</option>
              {grafo.nodes.map(n => <option key={n.id} value={n.id}>{n.id} ({n.tipo})</option>)}
            </select>
            <button type="submit">Eliminar</button>
          </form>
        </aside>

        <div className="contenido">
          {grafo.isEmpty()
            ? <p>El grafo está vacío</p>
            : <GrafoVisual data={data} onClickNode={clickNodo} />}
          <PersonasPorCiudad grafo={grafo} ciudad={ciudadSel} onChange={verCiudad} />
        </div>
      </div>
    </main>
  )
}

export default App