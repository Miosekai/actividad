// tarea es aprender
// el martes pequeño quiz, (cualquier cosa del repaso)
// si o sí una función y objetos
// live coding. Es necesario para lo que sigue
// haga los ejercicios pasados

/*
// declaración nombre   asignación  literal
// let         myVar    =           0;

// como es let entonces puedo cambiar su valor
myVar = undefined;

myVar = null;
console.log(myVar);

// mostrar los primitivos con el typeof
myVar = 0;
myVar = true;
myVar = false;
myVar = "hola";
myVar = "";

console.log(typeof myVar); // se infiere el type, pero typeof me lo dice

// "const" es una caja especial con la no puedo cambiar su contenido

const myVar2 = 0;
myVar2 = 2;
console.log(myVar);

// value example
let a = 90;
let b = a;
a = 100;
// b = ?
//Answer: b = 90

// que fue lo que hice? guardar una copia del valor de una caja en otra

// ref example
var a = [1, 2, 3];
var b = a;
a[0] = 3;
// b = ?
// Answer: b = [3, 2, 3]

// que fue lo que hice? guardar la referencia de una caja en otra

*/
///////////////////// Objetos

const pepito = {
  name: "pepito",
  lastName: "gomez",
  age: 20,
  greet() {
    return "hola, soy " + this.name;
  },
  getFullName() {
    return this.name + " " + this.lastName;
  },
};

// toca crear muchas personas a mano, copiando y pegando, entonces lo mejor es crear una fabrica de personas, es decir, una clase

class Persona {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return "reproduciendo " + this.name;
  }

  // esto es un método
  getFullName() {
    return this.name + " " + this.lastName;
  }
}
// el "this" hace referencia a la persona que se está creando en esa clase

const juanito = new Persona("juanito", "gomez", 20);
const ramoncito = new Persona("ramoncito", "lopez", 39);
const julianita = new Persona("julianita", "perez", 19);
console.log(juanito);

function getOldest(people) {
  let oldPerson = people[0];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.age > oldPerson.age) {
      oldPerson = person;
    }
  }

  return oldPerson;
}

const grupo = [juanito, ramoncito, julianita];
const oldest = getOldest(grupo);
console.log(oldest);

const response = window.prompt("what do you want to do? 1. get oldest");
if (response === "1") {
  const oldest = getOldest(grupo);
  console.log(oldest);
}

// una lista de peliculas/canciones (son objetos). Hacer funciones que traigan las que duren mas de x tiempo. getLongest, getShortest, addMovie, removeMovieByName, sea creativo y cree más funciones
