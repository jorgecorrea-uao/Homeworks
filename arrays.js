// INSTANCE METHODS

// at(): devuelve el elemento de una posicion, admite negativos
const notas = [3.5, 4.0, 2.8, 5.0];
console.log("at(1):", notas.at(1));
console.log("at(-2):", notas.at(-2));

// concat(): une dos arrays en uno nuevo
const semana = ["lun", "mar"];
const finde = ["sab", "dom"];
console.log("concat:", semana.concat(finde));

// copyWithin(): copia un pedazo sobre otra parte del mismo array, la longitud no cambia
const equipos = ["Cali", "America", "Nacional", "Millos", "Junior"];
equipos.copyWithin(0, 3, 4); // pega lo de la pos 3 en la pos 0
console.log("copyWithin:", equipos);

// entries(): iterador con pares [posicion, valor]
const podio = ["oro", "plata", "bronce"];
for (const [i, medalla] of podio.entries()) {
  console.log("entries:", i+1, medalla);
}

// every(): true solo si todos cumplen
const parciales = [3.2, 4.1, 2.9];
console.log("every:", parciales.every(n => n >= 3.0)); // false por el 2.9

// fill(valor, desde, hasta): rellena con un valor fijo
const casillas = [1, 2, 3, 4, 5];
casillas.fill(0, 1, 3);
console.log("fill:", casillas);

// filter(): array nuevo solo con los que cumplen
const edades = [15, 22, 8, 40];
console.log("filter:", edades.filter(e => e >= 18));

// find(): el primer elemento que cumpla, o undefined
const stock = [0, 0, 7, 3];
console.log("find:", stock.find(n => n > 0));

// findIndex(): igual pero devuelve la posicion, -1 si ninguno cumple
console.log("findIndex:", stock.findIndex(n => n > 0));

// findLast() y findLastIndex(): lo mismo pero buscando desde el final
const temperaturas = [18, 25, 31, 22];
console.log("findLast:", temperaturas.findLast(t => t > 20));
console.log("findLastIndex:", temperaturas.findLastIndex(t => t > 20));

// flat(): aplana arrays anidados, el numero son los niveles
const anidado = [1, [2, 3], [4, [5, 6]]];
console.log("flat():", anidado.flat()); // [1,2,3,4,[5,6]]
console.log("flat(2):", anidado.flat(2));

// flatMap(): un map() y despues un flat(1)
const frases = ["hola mundo", "chao"];
console.log("flatMap:", frases.flatMap(f => f.split(" ")));

// forEach(): recorre y ejecuta, no devuelve nada
["Ana", "Luis"].forEach((nombre, i) => console.log("forEach:", i, nombre));

// includes(): true o false segun si esta el elemento
const frutas = ["pera", "uva", "mango", "uva"];
console.log("includes:", frutas.includes("mango"));

// indexOf() y lastIndexOf(): posicion de la primera y de la ultima coincidencia
console.log("indexOf:", frutas.indexOf("uva")); // 1
console.log("lastIndexOf:", frutas.lastIndexOf("uva")); // 3

// join(): convierte el array en texto con el separador que uno elija
console.log("join:", ["Cali", "Bogota", "Medellin"].join(" - "));

// keys(): iterador solo con las posiciones
const abecedario = ["a", "b", "c"];
console.log("keys:", [...abecedario.keys()]);

// map(): array nuevo aplicando una funcion a cada elemento, misma longitud
const precios = [1000, 2500, 800];
console.log("map:", precios.map(p => p * 2));
console.log("map original:", precios); // los que no mutan dejan el original igual

// pop(): saca el ultimo y lo devuelve. Muta.
const materias = ["Fisica", "Algoritmos", "Bases de Datos"];
console.log("pop devuelve:", materias.pop());
console.log("pop original:", materias);

// push(): agrega al final y devuelve la nueva longitud, no el array. Muta.
const pila = [1, 2];
console.log("push devuelve:", pila.push(3)); // 3
console.log("push original:", pila);

