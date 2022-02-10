let circulos = [];
let cuadrados = [];
let triangulos = [];
let tiempodecirculos = 1000;
let tcrear = 0;
let circuloseg;
let cuadradotiempo = 1000;
let triangulotiempo = 1000;
let rectangulotiempo = 1000;
let colorBtn = document.getElementById("colorBtn");
//let color=[120,100,100];

function setup() {
  createCanvas(1050, 900);
  tcrear = random(1, 6);
  
  setInterval(producircuadrados, cuadradotiempo);
  setInterval(produccirCirculo,100);
  setInterval(producirTriangulo,triangulotiempo);
}

function draw() {
  background(220);

  // for de los circulos
  for (let i = 0; i < circulos.length; i++) {
    circulos[i].pintar();
    circulos[i].tiempo();
    circulos[i].tamaño();
  }

  // for de cuadrados
  for (let i = 0; i < cuadrados.length; i++) {
      cuadrados[i].pintar();
  }

  //for de triangulos
  for (let i = 0; i < triangulos.length; i++) {
    triangulos[i].pintar();
}
}

//////////////////////////////CIRCULOS//////////////////////////////
 
///Crear
  function produccirCirculo() {
   
    aparecer = (parseInt(random(1, 5)) * 1000);
    if (tiempodecirculos == aparecer) {
      let circulo = new Circulo();
      circulo.setColor(color);
      circulos.push(circulo);
    }
  }



///Borrar
  function eliminarcir() {
    for (let i = 0; i < circulos.length; i++) {
      if (circulos[i].getTransparencia() === 0 || circulos[i].getRadio() === 0) {
        circulos.splice(i, 1);
      }
    }
  }
  
  ///////////////////////////////////////////////////////////////////

  //////////////////////////////CUADRADOS//////////////////////////////

 //// Crear
  function producircuadrados() {
    cuadrados.push(new Cuadrado());
    
  }

  ///Borrar
  
  function borrarcuadrados() {
    for (let i = 0; i < cuadrados.length; i++) {
      if (cuadrados[i].getY() === 700) {
        cuadrados.splice(i, 1);
      }
    }
  }

  borrarcuadrados();
  ///////////////////////////////////////////////////////////////////

  //////////////////////////////TRIANGULOS//////////////////////////////

  function producirTriangulo() {
    triangulos.push(new Triangulo());
   
  }

  function eliminarTriangulo(){

    setInterval(producircuadrados, cuadradotiempo);
    
    for (let i = 0; i < triangulos.length; i++) {
      if ( triangulo=== 700) {
        cuadrados.splice(i, 1);
      }
    }
  }

  ///////////////////////////////////////////////////////////////////
  // mousepressed
  mousePressed();
  function mousePressed() {

    for (let i = 0; i < circulos.length; i++) {
      if (dist(mouseX, mouseY, circulos[i].getX(), circulos[i].getY()) < 75) {
        circulos[i].setdirecciondecirculos(1);
      }
    }

  for (let i = 0; i < cuadrados.length; i++) {
    if (dist(mouseX, mouseY, cuadrados[i].getX() + cuadrados[i].getlados() / 2, cuadrados[i].getY() + cuadrados[i].getlados() / 2) < 75) {
      cuadrados[i].detener();
    }
  }
}

function cambiarColor(){
  let r= parseInt(Math.random()*(255-10)+10);
  let g= parseInt(Math.random()*(255-10)+10);
  let b= parseInt(Math.random()*(255-10)+10);
  color =[r,g,b];
}

colorBtn.addEventListener("click",cambiarColor);