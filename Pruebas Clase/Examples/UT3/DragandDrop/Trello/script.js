const form = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const columns = document.querySelectorAll('.column');
const themeButtons = document.querySelectorAll('.theme-btn');

let draggedTask = null;

// Función para agregar eventos a tareas
function addTaskEvents(task) {
    task.addEventListener('dragstart', () => {
        draggedTask = task;
        task.style.opacity = '0.5';
    });

    task.addEventListener('dragend', () => {
        draggedTask = null;
        task.style.opacity = '1';
    });

    task.querySelector('.edit-btn').addEventListener('click', () => {
        const newText = prompt(
            'Editar tarea:',
            task.querySelector('.task-text').textContent
        );
        if (newText) task.querySelector('.task-text').textContent = newText;
    });

    task.querySelector('.delete-btn').addEventListener('click', () => {
        task.remove();
        updateTaskCounts();
    });
}

// Crear tarea
function createTask(content) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.draggable = true;

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = content;

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = '✏️';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = '🗑️';

    task.append(taskText, editBtn, deleteBtn);

    // Color aleatorio
    task.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 90%)`;

    addTaskEvents(task);
    return task;
}

// Contadores dinámicos
function updateTaskCounts() {
    document.querySelectorAll('.column').forEach((column) => {
        const count = column.querySelectorAll('.task').length;
        column.querySelector('.task-count').textContent = `(${count})`;
    });
}

// Evento para agregar nueva tarea
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = createTask(taskInput.value);
    document.getElementById('todo').appendChild(task);
    taskInput.value = '';
    updateTaskCounts();
});

// Drag and drop
columns.forEach((column) => {
    column.addEventListener('dragover', (e) => e.preventDefault());
    column.addEventListener('drop', () => {
        if (draggedTask) {
            column.appendChild(draggedTask);
            updateTaskCounts();
        }
    });
});

// Cambiar tema
themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.body.setAttribute('data-theme', btn.getAttribute('data-theme'));
    });
});