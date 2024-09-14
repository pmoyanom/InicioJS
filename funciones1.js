/*
/FUNCIONES DECLARATIVAS
function saludar() {
    console.log("Hola");
}
saludar(); // Saludo por consola*/

/*
function saludar() {
    alert("Hola a todos");
}
saludar(); // Saludo aviso emerente*/


/*
function saludar() {
    document.write("Hola a todos");
}
saludar(); // Saludo por navegador/
document.write("<br>"); // Salto de linea
saludar(); // Saludo por navegador
document.write("<br>"); // Salto de linea
saludar(); // Saludo por navegador

// vamos a crear ahora otra funcion de despedida
function despedida() {
    document.write("Adios a todos");
}

saludar(); // Saludo por navegador/
document.write("<br>"); // Salto de linea
despedida(); // Despedida por navegador
document.write("<br>"); // Salto de linea
//También podemos llamar a una función dentro de otra función
*/

/*
//Uso de variables dentro de funciones
function saludar() {
    let saludo = prompt ("Ingrese su saludo");
    alert(saludo);
    document.write(saludo);
}
saludar(); // Saludo por navegador/
*/

/*Veamos ahora FUNCIONES CON PARAMETROS*/
/*
let resultado;
function suma (valor1, valor2) {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    resultado = valor1 + valor2;
    alert('Resultado de la suma: ' + resultado);
}
suma(5, 10);
suma('asdfadf', 20);
*/
//Mejoramos el código anterior

/*
let resultado;
function suma (valor1, valor2) {
    valor1 = parseInt(prompt('Introduce VALOR1: '));
    valor2 = parseInt(prompt('Introduce VALOR2: '));
    resultado = valor1 + valor2;
    alert('Resultado de la suma: ' + resultado);
}
suma();
*/

//uso de return en FUNCIONES
/*
function suma (valor1, valor2) {
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    return valor1 + valor2;
}
suma(5, 10);//No se muestra nada
document.write(suma(5, 10)); //Se muestra el resultado de la suma en el navegador
document.write("<br>"); // Salto de linea

//otra forma
let resultado;
function suma (valor1, valor2) {
    resultado = valor1 + valor2;
    return resultado;
}
document.write(suma(5, 10)); //Se muestra el resultado de la suma en el navegador
document.write("<br>"); // Salto de linea

function saludar() {
    return 'Hola a todos';
}
let mensaje = saludar();   
document.write(mensaje); //Se muestra el mensaje en el navegador
*/

/* ejemplo FUNCIONES CON SWITCH*/
/*
function Vercolor(valor){
    valor = parseInt(prompt('Introduce un número del 1 al 5'));
    switch(valor){
        case 1:
            return 'Rojo';
        case 2:
            return 'Azul';
        case 3:
            return 'Verde';
        case 4:
            return 'Amarillo';
        case 5:
            return 'Blanco';
        default:
            return 'Color no encontrado';
}
}
alert(Vercolor()); //Se muestra el mensaje en el navegador ventana emergente
document.write(Vercolor()); //Se muestra el mensaje en el navegador
*/