//document.write('Texto escrito desde un fichero externo');
//console.log('Texto escrito en la consola');

let nombre = prompt("¿Cuál es tu nombre? ");
let edad = parseInt(prompt("¿Cuál es tu edad? "));
console.log('Nombre:', nombre, 'Edad:', edad);
document.write('Nombre:', nombre, 'Edad:', edad);



const readline = require('readline-sync');

let nombre = readline.question("¿Cuál es tu nombre? ");
const edad = parseInt(readline.question("¿Cuál es tu edad? "));
var gustaProgramar = readline.keyInYN("¿Te gusta programar? ");

console.log('Nombre:', nombre, 'Edad:', edad, 'Gusta Programar:', gustaProgramar);
readline.

