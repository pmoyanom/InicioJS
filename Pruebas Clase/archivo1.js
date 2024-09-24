
//Probamos a declarar variables de distintos tipos
/*
let nombre = 'Pedro';
let cantidad = 42;
let precio = 10.45;
let esVerdadero = true;
let esNulo = null;
let persona = {nombre: 'Juan', edad: 30};

console.log(nombre);
document.write(nombre);
document.write('<br>');
document.write(cantidad);
document.write('<br>');
document.write(precio);
document.write('<br>');
document.write(esVerdadero);
document.write('<br>');
document.write(esNulo);
document.write('<br>');
document.write(persona.nombre);
document.write('<br>');
console.log(persona.edad);
document.write(persona.edad);
document.write('<br>');
*/

/*
//CONSTANTES
        /*
        let precio = 100.00;
        document.write('El precio es: '+precio+'<br>');
        precio = 200.00;
        document.write('precio2: 2: ', precio);
        //El valor cambia por ser una variable*/
 /*       const precio = 100.00;
        document.write('El precio es: ', precio);
        document.write('<br>'); 
        //precio = 300.00;
        document.write('Nuevo Precio es: ', precio);
        document.write('<br>');
        precio2 = 200.00;
        document.write('Precio 2: ', precio2);
        document.write('<br>');
*/


/*
//INPUT DATOS
        let nombre, edad;
        nombre = prompt('Ingrese su nombre:... ');
        edad = prompt('Ingrese su edad:... ');
        direccion = prompt('Ingrese su direccion:... ');
        telefono = prompt('Ingrese su telefono:... ');
        email = prompt('Ingrese su email:... ');
        document.write('Nombre: '+nombre+'<br>');
        document.write('Edad: '+edad+'<br>');
        document.write('Direccion: '+direccion+'<br>');
        document.write('Telefono: '+telefono+'<br>');
        document.write('Email: '+email+'<br>'); 
*/


/*
//CONCATENACIÓN DE DATOS
        let nombre = 'Juan';
        let apellido = 'Perez';
        let precio = 500;

        document.write(nombre + " - " + apellido);
        document.write("<br>");
        document.write('Nombre: ' + nombre + ' - Apellido: ' + apellido);
        document.write("<br>");
        let saluddo = nombre.concat(apellido);
        document.write(saluddo);
        document.write("<br>");
        document.write('El precio es: ' + precio);
        document.write("<br>");
        document.write('====================================<br>');
        document.write(nombre,' ', apellido);
        document.write("<br>");
        document.write('El precio es: ', precio);
*/




// OPERADORES DE ASIGNACIÓN, INCREMENTO Y DECREMENTO
/*
let a = 1;

console.log('Valor de a: ', a);
document.write('Valor de a: ', a + "<br>");
a++; // aumenta valor en 1
console.log('Valor de a: ', a);
document.write('Valor de a: ', a + "<br>");


a+=5; // aumenta valor en el valor después del igual, dependiendo de lo que pongamos
document.write('Valor de a: ', a + "<br>");
a--; // disminuye valor en 1
document.write('Valor de a: ', a + "<br>");
a-=5; // disminuye valor en el valor después del igual, dependiendo de lo que pongamos
document.write('Valor de a: ', a + "<br>");
a*=5; // multiplica valor en el valor después del igual, dependiendo de lo que pongamos
document.write('Valor de a: ', a + "<br>");
a/=5; // divide valor en el valor después del igual, dependiendo de lo que pongamos
document.write('Valor de a: ', a + "<br>");
a**=2; // eleva valor en el valor después del igual, dependiendo de lo que pongamos
document.write('Valor de a: ', a + "<br>");
a%=2; // obtiene el residuo de la división del valor entre el valor después del igual, dependiendo de lo que pongamos
document.write('Valor de a: ' , a + "<br>");
*/


/*
//OPERDORES DE COMPARACIÓN
let valor1, valor2;
valor1 = 20;
valor2 = 10;

document.write(valor1 > valor2); // true
document.write("<br>");
document.write(valor1 < valor2); // false
document.write("<br>");
document.write(valor1 == valor2); // false
document.write("<br>");
document.write(valor1 != valor2); // true
document.write("<br>");
document.write(valor1 >= valor2); // true
document.write("<br>");
document.write(valor1 <= valor2); // false
document.write("<br>");
/*document.write(valor1 => valor2); // esto tiene otra funcionalidad siempre primero el >
document.write("<br>");
*/
/**/


/*
//FUNCIONES MATEMÁTICAS
var precio = Math.round(399.53);
document.write('Precio redondeado: ', precio); // redondea al siguiente entero si es superior a 0.5
document.write('<br>');

var precio = Math.ceil(399.53);
document.write('Precio redondeado hacia arriba: ', precio); // redondea siempre hacia arriba
document.write('<br>');
var precio = Math.floor(399.53);
document.write('Precio redondeado hacia abajo: ', precio); // redondea siempre hacia abajo
document.write('<br>');

var seno = Math.sin(45);
document.write('Seno de 45: ', seno); // seno de 45 grados
document.write('<br>');
//Calcular el exponencial
var exp = Math.exp(2);
document.write('Exponencial de 2: ', exp); // exponencial de 2
document.write('<br>');
//Calcular el logaritmo
var log = Math.log(10);
document.write('Logaritmo de 10: ', log); // logaritmo de 10
document.write('<br>');
//Calcular el valor absoluto
var abs = Math.abs(-10);
document.write('Valor absoluto de -10: ', abs); // valor absoluto de -10
document.write('<br>');
//Calcular valor máximo
var max = Math.max(10,20,600,30);
document.write('Valor máximo: ', max); // valor máximo
document.write('<br>');
//Calcular valor mínimo
var min = Math.min(10,20,600,30);
document.write('Valor mínimo: ', min); // valor mínimo
document.write('<br>');

//Calcular en pantalla un valor aleatorio
var aleatorio = Math.random();
document.write('Valor aleatorio: ', aleatorio); // valor aleatorio
document.write('<br>'); // trae un número sin rango definido

// combinamos dos funciones para tener un valor aleatorio entre 0 y 10
var aleatorio = Math.round(Math.random()*10);
document.write('Valor aleatorio entre 0 y 10: ', aleatorio); // valor aleatorio entre 0 y 10
document.write('<br>');

// Calcular la raíz cuadrada
var raiz = Math.sqrt(25);
document.write('Raíz cuadrada de 25: ', raiz); // raíz cuadrada de 25
document.write('<br>');

// calcular el exponente
var exponente = Math.pow(2,3);
document.write('2 elevado a la 3: ', exponente); // 2 elevado a la 3    
document.write('<br>');
*/


