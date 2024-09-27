/*let f = 1;

while (f < 10) {
    document.write('Vuelta número: ', f + '<br>');
    f++;  
}
document.write('Fin del ciclo while');
*/

let f = 1;
let suma = 0;
let valor;
while (f <= 5)
{
    valor = parseInt(prompt('Ingresa un valor: '));
    suma = suma + valor;
    f++;
}
document.write('La suma de los valores ingresados es: ', suma , '<br>');