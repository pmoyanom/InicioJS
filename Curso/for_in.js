// realiza un for tomando un rango de valores especifico

/*let palabra = 'JavaScript';
let valor = 5; // for in no funciona con valores enteros, prueba a cambiar palabra por valor
//El sistema trata realmente la palabra como un array de caracteres.

for(let f in palabra){
    document.write('Letra: ', f, ' = ', palabra[f], '<br>');
} //recorre cada letra de la palabra JavaScript*/

let palabra = 'Hola mundo';
let vocales = 0;
//vamos a ver cuantas vocales tiene la palabra

for (let f in palabra){
    if(palabra[f] == 'a' || palabra[f] == 'e' || palabra[f] == 'i' || palabra[f] == 'o' || palabra[f] == 'u'){
        document.write('Vocal: ', palabra[f], '<br>');
        vocales++;
        }
    } //recorre cada letra de la palabra JavaScript y muestra las vocales que contienen vocales
    document.write('Cantidad de vocales: ', vocales); //muestra la cantidad de vocales que tiene la palabra JavaScript

