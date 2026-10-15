import { ArbolNario, RAIZ_ID } from './tree/ArbolNario';
import { bfs, dfs } from './tree/recorridos';

const arbol = new ArbolNario();
arbol.insertar({ id: '1', nombre: 'Documentos', tipo: 'carpeta', padreId: RAIZ_ID, creadoPor: 'test@uao.edu.co' });
arbol.insertar({ id: '2', nombre: 'notas.txt', tipo: 'archivo', padreId: '1', creadoPor: 'test@uao.edu.co' });
arbol.insertar({ id: '3', nombre: 'Fotos', tipo: 'carpeta', padreId: RAIZ_ID, creadoPor: 'test@uao.edu.co' });

try {
  arbol.insertar({ id: '4', nombre: 'x.txt', tipo: 'archivo', padreId: '2', creadoPor: 'test@uao.edu.co' });
} catch (error) {
  console.log((error as Error).message);
}

console.log('--- DFS ---');
dfs(arbol.raiz);
console.log('--- BFS ---');
bfs(arbol.raiz);
console.log(arbol.contar());

export const App = () => <h1>Parcial 2</h1>;