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

  inOrder(nodo = this.raiz, res: number[] = []): number[] {   // L-N-R
    if (nodo) {
      this.inOrder(nodo.izquierda, res);
      res.push(nodo.valor);
      this.inOrder(nodo.derecha, res);
    }
    return res;
  }

  preOrder(nodo = this.raiz, res: number[] = []): number[] {  // N-L-R
    if (nodo) {
      res.push(nodo.valor);
      this.preOrder(nodo.izquierda, res);
      this.preOrder(nodo.derecha, res);
    }
    return res;
  }

  postOrder(nodo = this.raiz, res: number[] = []): number[] { // L-R-N
    if (nodo) {
      this.postOrder(nodo.izquierda, res);
      this.postOrder(nodo.derecha, res);
      res.push(nodo.valor);
    }
    return res;
  }


}
