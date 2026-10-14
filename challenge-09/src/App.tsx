import { raiz } from './data';
import { dfs, bfs } from './tree/recorridos';

console.log('--- DFS ---');
dfs(raiz);

console.log('--- BFS ---');
bfs(raiz);

const App = () => <h1>Menú</h1>;

export default App;