//1. Generador de Contraseñas Aleatorias
//Crea una función que genere contraseñas aleatorias de longitud n usando caracteres alfanuméricos.
//Pide al usuario la longitud de la contraseña y genera una.
/*
const readline = require('readline-sync');

function generarContraseña(longitud) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        // Generamos un índice aleatorio para seleccionar un carácter del string 'caracteres'.
        // 'Math.random()' genera un número aleatorio entre 0 y 1.
        // Multiplicamos ese número por la longitud de 'caracteres' y usamos 'Math.floor()' para redondear hacia abajo a un entero.
        // 'charAt()' se usa para obtener el carácter en la posición aleatoria generada.
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contraseña;
}

let longitud = parseInt(readline.question("Introduce la longitud de la contraseña: "));
console.log("Contraseña generada: " + generarContraseña(longitud));
*/

//2. Calculadora de Edad. Pide al usuario su fecha de nacimiento y calcula su edad actual.
// Usa la clase Date para realizar los cálculos.
/*
const readline = require('readline-sync');

let fechaNacimiento = readline.question("Introduce tu fecha de nacimiento (YYYY-MM-DD): ");
let fecha = new Date(fechaNacimiento);
//Calculamos la edad restando el año de la fecha de nacimiento del año actual.
// 'new Date().getFullYear()' obtiene el año actual, y 'fecha.getFullYear()' obtiene el año de la fecha de nacimiento.
let edad = new Date().getFullYear() - fecha.getFullYear();
console.log("Tu edad es: " + edad + " años.");
*/

//3. Fibonacci con Bucle. Crea un programa que genere la secuencia de Fibonacci hasta el décimo término usando un bucle.
// Secuencia Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
/*
let a = 0, b = 1, siguiente;
console.log(a);
for (let i = 1; i < 10; i++) {
    console.log(b);
     // Calculamos el siguiente número de la serie sumando 'a' y 'b'.
    siguiente = a + b;
    // Actualizamos 'a' para que tome el valor actual de 'b' (el último número calculado).
    a = b;
    // Actualizamos 'b' para que tome el valor actual de 'siguiente' número de la serie
    b = siguiente;
}
*/

//4.Ordenar Números de un Array. Crea un array con números desordenados y escribe un programa que los ordene de menor a mayor sin usar el método .sort().
/*
let numeros = [5, 2, 9, 1, 7];
// Iniciamos un bucle 'for' que recorrerá el array 'numeros'.
// 'i' comienza en 0 y se incrementa hasta que alcanza la longitud del array.
for (let i = 0; i < numeros.length; i++) {
     // Iniciamos un segundo bucle 'for' que se encargará de comparar elementos del array.
    // Este bucle itera desde 0 hasta 'numeros.length - i - 1' para evitar comparar elementos ya ordenados.
    for (let j = 0; j < numeros.length - i - 1; j++) {
         // Comparamos el elemento actual 'numeros[j]' con el siguiente 'numeros[j + 1]'.
        // Si 'numeros[j]' es mayor que 'numeros[j + 1]', realizamos un intercambio.
        if (numeros[j] > numeros[j + 1]) {
             // Usamos la desestructuración de arrays para intercambiar los valores de 'numeros[j]' y 'numeros[j + 1]'.
            [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
        }
    }
}
console.log(numeros);
*/

//5. Adivina el Número. Crea un juego donde la máquina elija un número aleatorio entre 1 y 100. 
//El usuario debe adivinarlo con pistas como “mayor” o “menor” hasta acertar.
/*
const readline = require('readline-sync');

// Generamos un número secreto aleatorio entre 1 y 100.
// Math.random() devuelve un número entre 0 (inclusive) y 1 (exclusive).
// Multiplicamos por 100, usamos Math.floor() para redondear hacia abajo y luego sumamos 1.
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinanza;

while (adivinanza !== numeroSecreto) {
    adivinanza = parseInt(readline.question("Adivina el número entre 1 y 100: "));
    if (adivinanza > numeroSecreto) {
        console.log("El número es menor.");
    } else if (adivinanza < numeroSecreto) {
        console.log("El número es mayor.");
    } else {
        console.log("¡Correcto! Adivinaste el número.");
    }
}
*/


//AYUDA PARA UTF-8 EN LA CONSOLA pOWER sHELL
//[Console]::OutputEncoding
//$OutputEncoding = [System.Text.Encoding]::UTF8