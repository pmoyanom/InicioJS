//1. Calculadora Básica
/*
const readline = require('readline-sync');

let num1 = parseFloat(readline.question("Introduce el primer número: "));
let num2 = parseFloat(readline.question("Introduce el segundo número: "));
let operador = readline.question("Introduce un operador (+, -, *, /): ");

switch (operador) {
    case "+":
        console.log(`Resultado: ${num1 + num2}`);
        break;
    case "-":
        console.log(`Resultado: ${num1 - num2}`);
        break;
    case "*":
        console.log(`Resultado: ${num1 * num2}`);
        break;
    case "/":
        console.log(`Resultado: ${num1 / num2}`);
        break;
    default:
        console.log("Operador no válido.");
}
*/

//2. Contador de Palabras Solicita una frase al usuario y cuenta cuántas palabras tiene. Usa split() para separar las palabras y cuenta la longitud del array resultante.
/*
const readline = require('readline-sync');

let frase = readline.question("Introduce una frase: ");
let palabras = frase.trim().split(/\s+/); 
//trim elimina los espacios en blanco al principio y al final de la cadena
//split divide la cadena en palabras
// \s+ es una expresión regular que busca uno o más espacios  en blanco
console.log(`La frase tiene ${palabras.length} palabras.`);
*/

//3. Invertir una cadena. Toma una cadena ingresada por el usuario e imprima la cadena invertida.
/*
const readline = require('readline-sync');

let cadena = readline.question("Introduce una cadena: ");
//split divide la cadena en letras
//reverse invierte el orden de las letras
//join une las letras en una cadena
let invertida = cadena.split("").reverse().join("");
console.log(`Cadena invertida: ${invertida}`);
*/

//4. Encuentra el Número Mayor. Pide tres números al usuario y determina cuál es el mayor utilizando condicionales.
/*
const readline = require('readline-sync');

let num1 = parseFloat(readline.question("Introduce el primer número: "));
let num2 = parseFloat(readline.question("Introduce el segundo número: "));
let num3 = parseFloat(readline.question("Introduce el tercer número: "));

if (num1 >= num2 && num1 >= num3) {
    console.log(`El mayor es: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`El mayor es: ${num2}`);
} else {
    console.log(`El mayor es: ${num3}`);
}
*/

//5. Números Primos. Pide al usuario un número y determina si es primo. Imprime un mensaje indicando si es primo o no.
/*
const readline = require('readline-sync');

let numero = parseInt(readline.question("Introduce un número: "));
let esPrimo = numero > 1;
// Utilizamos un bucle 'for' para comprobar si el número tiene divisores distintos de 1 y de sí mismo.
// El bucle comienza en 2 (primer número primo) y se ejecuta hasta la raíz cuadrada del número, calculada con 'Math.sqrt(numero)'.
// No es necesario comprobar más allá de la raíz cuadrada, ya que si un número tiene un divisor mayor que su raíz cuadrada, debe tener un divisor menor que ella.
for (let i = 2; i <= Math.sqrt(numero); i++) {
     // Si el número es divisible por 'i' (resto de la división es 0), no es primo.
    // Asignamos 'false' a 'esPrimo' y usamos 'break' para salir del bucle, ya que no es necesario seguir comprobando.
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}
console.log(esPrimo ? "Es primo." : "No es primo.");
*/

//6. Clase Básica de Círculo. Crea una clase Círculo con un atributo radio. Añade un método para calcular el área del círculo. Instancia la clase y muestra el área en la consola.
/*
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
// Área del círculo = π * radio^2
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

const readline = require('readline-sync');

let radio = parseFloat(readline.question("Introduce el radio del círculo: "));
let miCirculo = new Circulo(radio);
console.log(`El área del círculo es: ${miCirculo.calcularArea()}`);
*/

//7 Sistema de NotasPide al usuario su calificación y usa condicionales para determinar si aprobó o reprobó. Usa las siguientes reglas: ≥ 60 aprobado, < 60 reprobado.
/*
const readline = require('readline-sync');

let calificacion = parseFloat(readline.question("Introduce tu calificación: "));
console.log(calificacion >= 60 ? "Aprobado" : "Reprobado");
*/

//8. Gestión de Tareas (Clases y Arrays). Crea una clase Tarea con atributos nombre y completada. 
//Crea un array de tareas y añade métodos para agregar, completar y mostrar tareas pendientes o completadas.
/*
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }

    completar() {
        this.completada = true;
    }
}

const tareas = [new Tarea("Estudiar"), new Tarea("Comprar comida")];

// Completar la primera tarea
tareas[0].completar();

// Mostrar todas las tareas
tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea.nombre} - Completada: ${tarea.completada}`);
});
*/

