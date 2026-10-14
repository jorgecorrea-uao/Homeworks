import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { raiz } from './data';
import { dfs, bfs, listar } from './tree/recorridos';
import './App.css';

console.log('--- DFS ---');
dfs(raiz);

console.log('--- BFS ---');
bfs(raiz);

const nodos = listar(raiz);

const App = () => (
  <BrowserRouter>
    <div className="layout">
      <Sidebar raiz={raiz} />
      <main className="contenido">
        <Routes>
          {nodos.map((nodo) => {
            const Pagina = nodo.valor.component;
            return <Route key={nodo.valor.link} path={nodo.valor.link} element={<Pagina />} />;
          })}
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;