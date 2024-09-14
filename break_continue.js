/* Objetivo: Mostrar el uso de break y continue en un ciclo for
for (let f=0; f<10; f++) {
    document.write(f + "<br>");
    if (f == 5) {
        document.write("Estamos en la iteracción ", f, "<br>");
        //break;
    }
}*/

/*
let palabra = 'JavaScript';
let reultado = '';

for (let f in palabra) {
    if (palabra[f]=='a'){
        continue;
    }else{
        reultado += palabra[f];
    }
}
document.write(reultado); //muestra la palabra JavaScript sin la letra a

// Puede funcionar con while y do while de la misma manera
*/
/*
//otro ejemplo para quitar todas las vocales de una palabra
let palabra = 'ayuntamiento';
let resultado = '';
for (let f in palabra) {
    if (palabra[f]=='a' || palabra[f]=='e' || palabra[f]=='i' || palabra[f]=='o' || palabra[f]=='u'){
        continue;
    }else{
        result += palabra[f];
    }
}*/