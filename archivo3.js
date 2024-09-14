//Funciones matemáticas
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