
const readline = require('readline-sync');

// Función principal para ejecutar el programa
function ejercicioMinMaxAbs() {
    let numeros = []; // Array para almacenar los 5 números ingresados por el usuario

    // Bucle para solicitar 5 números al usuario
    for (let i = 0; i < 5; i++) {
        let inputValido = false;
        while (!inputValido) {
            // Solicitamos al usuario que ingrese un número
            let numero = parseInt(readline.question(`Insert the number ${i + 1} of 5:`));

            // Convertimos la entrada a un número flotante
            numero = parseFloat(numero);

            // Verificamos si la entrada es un número válido
            if (!isNaN(numero)) {
                numeros.push(numero); // Añadimos el número al array
                inputValido = true; // Salimos del bucle interno
            } else {
                console.log("Invalid entry. Please enter a valid number.");
            }
        }
    }

    // Mostramos los números ingresados por el usuario
    console.log("Inserted numbers:", numeros);

    // Utilizamos Math.max y Math.min para encontrar el número mayor y menor
    let numeroMayor = Math.max(...numeros); // El operador ... (spread) expande el array en argumentos individuales
    let numeroMenor = Math.min(...numeros);

    // Calculamos la diferencia entre el mayor y el menor
    let diferencia = numeroMayor - numeroMenor;

    // Calculamos el valor absoluto de la diferencia
    let valorAbsoluto = Math.abs(diferencia);

    // Mostramos los resultados al usuario
    console.log(`The biggest number is: ${numeroMayor}`);
    console.log(`The smallest number is: ${numeroMenor}`);
    console.log(`The difference between the biggest and the smallest is: ${diferencia}`);
    console.log(`The absolute value of the difference is: ${valorAbsoluto}`);

    // Opcional: Mostrar los resultados en alertas
    //alert(`Números ingresados: ${numeros.join(", ")}`);
    //alert(`Número mayor: ${numeroMayor}\nNúmero menor: ${numeroMenor}\nValor absoluto de la diferencia: ${valorAbsoluto}`);
}

// Ejecutamos la función principal
ejercicioMinMaxAbs();