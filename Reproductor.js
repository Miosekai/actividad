class Reproductor {
      
    constructor() {
        let videos = [];
        let canciones = [];
        let imagenes = [];

        imagenes.push(new Imagenes("mp3","escritorio",660,400,646,898,"flor azul","luna morales"));
        imagenes.push(new Imagenes("mp4","imagen",160,500,646,698,"fiesta salvaje","sonia rios"));
        imagenes.push(new Imagenes("mp4","escritorio",360,200,146,498,"Los 15 de lore","loren martis"));
        imagenes.push(new Imagenes("wav","videos",130,500,796,1098,"bautizo de jose","lulu tunez"));
        imagenes.push(new Imagenes("wav","imagen",122,740,654,2198,"magic album","brenda anders"));
        imagenes.push(new Imagenes("mp4","objeto 3D",180,110,1345,1898,"mi infancia","uma heka"));
        imagenes.push(new Imagenes("mp4","musica",160,200,646,898,"tres tazas","jennifer franco"));
        imagenes.push(new Imagenes("mp4","musica",180,600,1446,2898,"fer durmiendo","brasilia perez"));
        imagenes.push(new Imagenes("wav","Disco D",300,600,146,598,"casa del lado","juan gomez"));
        imagenes.push(new Imagenes("mp3","escrit",190,800,244,698,"mi vecino","dani pelaes"));

        videos.push(new Videos(607,970,"escritorio",163,450,720,"mp3"));
        videos.push(new Videos(787,1370,"imagen",73,550,720,"avi"));
        videos.push(new Videos(980,1970,"musica",53,950,480,"mp4"));
        videos.push(new Videos(1010,2270,"objetos3D",125,950,480,"wav"));
        videos.push(new Videos(2056,770,"descargas",153,950,480,"wav"));
        videos.push(new Videos(979,900,"discoB",90,950,720,"mov"));
        videos.push(new Videos(457,1340,"discoC",100,950,360,"mov"));
        videos.push(new Videos(1989,1970,"videos",150,950,360,"flv"));
        videos.push(new Videos(2097,2570,"descargas",135,950,360,"fvl"));
        videos.push(new Videos(720,980,"imagen",58,750,480,"avi"));

        canciones.push(new Canciones("Dos orugitas", "Sebastian Gomez",5,"pc","mp3","balada","13 de septiembre 2013",67,100));
        canciones.push(new Canciones("Mi corazon no para", "Lana Fey",4,"escritorio","mp3","banda","6 de agosto 2003",76,189));
        canciones.push(new Canciones("Likey", "Twice",3,"musica","mp3","kpop","9 diciembre 2016",146,400))
        canciones.push(new Canciones("Paparazzi", "Lady Gaga",2,"descargas","wav","pop","5 enero de 2012",70,60));
        canciones.push(new Canciones("Poker Face", "Lady Adriana",7,"videos","wav","indie","8 de noviembre 2018",156,169));
        canciones.push(new Canciones("More More", "Icy",6,"descargas","wav","jpop","13 febrero de 2014"),160,930);
        canciones.push(new Canciones("Last Dance", "Duolingo",25,"equipo","mp4","jazz","7 de marzo de 2011",142,798));
        canciones.push(new Canciones("Buenos Aires", "Nathy Peluso",3,"objetos3D","mp4","rap","3 de abril 1998",39,107));
        canciones.push(new Canciones("Mariposa traicionera", "Danig",5,"discoD","mp4","indie","2 de julio 2001",90,89));
        canciones.push(new Canciones("Pero me acuerdo de ti", "Rodrigo toles",9,"imagen","wav","despecho","18 de mayo de 2010",89,118));
    }
}



function showAllImagenes(){
    for (let i = 0; i < this.imagenes.length; i++) {
        let actual = this.imagenes[i];
        console.log((i+1)+".-"+ actual.formato +" - "+ actual.ruta +" - "+actual.tamaño +" - "+ actual.ancho +" - " + actual.alto +" - " + actual.resolucion +" - " + actual.nombre+" - " + actual.artistas+" - " );
    }
}

function showAllCanciones(){
    for (let i = 0; i < this.canciones.length; i++) {
        let actual = this.canciones[i];
        console.log((i+1)+".-"+ actual.nombre +" - "+ actual.artista +" - "+actual.duracion +" - "+ actual.ruta +" - " + actual.formato +" - " + actual.genero +" - " + actual.lanzamiento+" - " + actual.calidad +" - " + actual.tamaño);
    }
}

function addCancion(){
    let nombre = window.prompt("Agregar nombre a la cancion");
    let artista = window.prompt("Agregar artista a la cancion");
    let duracion = window.prompt("Agregar duracion a la cancion");
    let ruta = window.prompt("Agregar ruta a la cancion");
    let formato = window.prompt("Agregar formato a la cancion");
    let genero = window.prompt("Agregar genero a la cancion");
    let lanzamiento = window.prompt("Agregar lanzamiento a la cancion");
    let calidad = window.prompt("Agregar calidad a la cancion");
    let tamaño = window.prompt("Agregar tamaño a la cancion");

    let cancionNueva = new Canciones(nombre, artista,duracion,ruta,formato,genero,lanzamiento,calidad,tamaño);
    this.canciones.push(cancionNueva);
}  