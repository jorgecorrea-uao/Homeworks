import { Nodo, type Elemento } from './Nodo';

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

  validar(padreId: string) {
    const padre = this.buscar(padreId);
    if (!padre) {
      throw new Error('La carpeta destino no existe');
    }
    if (!padre.esCarpeta()) {
      throw new Error('Un archivo no puede tener hijos');
    }
    return padre;
  }

  insertar(elemento: Elemento) {
    const padre = this.validar(elemento.padreId);
    padre.agregarHijo(new Nodo(elemento));
  }

  cargarHijos(padre: Nodo, elementos: Elemento[]) {
    for (let elemento of elementos) {
      if (elemento.padreId === padre.valor.id) {
        const hijo = new Nodo(elemento);
        padre.agregarHijo(hijo);
        this.cargarHijos(hijo, elementos);
      }
    }
  }

  static desdeLista(elementos: Elemento[]) {
    const arbol = new ArbolNario();
    arbol.cargarHijos(arbol.raiz, elementos);
    return arbol;
  }
}