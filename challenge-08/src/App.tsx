import Tree from 'react-d3-tree';
import { arbol, numeros } from './data';

console.log('InOrder:  ', arbol.inOrder().join(' - '));
console.log('PreOrder: ', arbol.preOrder().join(' - '));
console.log('PostOrder:', arbol.postOrder().join(' - '));
console.log('¿Está 40?', arbol.buscar(40)); // true
console.log('¿Está 99?', arbol.buscar(99)); // false

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Árbol Binario</h1>
      <p>Insertados: {numeros.join(', ')}</p>
      <div style={{ width: '100%', height: '80vh', border: '1px solid #ccc', background: '#fff', borderRadius: 8 }}>
        <Tree
          data={arbol.aD3()}
          orientation="vertical"
          pathFunc="straight"
          translate={{ x: 220, y: 60 }}
          zoom={1.4}
          collapsible={false}
        />
      </div>
    </div>
  );
}