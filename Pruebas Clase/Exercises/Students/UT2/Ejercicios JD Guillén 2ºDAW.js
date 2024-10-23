var readlineSync = require('readline-sync');
//we give values to the different variables
let nombre="Daniel";
const anos=35;
var megustaProgramar=true;
//we print the values of the variables
console.log("Nombre",nombre);
console.log("edad",anos);
console.log("Me gusta programar",megustaProgramar);
//we give values to the variables
let nun1=12;
let nun2=3;
//we make de addition
let res=(n1+n2);
//show the result
console.log(res);
//we give the value to the variables
let apellido="Guillén";
//print the two variables
console.log(nombre,apellido);
//we give the type of variable as a string
let numero="50";
//create a new variable giving the value to the value of the previous variable converting it to number usig Number()
let numero2=Number(numero);
//sow to the user the type of variable
console.log(typeof(numero2));
//make the different operations
let resta=(nun1-nun2);
let suma=(nun1+nun2);
let division=(nun1/nun2);
let producto=(nun1*nun2);
// show the results
console.log("suma",suma);
console.log("resta",resta);
console.log("division",division);
console.log("producto",producto);
//ask for the user to introduce a number
let number = readlineSync.question('introduce un numero: ');
//if the number is superior to 10 it will show to the user
if (number>10){
    console.log("el numero introducido es mayor de 10");
    //if is inferior to 10 will tell to the user 
}else if(number<10){
    console.log("el numero introducido es menor de 10");
//if the number is 10 the program will show it
}else if(number==10){
    console.log("el numero introducido es 10");

}
//we ask for the user to introduce a number
let poi = readlineSync.question('introduce un numero: ');
//if the remainder of dividing the number by 2 is 0 then the number is even
if(poi%2==0){
    console.log("el numero introducido es par");
// in another way the number is not even
}else{
    console.log("el numero introducido es impar");

}
//we use the for loop for show the numbers 1 to 10
for(let i=1; i<=10; i++){
    console.log(i);
}
//we ask the user for introduce a number
let fact = readlineSync.question('introduce un numero: ');
let rfac=1;
//with the while loop we decrease this number in one unit for iteration multiplying this number by the result variable previously inizialized in 1

while (fact>1){
    rfac=fact*rfac
    fact--;

}
//at the end of the loop we show the final result
console.log(rfac);

//we ask for the number to the user
let tabla = readlineSync.question('introduce un numero: ');
//with a for loop we show the table 
for(let i=1; i<=10; i++){
    console.log(tabla," x ", i, " = ", (tabla*i));
}

//We ask for the user to type a word
let palabra= readlineSync.question("Introduce tu palabra ");
//we inizialise a const with all kind of vowels and a counter
const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
    let contador = 0;
//the for loop comares the word with the vowels an add one unit with each vowel
    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    //we show the number of vowels to the user
console.log("la palabra ", palabra, " tiene ", contador," vocales");

//inicialize the array whit 3 names
let nombres =["Pedro", "juan", "Luis"];
//we use the for...of loop to print each name of the array separately
for(let nombr of nombres){
    console.log(nombr);
}

let nu1 = readlineSync.question('Primer numero: ');
let nu2 = readlineSync.question('Primer numero: ');
let operador = readlineSync.question('Introduzca operacion');
switch(operador){

    case("*"):{
        let resultado=(nu1*nu2);
        console.log("El resultado es: ", resultado);
        break;

    }
    case("/"):{
        let resultado=(nu1/nu2);
        console.log("El resultado es: ", resultado);
        break;


    }
    case("+"):{
        let resultado=(nu1+nu2);
        console.log("El resultado es: ", resultado);
        break;


    }
    case("-"):{
        let resultado=(nu1-nu2);
        console.log("El resultado es: ", resultado);
        break;


    }
}

// Ask for the phrase to the user
let frase = readlineSync.question('Introduce una frase: ');

// Use split to divide the phrase in separate words
let palabras = frase.trim().split(/\s+/); // trim() delete the spaces of the begining and the end \s+ split the phrase in different spaces

// Show the number of words
console.log("La frase tiene ", palabras.length , "palabras.");


// Ask for the phrase to the user
let frase2 = readlineSync.question('Introduce una frase: ');

// Use split to divide the phrase in separate words
let palabras2 = frase2.trim().split(/\s+/); // trim() delete the spaces of the begining and the end \s+ split the phrase in different spaces
//Run the array length backwards printing each word of the array
for (let i= palabras.length; i>=0;i--){
    console.log(palabras[i]);
}

