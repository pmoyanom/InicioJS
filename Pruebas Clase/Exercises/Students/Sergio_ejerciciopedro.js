/*

var readlineSync = require('readline-sync');

// Esperamos la respuesta del usuario.
var userName = readlineSync.question('dame un numero ');
if (userName %2) {
    console.log("tu numero es impar ")
} else {
    console.log("tu numero es par")

}
*/
/*

// Ejemplo de bucle for
for (let i = 0; i < 10; i++) {
    console.log(`${i + 1}`);
  }

*/
/*
var readlineSync = require('readline-sync');

// Pedir número al usuario
var numero = parseInt(readlineSync.question('Introduce un número para calcular su factorial: '));
var factorial = 1;
var i = numero;

while (i > 0) {
  factorial *= i;
  i--;
}

console.log('El factorial de ' + numero + ' es ' + factorial);

*/
/*
var readlineSync = require('readline-sync');

// Pedir número al usuario
var num = parseInt(readlineSync.question('Introduce un número para ver su tabla de multiplicar: '));

console.log('Tabla de multiplicar del ' + num + ':');
for (let i = 1; i <= 10; i++) {
  console.log(num + ' x ' + i + ' = ' + num * i);
}

*/
/*
var readlineSync = require('readline-sync');

// Pedir cadena al usuario
var cadena = readlineSync.question('Introduce una cadena de texto: ');
var vocales = "aeiouAEIOU";
var contador = 0;

for (let letra of cadena) {
  if (vocales.includes(letra)) {
    contador++;
  }
}

console.log('La cadena tiene ' + contador + ' vocales.');
*/
/*

var readlineSync = require('readline-sync');

// Pedir 3 nombres al usuario
var nombres = [];
for (let i = 0; i < 3; i++) {
  let nombre = readlineSync.question('Introduce el nombre ' + (i + 1) + ': ');
  nombres.push(nombre);
}

console.log('Los nombres introducidos son:');
for (let nombre of nombres) {
  console.log(nombre);
}

*/
/*
var readlineSync = require('readline-sync');

// Pedir dos números y un operador al usuario
var num1 = parseFloat(readlineSync.question('Introduce el primer número: '));
var num2 = parseFloat(readlineSync.question('Introduce el segundo número: '));
var operador = readlineSync.question('Introduce un operador (+, -, *, /): ');

var resultado;

switch (operador) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
    break;
  default:
    resultado = 'Operador no válido';
}

console.log('El resultado es: ' + resultado);

*/
/*
const readline=require('readline-sync');


let cadena = readline.question('Introduce una frase : ');

let frase=cadena.trim().split(/\s+/);  
console.log(`la frase tiene ${frase.lenght} palabras`);  
*/

/*

let readlineSync = require('readline-sync');
let cadena = readlineSync.question('Introduce una frase : ');

let invertir=cadena.split("").reverse().join("");
console.log(invertir);
*/
/*

let readlineSync = require('readline-sync');
let numero1 = readlineSync.question('Introduce un numero : ');
let numero2 = readlineSync.question('Introduce un numero : ');
let numero3 = readlineSync.question('Introduce un numero : ');

if (numero1>numero2 & numero1>numero3) {
    console.log(numero1+" es el mayor");
} else if (numero2>numero1 & numero2>numero3) {
    console.log(numero2 +" es el mayor");
}else {
    console.log(numero3 +" es el mayor");
}

*/


