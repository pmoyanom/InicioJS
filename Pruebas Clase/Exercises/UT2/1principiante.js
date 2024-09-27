//1. Declaración e Inicialización de Variables
/*
const readline = require('readline-sync');

let nombre = readline.question("¿Cuál es tu nombre? ");
const edad = parseInt(readline.question("¿Cuál es tu edad? "));
var gustaProgramar = readline.keyInYN("¿Te gusta programar? ");

console.log(`Nombre: ${nombre}, Edad: ${edad}, ¿Gusta Programar?: ${gustaProgramar}`);
*/

//2. Suma de Dos Números
/*
const readline = require('readline-sync');

let a = parseFloat(readline.question("Introduce el primer número: "));
let b = parseFloat(readline.question("Introduce el segundo número: "));
console.log(`La suma es: ${a + b}`);
*/

//3. Concatenación de Cadenas
/*
const readline = require('readline-sync');

let nombre = readline.question("Introduce tu nombre: ");
let apellido = readline.question("Introduce tu apellido: ");
console.log(`Nombre completo: ${nombre} ${apellido}`);
*/

//4. Conversión de Tipos
/*
let valor = "50";
let numero = Number(valor);
console.log(`Valor: ${numero}, Tipo: ${typeof numero}`);
*/

//5. Operaciones Matemáticas Básicas
/*
const readline = require('readline-sync');

let x = parseFloat(readline.question("Introduce el primer número: "));
let y = parseFloat(readline.question("Introduce el segundo número: "));
console.log(`Suma: ${x + y}`);
console.log(`Resta: ${x - y}`);
console.log(`Multiplicación: ${x * y}`);
console.log(`División: ${x / y}`);
*/

//6. Condicional Simple: Mayor o Menor
/*
const readline = require('readline-sync');

let numero = parseInt(readline.question("Introduce un número: "));
if (numero > 10) {
    console.log("El número es mayor que 10.");
} else {
    console.log("El número es menor o igual a 10.");
}
*/