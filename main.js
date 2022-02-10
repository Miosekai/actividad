let repro = new Reproductor();
let opcionMenu = window.prompt("Bienvenido, a cual menu deseas ingresar?"+
    "\n 1. Menu Musica" +
    "\n 2. Menu Imagenes" +
    "\n 3. Menu Videos" );
    
    switch (opcionMenu){
        case "1":
            menuMusica();
        break;
        
        case "2":
            menuImagen();
        break;
               
        case "3":
    
        break;
    }


function menuMusica(){
    let catalogo = window.prompt("Bienvenido,busca tu musica favorita aqui"+
    "\n 1. lista completa" +
    "\n 2. Reproducir una cancion" +
    "\n 3. agregar cancion" +
    "\n 4. eliminar cancion");
    
    switch (catalogo) {
    case "1":
        // lista completa
        repro.showAllCanciones();
    break;
    
    case "2":
        // Reproductor
        let opcionReproductorMusica=window.prompt("\n 1. reproducir cancion" +
        "\n 2. siguiente cancion " +
        "\n 3. anterior cancion" +
        "\n 4. pausar cancion");
    break;

    case "3":
        ///Agregar cancion
        reproductor.showAllCanciones();
    break;

    case "4":
        // eliminar cancion
        let cancion = window.prompt("Escribe el nombre de la cancion");
        repro.removeMovie(cancion);
    break;
    }
}


function menuImagen(){
    let lista = window.prompt("Bienvenido,busca tus fotos favoritas aqui"+
        "\n 1. lista completa" +
        "\n 2. ver foto"+
        "\n 3. agregar foto" +
        "\n 4. eliminar foto");
   

    switch (lista) {
        case "1":
            // lista completa
            showAllImagenes();
        break;
    
        case "2":
            // ver foto 

            let lista = window.prompt( "siguiente foto " +
            "\n 4. anterior foto");
           
        break;
               
        case "3":
             // agregar foto
             
        break;
    
        case "4":
            // eliminar foto
            let name = window.prompt("Escribe el nombre de la foto");
            repro.showAllImagenes(name);
        break;
    }
}