/*
let readlineSync = require('readline-sync');
let numero1 = parseInt(readlineSync.question('Introduce un numero : '));

let es=true;

if (numero1>2) {
    for (let i = 2; i <numero1 ; i++) {
        if (numero1%i==0) {
            es=false;
            break;
        }
    }
} else {
    es=true;
}
if (es) {
    console.log(numero1+" es un numero primo");
} else {
    console.log(numero1+" no es un numero primo");
}
*/
/*
class Circulo{

    constructor(radio){
        this.radio=radio;
    }


    area(){
        return 3.14*(this.radio*this.radio);
    }

    
}
const circulo = new Circulo (5);


console.log(circulo.area());


*/
/*



let readlineSync = require('readline-sync');
let numero1 = parseInt(readlineSync.question('Introduce tu primera nota de examen : '));
let numero2 = parseInt(readlineSync.question('Introduce tu segunda nota de examen : '));
let numero3 = parseInt(readlineSync.question('Introduce tu tercera nota de examen : '));

let numero4 = parseInt(readlineSync.question('Introduce tu primera nota de trabajo : '));
let numero5 = parseInt(readlineSync.question('Introduce tu segunda nota de trabajo : '));
let numero6 = parseInt(readlineSync.question('Introduce tu tercera nota de trabajo : '));

let numero7 = parseInt(readlineSync.question('Introduce tu primera nota de practicas : '));
let numero8 = parseInt(readlineSync.question('Introduce tu segunda nota de practicas : '));
let numero9 = parseInt(readlineSync.question('Introduce tu tercera nota de practicas : '));



let calculomediaexamenes=(numero1+numero2+numero3)/3;
let calcumediatrabajos=(numero4+numero5+numero6)/3;
let calculopracticas=(numero7+numero8+numero9)/3;

let mediatotal=(calculomediaexamenes+calcumediatrabajos+calculopracticas)/3;

if (mediatotal>5){
    console.log("esta aprobado, tu nota es "+ mediatotal);
}else{
    console.log("no esta aprobado, tu nota es "+ mediatotal);
}

*/
/*
const readlineSync = require('readline-sync'); // Asegúrate de tener readline-sync instalado

class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false; // Inicialmente, la tarea no está completada
    }
}

class GestionTareas {
    constructor() {
        this.tareas = []; // Array para almacenar las tareas
    }

    // Método para agregar una nueva tarea
    agregarTarea(nombre) {
        const nuevaTarea = new Tarea(nombre);
        this.tareas.push(nuevaTarea);
        console.log(`Tarea "${nombre}" añadida.`);
    }

    // Método para completar una tarea
    completarTarea(nombre) {
        const tarea = this.tareas.find(t => t.nombre === nombre);
        if (tarea) {
            tarea.completada = true;
            console.log(`Tarea "${nombre}" completada.`);
        } else {
            console.log(`Tarea "${nombre}" no encontrada.`);
        }
    }

    // Método para mostrar tareas pendientes
    mostrarTareasPendientes() {
        const tareasPendientes = this.tareas.filter(tarea => !tarea.completada);
        if (tareasPendientes.length > 0) {
            console.log("Tareas Pendientes:");
            tareasPendientes.forEach(tarea => console.log(tarea.nombre));
        } else {
            console.log("No hay tareas pendientes.");
        }
    }

    mostrarTareasCompletas() {
        const tareasCompletas = this.tareas.filter(tarea => tarea.completada);
        if (tareasCompletas.length > 0) {
            console.log("Tareas Completas:");
            tareasCompletas.forEach(tarea => console.log(tarea.nombre));
        } else {
            console.log("No hay tareas completas.");
        }
    }
}

const gestionTareas = new GestionTareas();

let key;
do {
    console.log("\nGestión de Tareas:");
    console.log("1. Agregar Tarea");
    console.log("2. Completar Tarea");
    console.log("3. Mostrar Tareas Pendientes");
    console.log("4. Mostrar Tareas Completas");
    console.log("5. Salir");
    
    key = parseInt(readlineSync.question("¿Qué quieres hacer? (1-5): "));
    
    switch (key) {
        case 1:
            const nombreTarea = readlineSync.question("Introduce el nombre de la tarea: ");
            gestionTareas.agregarTarea(nombreTarea);
            break;
        case 2:
            const nombreCompletar = readlineSync.question("Introduce el nombre de la tarea a completar: ");
            gestionTareas.completarTarea(nombreCompletar);
            break;
        case 3:
            gestionTareas.mostrarTareasPendientes();
            break;
        case 4:
            gestionTareas.mostrarTareasCompletas();
            break;
        case 5:
            console.log("Saliendo del programa. Adiós!");
            break;
        default:
            console.log("Opción no válida, por favor intenta de nuevo.");
            break;
    }
} while (key !== 5); 
*/






/*


const readlineSync = require('readline-sync');

// Función para generar la contraseña
function generarContraseña(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let contraseña = '';
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[randomIndex];
  }
  return contraseña;
}

// Pedir la longitud de la contraseña al usuario
let longitud = readlineSync.question('Introduce la longitud de la contraseña: ');

// Generar y mostrar la contraseña
let password = generarContraseña(parseInt(longitud));
console.log('Contraseña generada: ' + password);

*/
/*

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}

let fechaNacimiento = readlineSync.question('Introduce tu fecha de nacimiento (YYYY-MM-DD): ');
console.log('Tu edad es: ' + calcularEdad(fechaNacimiento));
*/

