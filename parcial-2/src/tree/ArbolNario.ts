import { Nodo, type Elemento } from './Nodo';
import { listar } from './recorridos';

export const RAIZ_ID = 'raiz';

export class ArbolNario {
  raiz: Nodo;

  constructor() {
    this.raiz = new Nodo({ id: RAIZ_ID, nombre: 'Mi unidad', tipo: 'carpeta', padreId: '', creadoPor: '' });
  }

  buscar(id: string, nodo: Nodo = this.raiz): Nodo | null {
    if (nodo.valor.id === id) {
      return nodo;
    }
    for (let hijo of nodo.hijos) {
      const encontrado = this.buscar(id, hijo);
      if (encontrado) {
        return encontrado;
      }
    }
    return null;
  }

  validar(padreId: string, nombre: string) {
    const padre = this.buscar(padreId);
    if (!padre) {
      throw new Error('La carpeta destino no existe');
    }
    if (!padre.esCarpeta()) {
      throw new Error('Un archivo no puede tener hijos');
    }
    const repetido = padre.hijos.some((hijo) => hijo.valor.nombre.toLowerCase() === nombre.toLowerCase());
    if (repetido) {
      throw new Error(`Ya existe "${nombre}" en ${padre.valor.nombre}`);
    }
    return padre;
  }

  insertar(elemento: Elemento) {
    const padre = this.validar(elemento.padreId, elemento.nombre);
    const nuevoNodo = new Nodo(elemento);
    padre.agregarHijo(nuevoNodo);
    return nuevoNodo;
  }

  contar() {
    const nodos = listar(this.raiz).slice(1);
    const carpetas = nodos.filter((nodo) => nodo.esCarpeta()).length;
    return { carpetas, archivos: nodos.length - carpetas };
  }

  static desdeLista(elementos: Elemento[]) {
    const arbol = new ArbolNario();
    const nodos = new Map<string, Nodo>();
    nodos.set(RAIZ_ID, arbol.raiz);

    for (let elemento of elementos) {
      nodos.set(elemento.id, new Nodo(elemento));
    }

    for (let elemento of elementos) {
      const padre = nodos.get(elemento.padreId);
      const hijo = nodos.get(elemento.id)!;
      if (padre && padre.esCarpeta()) {
        padre.agregarHijo(hijo);
      }
    }

    return arbol;
  }
}