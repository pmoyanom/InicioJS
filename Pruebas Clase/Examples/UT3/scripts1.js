/*
let evento = new Date("2024-12-31");
let diasRestantes = Math.ceil((evento - new Date()) / (1000 * 60 * 60 * 24));

console.log(`Faltan ${diasRestantes} días para el evento. ¡No te lo pierdas!`);
// Output: Faltan 95 días para el evento. ¡No te lo pierdas!

alert('Este es un mensaje de alerta.');

let decision = confirm('¿Estás seguro de que deseas continuar?');
if (decision) {
  console.log('El usuario aceptó');
} else {
  console.log('El usuario canceló');
}

// Cambiar el contenido de un elemento con ID "titulo"
document.getElementById('titulo').innerText = '¡Hola, Mundo!';
*/
// Crear un nuevo párrafo y añadirlo al cuerpo
/*
let parrafo = document.createElement('p');
parrafo.innerText = 'Este es un nuevo párrafo.';
document.body.appendChild(parrafo);
*/

// Añadir listas dinámicas
/*
let frutas = ['Manzana', 'Banana', 'Cereza'];

// Crear la lista desordenada
let listaFrutas = document.createElement('ul'); // Crear un elemento de lista desordenada

// Añadir elementos de lista dinámicamente
frutas.forEach(fruta => {
    let item = document.createElement('li');// Crear un elemento de lista
    item.innerText = fruta;
    listaFrutas.appendChild(item);
});

// Añadir la lista al cuerpo del documento
document.body.appendChild(listaFrutas);
*/

//Eventos interactivos y dinamismo en el DOM
// Crear lista y botón
/*
let listaTareas = document.createElement('ul');
let botonAgregar = document.createElement('button');
botonAgregar.innerText = 'Añadir Tarea';
document.body.appendChild(listaTareas);
document.body.appendChild(botonAgregar);

// Añadir evento al botón
botonAgregar.addEventListener('click', () => {
    let nuevaTarea = document.createElement('li');
    nuevaTarea.innerText = 'Nueva Tarea';
    listaTareas.appendChild(nuevaTarea);
});
*/

//Generación dinámica de formularios
// Crear el formulario
/*
let formulario = document.createElement('form');

// Campo de texto
let campoNombre = document.createElement('input');
campoNombre.type = 'text';
campoNombre.placeholder = 'Escribe tu nombre';
formulario.appendChild(campoNombre);

// Botón de envío
let botonEnviar = document.createElement('button');
botonEnviar.type = 'submit';
botonEnviar.innerText = 'Enviar';
formulario.appendChild(botonEnviar);

// Añadir el formulario al documento
document.body.appendChild(formulario);
*/

/*
//Manipulación dinámica del DOM con condiciones
let listaItems = document.createElement('ul');
document.body.appendChild(listaItems);

let botonAgregarItem = document.createElement('button');
botonAgregarItem.innerText = 'Añadir Item';
document.body.appendChild(botonAgregarItem);

botonAgregarItem.addEventListener('click', () => {
    if (listaItems.children.length < 3) {
        let item = document.createElement('li');
        item.innerText = `Item ${listaItems.children.length + 1}`;
        listaItems.appendChild(item);
    } else {
        alert('No puedes añadir más de 3 items');
    }
});
*/
