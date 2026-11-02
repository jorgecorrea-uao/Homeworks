export class Graph {
  constructor() {
    this.nodes = []
    this.adjList = {}
  }

  addNode(node) {
    if (!this.searchNode(node.id)) {
      this.nodes.push(node)
      this.adjList[node.id] = []
    }
  }

  addEdge(node1, node2) {
    if (!this.searchNode(node1) || !this.searchNode(node2)) return
    if (this.adjList[node1].includes(node2)) return
    this.adjList[node1].push(node2)
    this.adjList[node2].push(node1)
  }

  searchNode(id) {
    if (!this.nodes.length) return
    return this.nodes.find(n => n.id === id)
  }

  isEmpty() {
    return this.nodes.length === 0
  }

  removeNode(id) {
    if (!this.searchNode(id)) return
    this.adjList[id].forEach(vecino => {
      this.adjList[vecino] = this.adjList[vecino].filter(x => x !== id)
    })
    delete this.adjList[id]
    this.nodes = this.nodes.filter(n => n.id !== id)
  }

  printAdjacency(id) {
    if (this.searchNode(id)) console.log(this.adjList[id])
  }

  printGraph() {
    console.log(this.adjList)
  }

  addCity(nombre) {
    this.addNode({ id: nombre, tipo: 'ciudad', nombre })
  }

  addPerson(nombre, edad, ciudad) {
    if (this.searchNode(ciudad)?.tipo !== 'ciudad') return
    this.addNode({ id: nombre, tipo: 'persona', nombre, edad, ciudad })
    this.addEdge(nombre, ciudad)
  }

  addFriendship(persona1, persona2) {
    if (persona1 === persona2) return
    if (this.searchNode(persona1)?.tipo !== 'persona') return
    if (this.searchNode(persona2)?.tipo !== 'persona') return
    this.addEdge(persona1, persona2)
  }

  removeCity(nombre) {
    if (this.peopleInCity(nombre).length) return false
    this.removeNode(nombre)
    return true
  }

  getCities() {
    return this.nodes.filter(n => n.tipo === 'ciudad')
  }

  getPeople() {
    return this.nodes.filter(n => n.tipo === 'persona')
  }

  peopleInCity(ciudad) {
    return this.getPeople().filter(p => p.ciudad === ciudad)
  }

  printPeopleInCity(ciudad) {
    console.log(ciudad, this.peopleInCity(ciudad).map(p => `${p.nombre} (${p.edad})`))
  }

  toD3() {
    const nodes = this.nodes.map(n =>
      n.tipo === 'ciudad'
        ? { id: n.id, color: '#e8590c', size: 600, symbolType: 'square' }
        : { id: n.id, color: '#1c7ed6', size: 300 }
    )
    const links = []
    Object.entries(this.adjList).forEach(([source, vecinos]) => {
      vecinos.forEach(target => {
        if (source >= target) return
        const amistad = this.searchNode(source).tipo === 'persona' && this.searchNode(target).tipo === 'persona'
        links.push({ source, target, color: amistad ? '#2f9e44' : '#adb5bd' })
      })
    })
    return { nodes, links }
  }
}