let fic2_escenaActual = 1;

function fic2_siguienteEscena() {
    const actual = document.getElementById("fic2_escena" + fic2_escenaActual);
    if (actual) actual.style.display = "none";

    fic2_escenaActual++;

    const siguiente = document.getElementById("fic2_escena" + fic2_escenaActual);
    if (siguiente) {
        siguiente.style.display = "block";
    }
}

// MODALES
function fic2_abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function fic2_cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}