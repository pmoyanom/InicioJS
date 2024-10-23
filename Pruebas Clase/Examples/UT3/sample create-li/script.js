document.addEventListener('DOMContentLoaded', function () {

    const list = document.getElementById('dynamic-list');
    const button = document.getElementById('add-item-btn');
    let counter = 1;

    button.addEventListener('click', function () {
        // Crear un nuevo elemento <li>
        const newItem = document.createElement('li');

        // Añadir texto al elemento <li>
        newItem.textContent = `Elemento dinámico ${counter}`;

        // Añadir el nuevo <li> al <ul>
        list.appendChild(newItem);

        // Incrementar el contador
        counter++;
    });

});