// PUNTO 2: FUNCION QUE RECIBE UN NUMERO E IMPRIME SI ES PAR O IMPAR

// VERSION REGULAR 
function parImparRegular(numero) {
  if (numero % 2 === 0) {
    console.log("regular ->", numero, "es par");
  } else {
    console.log("regular ->", numero, "es impar");
  }
}

// VERSION ARROW
const parImparArrow = (numero) => {
  if (numero % 2 === 0) {
    console.log("arrow   ->", numero, "es par");
  } else {
    console.log("arrow   ->", numero, "es impar");
  }
};

// PRUEBAS 

parImparRegular(72); 
parImparArrow(72);
parImparRegular(10); 
parImparArrow(10);
parImparRegular(0); 
parImparArrow(0);
parImparRegular(-3); 
parImparArrow(-3);
parImparRegular(-8);
parImparArrow(-8);
