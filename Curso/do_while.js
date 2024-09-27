/*let valor;
do {
    valor = parseInt(prompt('Ingresa valor 1 para salir: '));
    document.write('Valor ingresado: ', valor, '<br>');
      
} while (valor != 1);
document.write('Fin del ciclo do while');*/


let usuario, clave, control;

control = 0;
usuario = prompt('Ingrese su usuario: ');
clave = prompt('Ingrese su clave: ');

do {
    if (usuario == 'admin' && clave == '1234')
    {
        document.write('Bienvenido al sistema', '<br>');
        control = 1;
    }
    else
    {
        document.write('Usuario o clave incorrectos, intente nuevamente', '<br>');
        usuario = prompt('Usuario o clave incorrectos, pruebe de nuevo \n' +
                        'Ingrese su usuario: ');
        clave = prompt('Ingrese su clave: ');
    }
} while (control == 0);
document.write('ACCESO CORRECTO', '<br>');