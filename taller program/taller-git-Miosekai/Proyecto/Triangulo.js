class Triangulo {

    constructor(x, y, x1, y1, x2, y2) {

        angleMode(DEGREES);
        this.posx = mouseX;
        this.posy = mouseY;
        this.x = 30;
        this.y = 75;
        this.x1 = 58;
        this.y1 = 20;
        this.x2 = 86;
        this.y2 = 75;
        this.transparencia = 50;
        this.lado=30;
        this.rotar = true;

        this.x2, this.direccion, this.angulo = 0;
        
        ///aleatoridad
        let anguloRandom = parseInt(random(60));

        if (anguloRandom < 30) {
            this.lado +=20;
        } else {
            this.lado += 50;
        }
    }

    pintar() {
        push();
        stroke(0);
        translate(this.posx, this.posy);
        rotate(this.angulo);
        fill(87, 35, 100, this.transparencia);

        triangle(this.x, this.y, this.x1, this.y1, this.x2, this.y2);
        pop();
        this.giro();
    }

    giro() {
        if (this.rotacion === true) {
            this.angulo += 5;
        }
        this.rotacion= !(this.rotacion);
    }

    getAngulos() {
        return this.rotate;
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getX1() {
        return this.x1;
    }
    getY1() {
        return this.y1;
    }
    getX2() {
        return this.x2;
    }
    getY2() {
        return this.y2;
    }

}