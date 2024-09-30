let elementosegundos = document.getElementById("tiempoelegido").value;
let elementotextoalarmas = document.getElementById("textoalarma");
let elementosonido = document.getElementById("audioAlarma");

function comenzarTiempo(){
  //  setTimeout(tiempocumplido, 5000); // 5000 milisegundos = 5 segundos, poniendo un valor fijo
   setTimeout(tiempocumplido, elementosegundos * 1000); // 5000 milisegundos = 5 segundos, poniendo un valor fijo
}

function tiempocumplido(){
   // alert("Tiempo cumplido");
   // elementotextoalarmas.textContent = "ENCENDIDO";
    elementotextoalarmas.style.color = "green";
    elementosonido.play();
}

function comnezarReloj(){
    setInterval(reloj, 1000);
}

function reloj(){
    let tiempoactual = new Date();  // Obtenemos la fecha y hora actual
    let horas = tiempoactual.getHours();
    let minutos = tiempoactual.getMinutes();
    //let segundos = tiempoactual.getSeconds();
    let segundos = String(tiempoactual.getSeconds()).padStart(2, "0"); // Agregamos un cero a la izquierda si el número es menor a 10   
    let textohora = horas + ":" + minutos + ":" + segundos;
    elementotextoalarmas.textContent = textohora;
}