// Ask for the to the numbres 
let n1 = Number(readlineSync.question('numero 1: ')); //use numbers to convert the variables to numbers
let n2 = Number(readlineSync.question('numero 2: '));
let n3 = Number(readlineSync.question('numero 3: '));
//make the conditions for the different events
if (n1<=n2 && n2<n3){
    console.log(n3," es el numero mayor")
} else if(n1>n2 && n2>=n3){
    console.log(n1," es el numero mayor")
} else if (n1<=n3 && n3<n2){
    console.log(n2," es el numero mayor")

} else if (n1==n2 && n2==n3){
    console.log("Todos los numeros tienen el mismo valor")

}else if (n1<n3 && n3==n2){
    console.log(n2," es el numero mayor")

}else if (n1==n3 && n3>n2){
    console.log(n1," es el numero mayor")

}else if (n1==n2 && n2>n3){
    console.log(n2," es el numero mayor")

}

//we ask the user for introduce a number
let np = readlineSync.question('introduce un numero: ');
//we use the Wilson Theoreme to calculate if the number is a prime number
let rp=1;
// we deduct 1 to the number that we want to know if is a prime number or not
let nnp=(np-1);
//calculate the factorial of this number
while (nnp>1){
    rp=nnp*rp
    nnp--;

}
//Add 1 to the result
rp=(rp+1);
//If the reminder of divide this number by the number that we want to figure out if is a prime number is 0 then is a prime number.
if(rp%np==0){
    console.log("El numero es primo")
}else{
    console.log("El numero no es primo")
}
//create the class circulo with the variable radio
class Circulo {
    constructor(radio) {
      this.radio = radio;
    }
  //create the method to calculate the cirlcle area
    calcularArea() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  //ask for the value of the radius to the user
let r = readlineSync.question("Introduce el radio");
  const miCirculo = new Circulo(r); // Radio de 5
  
  // Calculate the area using the method an show to the user
  const area = miCirculo.calcularArea();
  console.log("El área del círculo con radio", r," es: ",area);
  
  //Ask for the grade to the user
  let nota = readlineSync.question("Introduce la nota: ");
  //if the grade is above to 60 the subject is passed
  if (nota>=60) {
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }

//create the class tarea
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }
//create the completar method
    completar() {
        this.completada = true;
    }
//create the mostrar method using the ternary operator to show if the task is done or not
    mostrar() {
        return `${this.nombre} - ${this.completada ? 'Completada' : 'Pendiente'}`;
    }
}
//create the class lista de tareas with an array
class ListaDeTareas {
    constructor() {
        this.tareas = [];
    }
//create the method to adda a new task
    agregarTarea(nombre) {
        const tarea = new Tarea(nombre);
        this.tareas.push(tarea);
        console.log(`Tarea "${nombre}" añadida.`);
    }
//create other method to complete it
    completarTarea(nombre) {
        const tarea = this.tareas.find(t => t.nombre === nombre);
        if (tarea) {
            tarea.completar();
            console.log(`Tarea "${nombre}" completada.`);
        } else {
            console.log(`Tarea "${nombre}" no encontrada.`);
        }
    }
//create the method to sowh the task dividig it in done task and remain task
    mostrarTareas(pendientes = true) {
        console.log(pendientes ? "Tareas pendientes:" : "Tareas completadas:");
        this.tareas
            .filter(tarea => tarea.completada !== pendientes)
            .forEach(tarea => console.log(tarea.mostrar()));
    }
}
//create a new object which is a task list
const listaDeTareas = new ListaDeTareas();
let salida=false;
//introduce a menu inside of a while loop 
while(!salida){
    console.log('Bienvenido al gestor de tareas');
    console.log('Seleccione una opción');
    console.log('1. Mostrar tareas');
    console.log('2. Agregar tareas');
    console.log('3. Completar tareas');
    console.log('4. Salir');
    
    let opci = readlineSync.questionInt('Ingrese el numero de la opcion: ');

switch (opci) {
    case 1:
        listaDeTareas.mostrarTareas(false);
        listaDeTareas.mostrarTareas();

        break;
    case 2:
        let ntarea=readlineSync.question('Insertar nombre de tarea ');
        listaDeTareas.agregarTarea(ntarea);
        break;
    case 3:
        listaDeTareas.mostrarTareas();
        let tareaC=readlineSync.question('Insertar tarea a completar ');
        listaDeTareas.completarTarea(tareaC);
        break;
    case 4:
        salida=true;
        console.log('Adios')
        break;
    default:
        console.log('Opción invalida')
        break;
}

}
//create the method to generate the password with the length value as a parameter
function generarContrasena(longitud) {
    //create a variable whith characters using capital letters lower letters and numbers
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //create and start a password variable
    let contrasena = '';
    //fill this variable with a for loop with random characters
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }
    return contrasena;
}

