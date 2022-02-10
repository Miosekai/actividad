////////// Pregunta 1
/*
    cree un Objeto Figura con las propiedades alto, ancho y profundo, y el método obtenerDetalles(), que muestra por pantalla las propiedades de la figura con el formato: sus dimensiones son: [alto] x [ancho] x [profundo].
*/

// opción 1

let figura = {
    alto: 20,
    ancho: 20,
    profundo: 20,
    obtenerDetalles() {
        console.log(`sus dimensiones son: ${this.alto} x ${this.ancho} x ${this.profundo}.`);
    }
}

// opción 2

class Figura {
    constructor(alto, ancho, profundo) {
        this.alto = alto;
        this.ancho = ancho;
        this.profundo = profundo;
    }

    obtenerDetalles() {
        console.log(`sus dimensiones son: ${this.alto} x ${this.ancho} x ${this.profundo}.`);
    }
}

const fiugra = new Figura(20,30,40);


/*
    Pregunta 2
    cree una clase que represente un instrumento musical cualquiera con almenos 4 atributos y 2 metodos coherentes/comunes a cualquier instrumento
*/

class Instrumento {
    constructor(color, sonido,. ...) {

    }

    sonar(){

    }

    obtenerDetalles(){

    }
}

const guitarra = new Instrumento();

///////////////// Funciones
/*
    dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las siguientes condiciones:
    - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
    - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
    - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
*/

function evaluarIdeas(ideas) {
    let mensaje = "";
    let contador = 0;

    for (let i = 0; i < ideas.length; i++) {
        const idea = ideas[i];
        if(idea === "buena"){
            contador++;
        }
    }

    if(contador === 0){
        mensaje = "fallo"
    } else if(contador === 1|| contador === 2) {
        mensaje = "publicar"
    } else {
        mensaje = "fantastico"
    }


    console.log(mensaje)
}

evaluarIdeas(["mala", "mala", "mala"])
evaluarIdeas(["buena", "mala", "mala"])
evaluarIdeas(["buena", "buena", "buena"])

/*
    calcular el factorial de un número
*/

function factorial (n) {
    let producto = 1;
    for (let i = 1; i <= n; i++) {
        producto *= i;
    }
    console.log(producto)
}

/*
    cree una función que imprima todos los números del 1 hasta un parametro n. imprima "trio" si el numero es divisibe por 3. Imprima "quinteto" si es divisible por 5. Imprima "caramba" si es divisible por los dos
*/

function enteros(n) {
    for (let i = 1; i < n; i++) {
        const isDivisiblePor3 = i % 3 === 0;
        const isDivisiblePor5 = i % 5 === 0;

        if(isDivisiblePor3 && isDivisiblePor5) {
            console.log('caramba')
        } else if(isDivisiblePor5){
            console.log('quinteto')
        } else if(isDivisiblePor3){
            console.log('trio')
        } else {
            console.log(i)
        }
    }
}

/*
    cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
    ejemplo del resultado:

    const result = {
        "7": 3,
        "2": 1,
    }
*/

function lanzarDados() {
    const resultado = {};

    for (let i = 0; i < 30; i++) {
        const dado1 = Math.round(Math.random() * 6) || 1;
        const dado2 = Math.round(Math.random() * 6) || 1;
        const suma = dado1 +dado2;

        const valorAnterior = resultado[suma] || 0;
        resultado[suma] =  valorAnterior + 1;
    }

    return resultado;
}


 
  
  
  
  