// reduce(): acumula todo el array en un solo valor
const gastos = [1000, 2500, 800];
console.log("reduce:", gastos.reduce((acum, g) => acum + g, 0));

// reduceRight(): igual pero empezando por el final
const iniciales = ["a", "b", "c"];
console.log("reduceRight:", iniciales.reduceRight((acum, v) => acum + v)); // "cba"

// reverse(): invierte el orden. Muta.
const orden = [1, 2, 3];
orden.reverse();
console.log("reverse:", orden);

// shift(): saca el primero y lo devuelve. Muta.
const fila = ["Ana", "Luis", "Sara"];
console.log("shift devuelve:", fila.shift());
console.log("shift original:", fila);

// slice(desde, hasta): copia un pedazo, el "hasta" no se incluye
const letras = ["a", "b", "c", "d", "e"];
console.log("slice:", letras.slice(1, 3));

// some(): true si al menos uno cumple
const puntajes = [40, 55, 90];
console.log("some:", puntajes.some(p => p >= 80));

// sort(): muta. Por defecto ordena como texto, para numeros toca pasarle la funcion
const numeros = [10, 9, 100, 2];
console.log("sort por defecto:", numeros.sort()); // [10,100,2,9]
console.log("sort con funcion:", numeros.sort((a, b) => a - b));

// splice(desde, cuantos borrar, ...que insertar): borra e inserta donde sea. Muta.
const dias = ["lunes", "martes", "jueves", "viernes"];
console.log("splice devuelve:", dias.splice(2, 0, "miercoles")); // [] porque no borro nada
console.log("splice original:", dias);

// toLocaleString(): texto con cada elemento formateado segun el idioma
const montos = [1234.5, 9876.25];
console.log("toLocaleString:", montos.toLocaleString("es-CO")); // varia segun el sistema

// toReversed(), toSorted(), toSpliced(): las versiones que devuelven copia
const ranking = [1, 2, 3];
console.log("toReversed:", ranking.toReversed());
console.log("toReversed original:", ranking); // intacto, esa es la gracia de las to*

const desordenado = [3, 1, 2];
console.log("toSorted:", desordenado.toSorted());

const meses = ["ene", "feb", "abr"];
console.log("toSpliced:", meses.toSpliced(2, 0, "mar"));

// toString(): es un join(",") pero sin poder elegir el separador
console.log("toString:", [1, 2, 3].toString());

// unshift(): agrega al principio y devuelve la nueva longitud. Muta.
const cola = ["b", "c"];
console.log("unshift devuelve:", cola.unshift("a"));
console.log("unshift original:", cola);

// values(): iterador solo con los valores
const vocales = ["a", "e", "i"];
console.log("values:", [...vocales.values()]);

// with(posicion, nuevoValor): copia con un elemento cambiado
const original = ["x", "y", "z"];
console.log("with:", original.with(1, "Y"));

// [Symbol.iterator](): es lo que permite el for...of y el spread
const iterable = ["p", "q"];
const it = iterable[Symbol.iterator]();
console.log("Symbol.iterator:", it.next()); // { value: "p", done: false }


// INSTANCE PROPERTIES

// length: es propiedad, va sin parentesis
const colores = ["rojo", "verde", "azul"];
console.log("length:", colores.length);


// STATIC METHODS

// Array.isArray(): typeof no sirve para esto porque devuelve "object"
console.log("isArray:", Array.isArray([1, 2]), Array.isArray("hola"));

// Array.from(): crea un array desde algo iterable y de paso puede transformarlo
console.log("from texto:", Array.from("UAO"));
console.log("from funcion:", Array.from([1, 2, 3], n => n * n));

// Array.of(): Array.of(5) da [5], pero Array(5) da 5 espacios vacios
console.log("of:", Array.of(5));
console.log("diferencia con Array(5):", Array(5).length);

// Array.fromAsync(): como from() pero con iterables asincronos, devuelve promesa
(async () => {
  console.log("fromAsync:", await Array.fromAsync([Promise.resolve(1), Promise.resolve(2)]));
})();