//Ask for the user to intruduce the lenght of the pasword
const longitud = readlineSync.questionInt('Ingrese la longitud de la contraseña: ');

//create the password and show it to the user
const contrasenaGenerada = generarContrasena(longitud);
console.log(`Contraseña generada: ${contrasenaGenerada}`);

//Create a method to calculate the age with a parameter which is the date of birth
function calcularEdad(fNacimiento) {
    //define two variables one for the current date an another with the birht date
    const hoy = new Date();
    const nacimiento = new Date(fNacimiento);
    //sustract the year of birth to the current year and do the same with the month
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
//in case of the user havent had his birthday yet this sustract a year to his age
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

// We ask the age to the user in format YYYY-MM-DD
const fNacimiento = readlineSync.question('Ingrese su fecha de nacimiento (YYYY-MM-DD): ');

// We call to the method an show the age to the user
const edad = calcularEdad(fNacimiento);
console.log(`Tienes ${edad} años.`);

//start a boolean variable to use it into the while loop
let fin=false;
//create a variable with the value of a random number between 1 and 100
let nAdivinar= Math.floor(Math.random()*100)+1;
// into the while loop we ask to the user to introduce numbers 
while (!fin) {
    let nAdivinado=readlineSync.questionInt('Introduce un numero entre el el 1 y el 100 ')
    //if the number equals to the other number allow to the user to exit the loop an ends the script
    if (nAdivinado==nAdivinar) {
        console.log('Acertaste, enhorabuena')
        fin=true;
        // if is not the script inform to the user that the number is higher or lower
    } else {
        if (nAdivinado<nAdivinar) {
            console.log('El número que buscas es mayor')
        }
        if (nAdivinado>nAdivinar) {
            console.log('El número que buscas es menor')
        }
    }
}


// class libro
class Libro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    mostrarInformacion() {
        return `Título: ${this.titulo}, Autor: ${this.autor}, Año: ${this.ano}`;
    }
} 

// class Biblioteca
class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(titulo, autor, ano) {
        const libro = new Libro(titulo, autor, ano);
        this.libros.push(libro);
        console.log(`Libro "${titulo}" añadido a la biblioteca.`);
    }

    eliminarLibro(titulo) {
        const indice = this.libros.findIndex(libro => libro.titulo === titulo);
        if (indice !== -1) {
            this.libros.splice(indice, 1);
            console.log(`Libro "${titulo}" eliminado de la biblioteca.`);
        } else {
            console.log(`Libro "${titulo}" no encontrado en la biblioteca.`);
        }
    }

    mostrarLibros() {
        if (this.libros.length === 0) {
            console.log("La biblioteca está vacía.");
            return;
        }
        console.log("Libros en la biblioteca:");
        this.libros.forEach(libro => {
            console.log(libro.mostrarInformacion());
        });
    }
}

// Create a new object biblioteca
const biblioteca = new Biblioteca();
let sal = false;

// while loop for the menu
while (!sal) {
    console.log('Bienvenido al gestor de libros');
    console.log('Seleccione una opción:');
    console.log('1. Mostrar libros');
    console.log('2. Agregar libro');
    console.log('3. Eliminar libro');
    console.log('4. Salir');
    
    let opci = readlineSync.questionInt('Ingrese el numero de la opcion: ');

    switch (opci) {
        case 1:
            biblioteca.mostrarLibros();
            break;
        case 2:
            let tlibro = readlineSync.question('Insertar título: ');
            let alibro = readlineSync.question('Insertar autor: ');
            let aplibro = readlineSync.questionInt('Insertar año: ');
            biblioteca.agregarLibro(tlibro, alibro, aplibro);
            break;
        case 3:
            biblioteca.mostrarLibros();
            let dlibro = readlineSync.question('Insertar titulo a eliminar: ');
            biblioteca.eliminarLibro(dlibro);
            break;
        case 4:
            sal = true;
            console.log('Adiós');
            break;
        default:
            console.log('Opción inválida');
            break;
    }
}
