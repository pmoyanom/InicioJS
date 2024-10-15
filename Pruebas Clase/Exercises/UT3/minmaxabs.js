
const readline = require('readline-sync');

// Función principal para ejecutar el programa
function ejercicioMinMaxAbs() {
    let numeros = []; // Array para almacenar los 5 números ingresados por el usuario

    // Bucle para solicitar 5 números al usuario
    for (let i = 0; i < 5; i++) {
        let inputValido = false;
        while (!inputValido) {
            // Solicitamos al usuario que ingrese un número
            let numero = parseInt(readline.question(`Introduce el número ${i + 1} de 5:`));

            // Convertimos la entrada a un número flotante
            numero = parseFloat(numero);

            // Verificamos si la entrada es un número válido
            if (!isNaN(numero)) {
                numeros.push(numero); // Añadimos el número al array
                inputValido = true; // Salimos del bucle interno
            } else {
                console.log("Entrada inválida. Por favor, introduce un número válido.");
            }
        }
    }

    // Mostramos los números ingresados por el usuario
    console.log("Números ingresados:", numeros);

    // Utilizamos Math.max y Math.min para encontrar el número mayor y menor
    let numeroMayor = Math.max(...numeros); // El operador ... (spread) expande el array en argumentos individuales
    let numeroMenor = Math.min(...numeros);

    // Calculamos la diferencia entre el mayor y el menor
    let diferencia = numeroMayor - numeroMenor;

    // Calculamos el valor absoluto de la diferencia
    let valorAbsoluto = Math.abs(diferencia);

    // Mostramos los resultados al usuario
    console.log(`El número mayor es: ${numeroMayor}`);
    console.log(`El número menor es: ${numeroMenor}`);
    console.log(`La diferencia entre el mayor y el menor es: ${diferencia}`);
    console.log(`El valor absoluto de la diferencia es: ${valorAbsoluto}`);

    // Opcional: Mostrar los resultados en alertas
    //alert(`Números ingresados: ${numeros.join(", ")}`);
    //alert(`Número mayor: ${numeroMayor}\nNúmero menor: ${numeroMenor}\nValor absoluto de la diferencia: ${valorAbsoluto}`);
}

// Ejecutamos la función principal
ejercicioMinMaxAbs();