let audio = document.getElementById("audio");
let listacanciones = document.getElementById("listaCanciones");

listacanciones.addEventListener('change', cambiarcancion);
    
    
function cambiarcancion (){
    let cancionElegida = listacanciones.value;
    audio.src = cancionElegida;
    audio.play();
    //Con esto ya suena
    //Vamos a crear ahora un evento personalizado, para que se publique en la consola el nombre de la canción que se está reproduciendo
    let evento = new CustomEvent('cancionCambiada');
    audio.dispatchEvent(evento);
};
audio.addEventListener('cancionCambiada', mostrarCancion);

function mostrarCancion(){
    console.log('Canción actual: ' + listacanciones.value);
};