/*
function fibonacci(n) {
  let a = 0, b = 1, temp;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    temp = a;
    a = b;
    b = temp + b;
  }
}

fibonacci(10);
*/
/*
const readlineSync = require('readline-sync');

function ordenarNumeros(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const cantidadNumeros = parseInt(readlineSync.question('¿Cuántos números deseas ordenar? '));
const numeros = [];

for (let i = 0; i < cantidadNumeros; i++) {
  const numero = parseFloat(readlineSync.question(`Introduce el número ${i + 1}: `));
  numeros.push(numero);
}

console.log('Array ordenado: ' + ordenarNumeros(numeros));
*/
/*
const readlineSync = require('readline-sync');

function adivinaElNumero() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let intento = null;

  while (intento !== numeroSecreto) {
    intento = parseInt(readlineSync.question('Adivina el número (entre 1 y 100): '));
    if (intento < numeroSecreto) {
      console.log('El número es mayor.');
    } else if (intento > numeroSecreto) {
      console.log('El número es menor.');
    } else {
      console.log('¡Felicidades! Has adivinado el número.');
    }
  }
}

adivinaElNumero();
*/
/*
class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }

  mostrarInformacion() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}`);
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregarLibro(libro) {
    this.libros.push(libro);
    console.log('Libro agregado a la biblioteca.');
  }

  eliminarLibro(titulo) {
    this.libros = this.libros.filter(libro => libro.titulo !== titulo);
    console.log('Libro eliminado de la biblioteca.');
  }

  mostrarLibros() {
    console.log('Libros en la biblioteca:');
    this.libros.forEach(libro => libro.mostrarInformacion());
  }
}

const biblioteca = new Biblioteca();
const libro1 = new Libro('El Quijote', 'Miguel de Cervantes', 1605);
biblioteca.agregarLibro(libro1);
biblioteca.mostrarLibros();
*/
/*
const readlineSync = require('readline-sync');

function calcularTotal(precios) {
  let total = precios.reduce((sum, precio) => sum + precio, 0);
  if (total > 100) {
    total *= 0.9; // Aplica un 10% de descuento
  }
  return total;
}

const precios = [];
for (let i = 0; i < 3; i++) {
  const precio = parseFloat(readlineSync.question(`Introduce el precio del artículo ${i + 1}: `));
  precios.push(precio);
}

console.log('El total a pagar es: ' + calcularTotal(precios).toFixed(2));
*/
/*
const readlineSync = require('readline-sync');

function calcularPromedio(calificaciones) {
  const total = calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
  const promedio = total / calificaciones.length;
  return promedio >= 5 ? 'Aprobado' : 'Reprobado';
}

let calificaciones = [];
let seguir = true;

while (seguir) {
  let calificacion = parseFloat(readlineSync.question('Introduce una calificación: '));
  calificaciones.push(calificacion);
  seguir = readlineSync.keyInYN('¿Quieres añadir otra calificación? ');
}

console.log('Resultado: ' + calcularPromedio(calificaciones));
*/
/*
const readlineSync = require('readline-sync');

function generarNumerosAleatorios() {
  const numeros = [];
  while (numeros.length < 5) {
    const num = Math.floor(Math.random() * 20) + 1;
    if (!numeros.includes(num)) {
      numeros.push(num);
    }
  }
  return numeros;
}

console.log('Números aleatorios sin repetir: ' + generarNumerosAleatorios());
*/
/*
const readlineSync = require('readline-sync');

class Teatro {
  constructor(filas, columnas) {
    this.asientos = Array.from({ length: filas }, () => Array(columnas).fill(false));
  }

  reservarAsiento(fila, columna) {
    if (this.asientos[fila][columna]) {
      console.log('El asiento ya está reservado.');
    } else {
      this.asientos[fila][columna] = true;
      console.log('Asiento reservado con éxito.');
    }
  }

  cancelarReserva(fila, columna) {
    if (this.asientos[fila][columna]) {
      this.asientos[fila][columna] = false;
      console.log('Reserva cancelada con éxito.');
    } else {
      console.log('El asiento no estaba reservado.');
    }
  }

  mostrarAsientos() {
    console.log('Estado de los asientos (O: libre, X: reservado):');
    this.asientos.forEach((fila, indiceFila) => {
      console.log(`Fila ${indiceFila + 1}: ` + fila.map(asiento => (asiento ? 'X' : 'O')).join(' '));
    });
  }
}

// Inicializar el teatro
const filas = 5;
const columnas = 5;
const teatro = new Teatro(filas, columnas);

// Funciones para interactuar con el sistema de reservas
function menu() {
  console.log('\nSistema de reservas de asientos:');
  console.log('1. Mostrar asientos');
  console.log('2. Reservar asiento');
  console.log('3. Cancelar reserva');
  console.log('4. Salir');
  const opcion = readlineSync.question('Elige una opción: ');
  return opcion;
}

function obtenerFilaColumna() {
  const fila = parseInt(readlineSync.question('Introduce el número de fila: ')) - 1;
  const columna = parseInt(readlineSync.question('Introduce el número de columna: ')) - 1;
  return { fila, columna };
}

// Bucle principal del programa
let salir = false;
while (!salir) {
  const opcion = menu();
  switch (opcion) {
    case '1':
      teatro.mostrarAsientos();
      break;
    case '2':
      const { fila: filaReserva, columna: columnaReserva } = obtenerFilaColumna();
      teatro.reservarAsiento(filaReserva, columnaReserva);
      break;
    case '3':
      const { fila: filaCancelar, columna: columnaCancelar } = obtenerFilaColumna();
      teatro.cancelarReserva(filaCancelar, columnaCancelar);
      break;
    case '4':
      salir = true;
      console.log('Saliendo del sistema de reservas...');
      break;
    default:
      console.log('Opción no válida.');
  }
}
*/