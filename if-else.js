let nombre, edad;
nombre = prompt("Ingresa tu nombre....");
edad = prompt("Ingresa tu edad....");
//edad = parseInt(edad);

// comparar si la edad es mayor o igual a 18
if (edad >= 18) {
    document.write("Hola " + nombre + " eres mayor de edad" + '<br>');
}else{
    if (edad < 18) {
        document.write("Hola " + nombre + " eres menor de edad" + '<br>');
    }else{
        document.write("Hola " + nombre + " No has puesto edad" + '<br>');
    }
    
}
//Probamos que pasa si dejamos los campos vacios
//Probamos que pasa si ingresamos un nombre y dejamos la edad vacia
//VAmos a controlar que el usuairo no deje los campos vacios