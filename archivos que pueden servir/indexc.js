// JSON
let monk = {
    nombres:"Jose Andrés",
    apellidos:"Moncada Quintero",
    saludar: function() {
        console.log("Hola! soy: " + this.nombres);
    }
}
monk.saludar();
class Persona{
    constructor(nombres, apellidos, edad){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    saludar(){
        console.log("Hola! soy: " + this.nombres);
    }
}
let misPersonas = [];
misPersonas.push(new Persona("Andrés","Moncada",30));
misPersonas.push(new Persona("Pepito","López",35));
misPersonas.push(new Persona("Luis","Contreras",15));
misPersonas.push(new Persona("Felipe","Ferrer",30));
misPersonas.push(new Persona("Andrea","Ortiz",25));
for (let i = 0 ; i < misPersonas.length ; i ++) {
    let actual = misPersonas[i];
    if(actual.edad > 30){
        console.log(actual.nombres +" "+actual.apellidos);
    }
}
let personaConMenorEdad = misPersonas[0];
for (let i = 0 ; i < misPersonas.length ; i ++) {
    let actual = misPersonas[i];
    if( actual.edad < personaConMenorEdad.edad ){
        personaConMenorEdad = actual;
    }
}
console.log(personaConMenorEdad);

let opcion = window.prompt("selecciona una opción: \n 1. para hola \n 2. para chao \n 3. para piropo");
switch(opcion){
    case "1":
        console.log("hola");
    break;
    case "2":
        console.log("chao");
    break;
    case "3":        
        let nombre = window.prompt("Insertar nombre");
        piropiar(nombre);
    break;
}
function piropiar(nombre) {
    console.log("te ves increible: " + nombre);
}

