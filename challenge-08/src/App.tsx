import { arbol } from './data';

console.log('InOrder:  ', arbol.inOrder().join(' - '));
console.log('PreOrder: ', arbol.preOrder().join(' - '));
console.log('PostOrder:', arbol.postOrder().join(' - '));

export default function App() {
  return <h1>Árbol Binario</h1>;
}

console.log('¿Está 40?', arbol.buscar(40)); // true
console.log('¿Está 99?', arbol.buscar(99)); // false