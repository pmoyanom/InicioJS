/*let saludo = "¡Hola a todos!"; // Ámbito global

function mostrarSaludo() {
  console.log(saludo); // Puede acceder a 'saludo' porque es global
  document.write(saludo); // Puede acceder a 'saludo' porque es global
}

mostrarSaludo(); // Output: ¡Hola a todos!
*/

/*No funciona
const input = require('readline-sync');

let name = input.question("Enter your name: ");
*/

/*
console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    //process.exit();
})
*/

let mensaje = "Para eliminar escriba ELIMINAR";
let respuesta = prompt(mensaje);
console.log('El usuario escribió: ${respuesta}');

