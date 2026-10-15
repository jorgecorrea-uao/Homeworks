export type TipoNodo = 'carpeta' | 'archivo';

export interface Elemento {
  id: string;
  nombre: string;
  tipo: TipoNodo;
  padreId: string;
  creadoPor: string;
}

export type ElementoDB = Omit<Elemento, 'id'>;

export class Nodo {
  valor: Elemento;
  hijos: Nodo[];

  constructor(valor: Elemento) {
    this.valor = valor;
    this.hijos = [];
  }

  agregarHijo(nodo: Nodo) {
    if (!this.esCarpeta()) {
      throw new Error('Un archivo no puede tener hijos');
    }
    this.hijos.push(nodo);
  }

  isLeaf() {
    if (this.hijos.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  esCarpeta() {
    return this.valor.tipo === 'carpeta';
  }
}