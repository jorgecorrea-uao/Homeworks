import type { ComponentType } from 'react';

export interface MenuItem {
  title: string;
  link: string;
  component: ComponentType;
}

export class Nodo {
  valor: MenuItem;
  hijos: Nodo[];

  constructor(valor: MenuItem) {
    this.valor = valor;
    this.hijos = [];
  }

  agregarHijo(nodo: Nodo) {
    this.hijos.push(nodo);
  }
}