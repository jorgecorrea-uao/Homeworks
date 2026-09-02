// PUNTO 1: DIFERENCIAS ENTRE ARROW FUNCTIONS Y REGULAR FUNCTIONS

// 1. SINTAXIS
// la regular usa la palabra function, la arrow usa =>
function dobleRegular(n) {
  return n * 2;
}
const dobleArrow = (n) => {
  return n * 2;
};
console.log("1. sintaxis:", dobleRegular(5), dobleArrow(5));

// 2. RETURN IMPLICITO
// si la arrow cabe en una linea y no lleva llaves, retorna sola
const tripleArrow = (n) => n * 3; // sin return y sin llaves
console.log("2. return implicito:", tripleArrow(5));

// 3. HOISTING
// la regular se puede llamar ANTES de declararla, la arrow no
console.log("3. hoisting regular:", saludoRegular()); // funciona
function saludoRegular() {
  return "hola desde la regular";
}

try {
  saludoArrow(); // truena, todavia no existe
} catch (error) {
  console.log("3. hoisting arrow:", error.constructor.name); // ReferenceError
}
const saludoArrow = () => "hola desde la arrow";

// 4. THIS  
// la regular define su this segun COMO se llama
// la arrow no tiene this propio, hereda el de donde fue escrita
const persona = {
  nombre: "JDSN",
  presentarRegular: function () {
    console.log("4. this en regular:", this.nombre); // "JDSN", this es persona
  },
  presentarArrow: () => {
    console.log("4. this en arrow:", this.nombre); // undefined, this es el del archivo
  },
};
persona.presentarRegular();
persona.presentarArrow();

// 5. THIS DENTRO DE UN CALLBACK
// aqui se ve para que sirve la arrow: mantiene el this de afuera
const carrito = {
  producto: "camiseta",
  tallas: ["S", "M", "L"],
  listarConArrow: function () {
    this.tallas.forEach((talla) => {
      // la arrow hereda el this de listarConArrow, o sea carrito
      console.log("5. arrow ve el this:", this.producto, talla);
    });
  },
  listarConRegular: function () {
    this.tallas.forEach(function (talla) {
      // la regular crea su propio this, se pierde la referencia a carrito
      console.log("5. regular pierde el this:", this === undefined ? "undefined" : this.producto, talla);
    });
  },
};
carrito.listarConArrow();
carrito.listarConRegular();

// 6. ARGUMENTS
// la regular tiene el objeto arguments con todo lo que le pasaron
function argumentosRegular() {
  console.log("6. arguments en regular:", arguments.length);
}
argumentosRegular("a", "b", "c"); // 3

// la arrow no tiene arguments propio, toma el de la funcion que la contiene
function contenedora() {
  const interna = () => {
    console.log("6. arguments en arrow:", arguments.length); // 2, los de contenedora
  };
  interna(1, 2, 3, 4, 5); // le paso 5 pero imprime 2
}
contenedora("x", "y");

// la arrow usa rest parameters en su lugar
const argumentosArrow = (...args) => {
  console.log("6. rest en arrow:", args.length);
};
argumentosArrow("a", "b", "c"); // 3

// 7. CONSTRUCTOR (new)
// la regular sirve como constructor, la arrow no
function AnimalRegular(nombre) {
  this.nombre = nombre;
}
const perro = new AnimalRegular("Firulais");
console.log("7. new con regular:", perro.nombre);

const AnimalArrow = (nombre) => {
  this.nombre = nombre;
};
try {
  new AnimalArrow("Michi"); // truena
} catch (error) {
  console.log("7. new con arrow:", error.constructor.name); // TypeError
}

// 8. PROTOTYPE
// la regular trae prototype para heredar, la arrow no
console.log("8. prototype regular:", typeof AnimalRegular.prototype); // object
console.log("8. prototype arrow:", typeof AnimalArrow.prototype); // undefined


