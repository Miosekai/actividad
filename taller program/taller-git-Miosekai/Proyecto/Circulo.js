class Circulo {

    constructor(x, y, alto, ancho, direcciondecirculos, transparencia, contable, invisible, color) {

        this.x = random(0, 800);
        this.y = random(0, 800);
        this.ancho = 80;
        this.alto = 80;
        this.radio = 80;
        this.radio2 = 80;
        this.direcciondecirculos = 0;
        this.transparencia = 255;
        this.contable = 0;
        this.invisible = parseInt(random(1, 4));

    }


    pintar() {
        noStroke();
        fill(color[0], color[1], color[2], this.transparencia);
        ellipse(this.x, this.y, this.alto, this.ancho,
            this.direcciondecirculos, this.radio, this.radio2);
    }

    tiempo() {
        this.contable++;
        if (this.contable === this.invisible) {
            this.transparencia -= 7;
            this.contable = 0;
            this.invisible = parseInt(random(1, 4));

        }
    }


    tamaño() {
        switch (this.direcciondecirculos) {
            case 0:
                this.radio++;
                
                break;

            case 1:
                this.radio2--;
                
                break;
        }
    }

    // gets

    getX() {

        return this.x;

    }

    getY() {

        return this.y;

    }

    getRadio() {

        return this.radio;

    }

    setdirecciondecirculos(alteracion) {

        this.direcciondecirculos = alteracion;

    }

    getTransparencia() {

        return this.transparencia;

    }
    
    setColor(color) {

      this.color=color;

    }

}