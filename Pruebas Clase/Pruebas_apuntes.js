let saludo = "¡Hola a todos!"; // Ámbito global

function mostrarSaludo() {
  console.log(saludo); // Puede acceder a 'saludo' porque es global
  document.write(saludo); // Puede acceder a 'saludo' porque es global
}

mostrarSaludo(); // Output: ¡Hola a todos!