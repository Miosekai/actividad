class Cancion extends Multimedia{
      
    constructor(nombre,artista,duracion,ruta,formato,genero,lanzamiento,calidad,tamaño) {
        super(nombre,artista,duracion,ruta,formato,tamaño); //// Parametros del padre
        this.genero = genero;
        this.lanzamiento = lanzamiento;
        this.calidad = calidad;
    }
}