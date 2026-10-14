import type { Nodo } from './Nodo';

export function dfs(nodo: Nodo) {
  console.log(nodo.valor.title);
  for (let hijo of nodo.hijos) {
    dfs(hijo);
  }
}

export function bfs(raiz: Nodo) {
  const cola = [raiz];
  while (cola.length > 0) {
    const actual = cola.shift()!;
    console.log(actual.valor.title);
    cola.push(...actual.hijos);
  }
}

export function listar(nodo: Nodo, lista: Nodo[] = []): Nodo[] {
  lista.push(nodo);
  for (let hijo of nodo.hijos) {
    listar(hijo, lista);
  }
  return lista;
}