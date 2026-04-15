function mostrarFic(){
    document.getElementById("fic").style.display = "block";
}

function abrirModal(id){
    document.getElementById(id).style.display = "flex";
}

function cerrarModal(id){
    document.getElementById(id).style.display = "none";
}

let escenaActual = 1;

function siguienteEscena(){

    // ocultar escena actual
    document.getElementById("escena" + escenaActual).style.display = "none";

    // si es la primera vez, ocultar inicio
    if(escenaActual === 1){
        document.getElementById("inicio").style.display = "none";
    }

    // pasar a la siguiente
    escenaActual++;

    // mostrar nueva escena
    const siguiente = document.getElementById("escena" + escenaActual);
    if(siguiente){
        siguiente.style.display = "block";
    }
}