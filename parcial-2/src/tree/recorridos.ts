import type { Nodo } from './Nodo';
import { Queue } from './Queue';

export function dfs(nodo: Nodo) {
  console.log(nodo.valor.nombre);
  for (let hijo of nodo.hijos) {
    dfs(hijo);
  }
}

export function bfs(raiz: Nodo) {
  const cola = new Queue<Nodo>();
  cola.enqueue(raiz);
  while (!cola.isEmpty()) {
    const actual = cola.dequeue()!;
    console.log(actual.valor.nombre);
    for (let hijo of actual.hijos) {
      cola.enqueue(hijo);
    }
  }
}

export function listar(nodo: Nodo, lista: Nodo[] = []) {
  lista.push(nodo);
  for (let hijo of nodo.hijos) {
    listar(hijo, lista);
  }
  return lista;
}