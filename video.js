class Video extends Multimedia{
      
    constructor(ancho,alto,ruta,duracion,tamaño,resolucion,formato) {
    super(ancho,alto,ruta,duracion,tamaño,resolucion,formato);
    }
}


class Video extends Archivos{

    constructor(ancho,alto,resolucion) {
        super(ancho,alto,resolucion);
        }

}



for(let i = 0; i < 5; i++ ){
    let opciones = window.prompt("Bienvenido, al reproductor de video escoje tu opcion"+
        "\n 1. lista completa" +
        "\n 2. abrir video"+
        "\n 3. siguiente video " +
        "\n 4. anterior video" +
        "\n 5. agregar video" +
        "\n 6. reproducir video" +
        "\n 7. pausar video" +
        "\n 8. eliminar video");
    

    switch (opciones) {
        case "1":
            // lista completa
            showAllVideos();
        break;
    
        case "2":
            // abrir video
            
        break;
               
        case "3":
             // siguiente video
             
        break;
    
        case "4":
             // anterior video
             
        break;
    
        case "5":
         // agregar video
            
        break;
    
        case "6":
            // reproducir video
            
        break;

        case "7":
            // pausar video
            
        break;
        
        case "8":
            // eliminar video
            let videoeliminado = window.prompt("Escribe el nombre del video");
             removeMovie(videoeliminado);
        break;
    }
}

function showAllVideos(){
    for (let i = 0; i < videos.length; i++) {
        let actual = videos[i];
        console.log((i+1)+".-"+ actual.ancho +" - "+ actual.alto +" - "+actual.ruta +" - "+ actual.ruta +" - " + actual.duracion +" - " + actual.tamaño +" - " + actual.resolucion+" - " + actual.formato);
    }
}
