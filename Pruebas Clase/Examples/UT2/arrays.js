// creamos el array de numeros enteros
let numeros =[];
numeros = [1,2,3,4,5,6,7,8,9,10]; // también se pueden declarar de esta forma
//PAra ver los elementos del array
document.write('Elementos del Array: ',numeros + '<br>');
//Vamos a ver el primer elemento del array
document.write('Primer elemento del Array: ',numeros[0] + '<br>');

//CAmbiar el valor de un elemento del array
numeros[0] = 100;
document.write('Primer elemento del Array cambiado: ',numeros[0] + '<br>');

//ahora vamos a recorrer el array de texto 
let frutas = ['manzana','pera','uva','fresa','kiwi'];
document.write('Elementos del Array: ',frutas + '<br>');
document.write('<br>')

//METODOS DE LOS ARRAYS
//Ver cantidad de elementos de un array
document.write('Cantidad de elementos del array frutas: ',frutas.length + '<br>');
//Vamos a ver el último elemento del array
document.write('Último elemento del Array: ',numeros[numeros.length-1] + '<br>');
document.write('Último elemento del Array: ',frutas[frutas.length-1] + '<br>');

//Arrays en tipo texto
document.write('En String: ',numeros.toString() + '<br>');

//Unir tipos de arrays
let letras = ['a','b','c','d','e'];
let numeros2 = [11,12,13,14,15];
document.write('Unir arrays: ',letras.concat(numeros2) + '<br>');

//Borrar elementos de un array
numeros.pop(); //borra el último elemento
document.write('Borrar último elemento: ',numeros + '<br>');

//Añadir elementos al array, al final
numeros.push(- 10);
document.write('Añadir elemento al final: ',numeros + '<br>');

//Borrar el primer elemento del array
numeros.shift();
document.write('Borrar primer elemento: ',numeros + '<br>');

//Añadir elementos al array, al principio
numeros.unshift(1000);
document.write('Añadir elemento al principio: ',numeros + '<br>');

//Borrar elementos de un array a partir de una posición
numeros.splice(2,2); //borra desde la posición 2, 2 elementos
document.write('Borrar elementos a partir de una posición: ',numeros + '<br>');

//Como copiar un array
let cantidades = [100,200,300,400,500];
let copia = cantidades.slice(1,3); //copia desde la posición 1 hasta la 3
document.write('Copia de un array: ',copia + '<br>');
document.write('<br>');

//Ordenar un array
document.write('Array de frutas ordenado: ',frutas.sort() + '<br>');
let cosas = ['silla','mesa','cama','sofa','televisor'];
document.write(cosas);
document.write('Array de cosas ordenado: ',cosas.sort() + '<br>');
document.write('<br>');
//mostramos los objetos en orden inverso
document.write('Array de cosas ordenado inverso: ',cosas.reverse() + '<br>');
document.write('<br>');
// como crear un array inalterable
const coches = ['audi','bmw','mercedes','seat','ford'];
document.write('Array de coches: ',coches + '<br>');
document.write('<br>');
//autos = [0]='ferrari';//esto no se puede hacer

//como obtener la posición de un elemento en un array
let posicion = coches.indexOf('seat');
document.write('Posición de seat: ',posicion + '<br>');
document.write('<br>');

//OBTENER ELEMENTO ALEATORIO DE UN ARRAY
// Se define un array llamado 'frutas' que contiene tres elementos: "manzana", "banana" y "naranja".
const frutas = ["manzana", "banana", "naranja"];

// Se genera un índice aleatorio para seleccionar una fruta al azar del array.
// Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido).
// Multiplicamos este número por la longitud del array (frutas.length), que en este caso es 3(valor entre 0 y 2,9999).
// Math.floor() redondea hacia abajo el número generado para obtener un índice entero entre 0 y 2.
const randomIndex = Math.floor(Math.random() * frutas.length);

// Usamos el índice aleatorio generado para acceder a un elemento del array 'frutas'.
// Este comando imprimirá en la consola una fruta seleccionada aleatoriamente: "manzana", "banana" o "naranja".
console.log(frutas[randomIndex]); // Selecciona un elemento aleatorio