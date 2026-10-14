import { arbol } from './data';

console.log('InOrder:  ', arbol.inOrder().join(' - '));
console.log('PreOrder: ', arbol.preOrder().join(' - '));
console.log('PostOrder:', arbol.postOrder().join(' - '));

export default function App() {
  return <h1>Árbol Binario</h1>;
}