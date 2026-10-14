import { Nodo } from './Nodo';

export class ArbolBinario {
  raiz: Nodo | null = null;

  insertar(valor: number): boolean {
    const nuevo = new Nodo(valor);
    if (!this.raiz) {
      this.raiz = nuevo;
      return true;
    }
    let actual = this.raiz;
    while (true) {
      if (valor === actual.valor) return false; // no se permiten repetidos
      if (valor < actual.valor) {
        if (!actual.izquierda) { actual.izquierda = nuevo; return true; }
        actual = actual.izquierda;
      } else {
        if (!actual.derecha) { actual.derecha = nuevo; return true; }
        actual = actual.derecha;
      }
    }
  }
}