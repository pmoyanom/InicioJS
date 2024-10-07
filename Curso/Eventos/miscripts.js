/*
//Quinto ejercicio eventos en tiempo real, vamos a trabajar con let shocket
let socket = new WebSocket('ws://localhost:8080');//No es un servidor real, es un servidor ficticio de prueba
let mensajeingresado = document.getElementById("mensajeIngresado");
let botonenviar = document.getElementById("botonEnviar");

function mostrarMensajes(contenido){
    let contenerdorMensajes = document.getElementById("mensajesChat");
    let elementomensaje = document.createElement("p");
    elementomensaje.innerText = contenido;
    contenerdorMensajes.appendChild(elementomensaje);
}
botonenviar.onclick = function(){
    let mensaje = mensajeingresado.value;
    mostrarMensajes("Tú: " + mensaje);
    socket.send(mensaje);
}

socket.onmessage = function(event){
    let mensaje = event.data;
    mostrarMensajes("Servidor: " + event.data);
}
*/


/*
//Cuarto ejercicio eventos de ratón ampliado
let menu = document.getElementById("mimenu");
let boton = document.getElementById("miboton");
 /*
boton.addEventListener('click', function(){
    menu.style.display = "block"; //creamos un escuchador para que al hacer click en el botón se muestre el menú
});
*/
/*
boton.addEventListener('mouseover', function(){
    menu.style.display = "block"; //creamos un escuchador para que al pasar el botón se muestre el menú
});


boton.addEventListener('mouseout', function(){
    menu.style.display = "none"; //creamos un escuchador para que al dejar de pasar el ratón en el botón se muestre el menú
});

document.addEventListener('mousemove', function(event){
    console.log('Coordenadas del ratón: Posición X: ' + event.clientX + ' Posición Y: ' + event.clientY);
});
*/



//Tercer ejercicio eventos de teclado
//Vamos hacer que sólo pueda poner números en el input no letras
/*
let texto1 = document.getElementById("mitexto");

function solo_numeros(event){
    if(event.keyCode < 48 || event.keyCode > 57){
        event.preventDefault();
    }
}

texto1.addEventListener('keydown', solo_numeros);

texto1.addEventListener('keyup', function(event){
    console.log('Entrada del usuario: ' + event.target.value);
});

texto1.addEventListener('keypress', function(event){
    console.log('Tecla presionada: ' + event.key);
});

*/



// variable botón primer ejercicio, resto segundo ejercicio eventos de ratón
/*
let boton = document.getElementById("boton1");
let div1 = document.getElementById("div1");
let enlace = document.getElementById("enlace1");

function mostrarmensaje(event){
    alert(event.target);
    alert(event.currentTarget);
    }

function bloqueo_enlace(event){
    event.preventDefault();
    alert("Enlace bloqueado");
}
 //Eventos de ratón
    //boton.addEventListener('click', mostrarmensaje);
    div1.addEventListener('click', mostrarmensaje);
    enlace.addEventListener('click', bloqueo_enlace);
*/




/*Primer ejercicio
function mensaje1(){
    alert("Hola Mundo, has presionado el botón")
    };

function mensaje2(){
    alert("Mundo 2 ahora has pasado el ratón por encima")
    };
    
boton.addEventListener('mouseover', mensaje2);
boton.addEventListener('click', mensaje1);
*/