let valor;
/*valor = parseInt(prompt('Ingresa un valor entre 1 y 3: '));

switch (valor) {
    case 1:
        document.write("El valor ingresado es 1");
        break;
    case 2:
        document.write("El valor ingresado es 2");
        break;
    case 3:
        document.write("El valor ingresado es 3");
        break;
    default:
        document.write("El valor ingresado no es válido");
        break;
}*/

let color;
color = prompt('Ingresa un color: ROJO/VERDE/AZUL');

switch (color) {
    case 'rojo':
        document.write("El color ingresado es ROJO");//Revisar mayúsculas y minúsculas
        break;
    case 'verde':
        document.write("El color ingresado es VERDE");
        break;
    case 'azul':
        document.write("El color ingresado es AZUL");
        break;
    default:
        document.write("El color ingresado no es válido");
        break;
}