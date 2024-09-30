//1. Determinar Par o Impar
/*
const readline = require('readline-sync');

let numero = parseInt(readline.question("Introduce un número: "));
if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}
*/

//2. Contador de Números del 1 al 10 con bucle for
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

//3. Calcular factorial de un número
/*
const readline = require('readline-sync');

let numero = parseInt(readline.question("Introduce un número: "));
let factorial = 1;
while (numero > 1) {
    factorial *= numero;
    numero--;
}
console.log(`El factorial es: ${factorial}`);
*/

//4. Tabla de multiplicar utilizando un bucle for
/*
const readline = require('readline-sync');

let numero = parseInt(readline.question("Introduce un número: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
*/








//5. Contar Vocales en una Cadena
/*
const readline = require('readline-sync');

let cadena = readline.question("Introduce una cadena: ");
// Utiliza una expresión regular para buscar todas las vocales en la cadena, 
//tanto en mayúsculas como en minúsculas.
// La función match() devuelve un array con todas las coincidencias encontradas.
// Si no se encuentran vocales, se devuelve un array vacío gracias al operador `|| []`,
// lo que evita un error.
// Finalmente, se cuenta el número de elementos en el array resultante con la propiedad length.
let contadorVocales = (cadena.match(/[aeiouAEIOU]/g) || []).length;
console.log(`La cadena tiene ${contadorVocales} vocales.`);
*/









//6. Array de Nombres. Declara un array con tres nombres y usa un bucle for para imprimir cada nombre en la consola.
/*
let nombres = ["Ana", "Luis", "Marta"];
for (let nombre of nombres) {
    console.log(nombre);
}
*/
