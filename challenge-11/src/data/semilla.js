import { Graph } from '../lib/Graph'

export const crearGrafo = () => {
  const grafo = new Graph()

  grafo.addCity('Cali')
  grafo.addCity('Bogotá')
  grafo.addCity('Medellín')

  grafo.addPerson('Jorge', 22, 'Cali')
  grafo.addPerson('Ana', 21, 'Cali')
  grafo.addPerson('Luis', 25, 'Bogotá')
  grafo.addPerson('Sofía', 23, 'Medellín')
  grafo.addPerson('Camilo', 24, 'Bogotá')

  grafo.addFriendship('Jorge', 'Ana')
  grafo.addFriendship('Jorge', 'Luis')
  grafo.addFriendship('Ana', 'Sofía')
  grafo.addFriendship('Luis', 'Camilo')

  return grafo
}