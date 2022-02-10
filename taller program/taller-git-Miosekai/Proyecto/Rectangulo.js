class Rectangulo {

    constructor(x, y, moviX, moviY) {

        this.moviX;
        this.moviY;

        this.lado = random(100, 150);
        this.radio = parseInt(this.lado * this.lado);

        this.x = random(0, 880);
        this.y = random(-400, -100);

        this.rcaer = true;

        this.movimiento = false;
    }


    pintar() {

        strokeWeight(4);
        stroke(30);
        fill(119,221,119 );
        rect(this.x, this.posy, this.lado + 50, this.lado);
        this.cayendo();
        this.movirectangulo();

    }


    caidarect() {

        if (this.caer === true) {
            this.y += random(0.1, 1);
        }
    }

    detenercaida() {

        this.caer = !this.caer;

    }

    movRect() {

        if (this.movimiento == true) {
            this.moviX = random(-2, 2);
            this.moviY = random(-2, 2);
            this.x += this.moviX;
            this.y += this.moviY;
        }
        
    }

getmovRect(){

    return this.movimiento;

}

setmovRect(temblar){

    this.movimiento = temblar;
}

getX(){

    return this.x;
}

getY(){

    return this.y;

}

getRcaer(){

    return this.caer;
    
}

getlados(){
    return this.lado;
}

}