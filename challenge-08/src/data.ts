import { ArbolBinario } from './tree/ArbolBinario';

export const numeros = [50, 30, 70, 20, 40, 60, 80, 35, 65];
export const arbol = new ArbolBinario();
numeros.forEach((n) => arbol.insertar(n));