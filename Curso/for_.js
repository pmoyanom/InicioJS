//For y while, no usar Live Server
/*for (let f=1; f<5; f++){
    document.write('Valor de f: ', f, '<br>');
}
document.write('Fin del bucle FOR', '<br>');*/


//Si quiero sólo un valor en concreto, por ejemplo For y while, no usar Live Server
/*for (let f=1; f<=20; f+=2){
    if(f==15){
        document.write('Aquí el Valor de f: ', f, '<br>');
    }
}
document.write('Fin del bucle FOR', '<br>');*/

//Vamos a ver ahora el uso del bucle for para recorre un array
const frutas = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Melón', 'Plátano', 'Fresa', 'Kiwi', 'Mango', 'Coco'];

for(let f=0; f<frutas.length; f++){ //Inicializo en cero porque es la primera posición del array
    document.write('Fruta: ',f , ' = ', frutas[f], '<br>');
}