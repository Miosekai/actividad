class Cuadrado {

    constructor(x, y, lado, radio, contador) {

        this.x = Math.random() * (1050 - 0);
        this.y = Math.random() * (-100 + 500) - 500;
        this.lado = Math.random() * (150 - 100) + 100;
        this.radio = parseInt(this.lado * this.lado);
        this.contador = 0;
        this.cuadradocayendo = true;

    }



    pintar() {
        noStroke();
        fill(255, 140, 105);
        rect(this.x, this.y, this.lado, this.lado);
        fill(0);
        textAlign(CENTER);
        text("Radio :"+this.radio,  this.x + (this.lado)/2, this.y + (this.lado)/2);
        this.caerc();
    }

    caerc() {

        if (this.cuadradocayendo === true) {
            this.y += random(0.1, 1);
        }
    }

    detener() {

        this.cuadradocayendo = !this.cuadradocayendo;
    }

    getY() {

        return this.posy;

    }


    getX() {

        return this.posx;

    }

    getlados() {

        return this.lado;

    }

    getCaer() {

        return this.cuadradocayendo;
    }

}