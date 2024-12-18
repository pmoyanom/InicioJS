// Función para cambiar el tema
function cambiarTema(tema) {
    const body = document.body;

    // Reiniciamos estilos previos
    body.className = '';

    // Aplicamos el nuevo tema
    switch (tema) {
        case 'oscuro':
            body.style.backgroundColor = '#1a1a1a';
            body.style.color = '#ffffff';
            break;
        case 'pastel':
            body.style.backgroundColor = '#ffe4e1';
            body.style.color = '#333333';
            break;
        case 'claro':
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#000000';
            break;
    }

    // Guardar el tema en el localStorage
    localStorage.setItem('temaSeleccionado', tema);
}

// Cargar el tema guardado al iniciar la página
window.addEventListener('load', () => {
    const temaGuardado = localStorage.getItem('temaSeleccionado');
    if (temaGuardado) {
        cambiarTema(temaGuardado);
    }
});

const inputTarea = document.querySelector('.input1');
const botonAgregar = document.querySelector('.btn-agregar');
const tareasPendientes = document.querySelector('.container .tareas:nth-child(1)');
const zonasDeTareas = document.querySelectorAll('.tareas');

// Seleccionar los contadores
const contadorPendientes = document.getElementById('contador-pendientes');
const contadorEnProceso = document.getElementById('contador-en-proceso');
const contadorCompletas = document.getElementById('contador-completas');

// Lista de colores
const colores = ['#ff9999', '#99ccff', '#ffff99', '#99ff99', '#ffcc99', '#cc99ff', '#ff9999', '#99ccff', '#ffff99', '#99ff99', '#ffcc99', '#cc99ff'];
let colorIndex = 0;

// Función para actualizar los contadores
function actualizarContadores() {
    contadorPendientes.textContent = tareasPendientes.querySelectorAll('.tarea').length;
    contadorEnProceso.textContent = document.querySelector('#en-proceso').querySelectorAll('.tarea').length;
    contadorCompletas.textContent = document.querySelector('#completas').querySelectorAll('.tarea').length;
}

// Función para agregar tareas a la sección "Tareas pendientes"
botonAgregar.addEventListener('click', () => {
    const tareaTexto = inputTarea.value.trim();

    if (tareaTexto) {
        // Crear un elemento de tarea
        const tarea = document.createElement('div');
        tarea.classList.add('tarea');
        tarea.setAttribute('draggable', 'true');
        tarea.textContent = tareaTexto;
        tarea.setAttribute('id', `tarea-${Date.now()}`); // ID único

        // Asignar color de fondo
        tarea.style.backgroundColor = colores[colorIndex];
        colorIndex = (colorIndex + 1) % colores.length; // Rotar al siguiente color

        // Agregar funcionalidad de arrastre
        tarea.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
            tarea.style.opacity = '0.5';
        });

        tarea.addEventListener('dragend', () => {
            tarea.style.opacity = '1';
        });

        const botonEditar = document.createElement('span');
        botonEditar.innerHTML = '✏️'; // Emoticono de lápiz
        botonEditar.classList.add('emoticono-editar');
        botonEditar.addEventListener('click', () => {
            const nuevoTexto = prompt('Edita tu tarea:', tarea.textContent.trim());
            if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
                tarea.firstChild.textContent = nuevoTexto; // Actualiza el texto
            }
        });
        // Crear botón de eliminación
        const botonEliminar = document.createElement('button');
        botonEliminar.innerHTML = '💩'; 
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.addEventListener('click', () => {
            tarea.remove(); // Elimina la tarea
            actualizarContadores(); // Actualiza los contadores
        });


        tarea.appendChild(botonEditar);
        tarea.appendChild(botonEliminar);
        tareasPendientes.appendChild(tarea);
        inputTarea.value = '';
        actualizarContadores();
    }
});


// Funcionalidad de arrastrar y soltar para todas las zonas de tareas
zonasDeTareas.forEach((zona) => {
    zona.addEventListener('dragover', (event) => {
        event.preventDefault();
        zona.style.borderColor = '#2ecc71'; // Destacar la zona
    });

    zona.addEventListener('dragleave', () => {
        zona.style.borderColor = '#aaa'; // Restaurar el color
    });

    zona.addEventListener('drop', (event) => {
        event.preventDefault();
        const tareaId = event.dataTransfer.getData('text/plain');
        const tarea = document.getElementById(tareaId);

        if (tarea) {
            zona.appendChild(tarea); // Mover la tarea a la zona seleccionada
        }

        // Actualizar contadores
        actualizarContadores();

        zona.style.borderColor = '#aaa'; // Restaurar el color
    });
});
