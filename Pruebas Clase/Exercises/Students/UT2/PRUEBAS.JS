const readline = require('readline-sync');

// Ask for the phrase to the user
let frase2 = readline.question('Introduce una frase: ');

// Use split to divide the phrase in separate words
let palabras2 = frase2.trim().split(/\s+/); // trim() delete the spaces of the begining and the end \s+ split the phrase in different spaces
//Run the array length backwards printing each word of the array
for (let i= palabras.length; i>=0;i--){
    console.log(palabras[i]);
}