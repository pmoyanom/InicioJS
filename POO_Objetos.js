//DECLARACIÓN DE UN OBJETO EN JAVASCRIPT

/* Un objeto es una colección de datos y/o funcionalidades relacionadas (que generalmente consisten en diversas variables y funciones —que se conocen como propiedades y métodos cuando están dentro de objetos). 
var coche = {
    marca: "Toyota", //Propiedades van con una coma al final
    modelo: "Corolla",
    anio: 2024,
    color: "Blanco",
    tipo: "Sedan",
    stereo: ['FM', 'AM', 'CD', 'USB', 'Bluetooth'],
}
document.write("Creación de un objeto en JavaScript" + "<br>");
document.write("<br>");
document.write("Marca: " , coche.marca + "<br>");
document.write("Modelo: " + coche.modelo + "<br>");
document.write("Año: " + coche.anio + "<br>");
document.write("Color: " + coche.color + "<br>");
document.write("Tipo: " + coche.tipo + "<br>");
document.write("<br>");
document.write("Stereo: " + coche.stereo + "<br>");
document.write("<br>");
*/

//DECLARACIÓN DE CLASES EN JAVASCRIPT
/* Una clase es un modelo que se utiliza para crear objetos que comparten un mismo comportamiento, estado e identidad.
class persona {
    //Propiedades
    nombre = 'Hommer';
    apellido = 'Simpson';
    edad = 40;
    direccion = 'Avenida Siempreviva 742';
    telefono = '666666666';
//Métodos
    trabajar() {
        return 'La persona está trabajando en la planta nuclear';
    }

    estudiar() {
        return 'La persona está estudiando en el IES Ágora';
    }
}

//Creación de un objeto a partir de una clase
const persona1 = new persona();
document.write(persona1.nombre + ' ' + persona1.apellido + "<br>");
document.write(persona1.edad + "<br>");
document.write(persona1.trabajar() + "<br>");
document.write('<br>');

//creo un nuevo objeto a partir de la clase persona
const Bart = new persona();
document.write('Bart ' + Bart.apellido + "<br>");
document.write(Bart.estudiar() + "<br>");
document.write('<br>');

const lenny = new persona();
document.write('Lenny ' + lenny.trabajar() + "<br>");
document.write('<br>');

*/

//CLASE DATE EN JAVASCRIPT
//La clase Date en JavaScript se utiliza para trabajar con fechas y horas.
/*
const fechaactual = new Date();
document.write(fechaactual + "<br>"); //Muestra la fecha y hora actual

//Métodos de la clase Date
let fecha = new Date();
document.write('Hoy es: ', fecha.getDate() + "<br>"); //Devuelve el día de la semana
document.write('Mes: ', fecha.getMonth() + 1 + "<br>"); //Devuelve el mes, hay que sumar 1 porque los meses empiezan en 0
document.write('Año: ', fecha.getFullYear() + "<br>"); //Devuelve el año
document.write('Hora: ', fecha.getHours() + "<br>"); //Devuelve la hora
document.write('Minutos: ', fecha.getMinutes() + "<br>"); //Devuelve los minutos
document.write('Hora: ', fecha.getHours(), ':', fecha.getMinutes(), ':', fecha.getSeconds() + "<br>"); //Devuelve la hora y minutos en la misma línea 
document.write('<br>');
//
//Los métodos de la clase Date son muy utilizados en aplicaciones web para mostrar la fecha y hora actual,