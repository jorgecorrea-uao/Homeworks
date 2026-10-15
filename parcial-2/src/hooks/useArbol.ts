import { useContext, useEffect, useMemo } from 'react';
import useCollection from './useCollection';
import { AuthContext } from '../context/AuthContext';
import { ArbolNario } from '../tree/ArbolNario';
import { bfs, dfs } from '../tree/recorridos';
import type { ElementoDB, TipoNodo } from '../tree/Nodo';

export function useArbol() {
  const { user } = useContext(AuthContext);
  const { results, isPending, error, getAll, add } = useCollection<ElementoDB>('nodos');

  useEffect(() => {
    getAll();
  }, [getAll]);

  const arbol = useMemo(() => ArbolNario.desdeLista(results), [results]);

  useEffect(() => {
    console.log('--- DFS ---');
    dfs(arbol.raiz);
    console.log('--- BFS ---');
    bfs(arbol.raiz);
  }, [arbol]);

  const crear = async (padreId: string, nombre: string, tipo: TipoNodo) => {
    if (!user?.email) {
      throw new Error('Debes iniciar sesión para crear carpetas o archivos');
    }

    const limpio = nombre.trim();
    if (!limpio) {
      throw new Error('El nombre no puede estar vacío');
    }

    arbol.validar(padreId, limpio);

    const ref = await add({ nombre: limpio, tipo, padreId, creadoPor: user.email });
    if (ref) {
      await getAll();
    }
  };

  return { arbol, isPending, error, crear };
}