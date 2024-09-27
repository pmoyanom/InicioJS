//operador && (and) y
let a, b;
a = 20;
b = 30;
document.write(a==b); //false
document.write(a==20); //true
document.write('<br>');

// veamos otro ejemplo
let continente, edad;
continente = prompt("Escribe un continente...");
edad = prompt("Escribe tu edad...");

if(continente == "America" && edad >= 18){
    document.write("Eres mayor de edad y vives en America");
}else{
    document.write("No eres adulto o no eres americano");
}
document.write('<br>');
//operador || (or) o
let dia, mes, anio;
dia = prompt("Escribe el dia ...");
mes = prompt("Escribe el mes ...");
anio = prompt("Escribe el año ...");
if (mes==1 || mes == 2 || mes == 3){
    document.write("Estamos en el primer trimestre del año");
}else{
    document.write("No estamos en el primer trimestre del año");
}