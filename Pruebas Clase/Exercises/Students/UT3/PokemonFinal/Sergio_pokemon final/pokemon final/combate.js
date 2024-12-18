document.addEventListener('DOMContentLoaded', () => {
    const jugador = JSON.parse(localStorage.getItem('pokemonJugador'));
    const oponente = JSON.parse(localStorage.getItem('pokemonOponente'));

    if (!jugador || !oponente) {
        alert('No se han seleccionado los Pokémon para el combate.');
        window.location.href = 'index.html';
        return;
    }

    // Elementos del DOM
    const nombreJugador = document.getElementById('nombre-pokemon-jugador');
    const imgJugador = document.getElementById('img-pokemon-jugador');
    const hpJugador = document.getElementById('hp-jugador');
    const barraVidaJugador = document.getElementById('barra-vida-jugador');

    const nombreOponente = document.getElementById('nombre-pokemon-oponente');
    const imgOponente = document.getElementById('img-pokemon-oponente');
    const hpOponente = document.getElementById('hp-oponente');
    const barraVidaOponente = document.getElementById('barra-vida-oponente');

    const botonAtaque = document.getElementById('ataque');
    const botonDefensa = document.getElementById('defensa');
    const botonEspecial = document.getElementById('especial');

    const resultadoCombate = document.getElementById('resultado-combate');
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const registroCombate = document.getElementById('registro-combate');

    // Configuración inicial
    nombreJugador.textContent = jugador.name;
    imgJugador.src = jugador.img;
    hpJugador.textContent = jugador.hp;
    barraVidaJugador.style.width = '100%';

    nombreOponente.textContent = oponente.name;
    imgOponente.src = oponente.img;
    hpOponente.textContent = oponente.hp;
    barraVidaOponente.style.width = '100%';

    let turnoJugador = true;

    botonAtaque.addEventListener('click', () => {
        if (turnoJugador && !combateTerminado()) {
            realizarAtaque(jugador, oponente, hpOponente, barraVidaOponente);
            turnoJugador = false;
            setTimeout(() => turnoOponente(), 1000);
        }
    });

    botonDefensa.addEventListener('click', () => {
        if (turnoJugador && !combateTerminado()) {
            realizarDefensa(jugador, hpJugador, barraVidaJugador);
            turnoJugador = false;
            setTimeout(() => turnoOponente(), 1000);
        }
    });

    botonEspecial.addEventListener('click', () => {
        if (turnoJugador && !combateTerminado()) {
            realizarEspecial(jugador, oponente, hpOponente, barraVidaOponente);
            turnoJugador = false;
            setTimeout(() => turnoOponente(), 1000);
        }
    });

    function realizarAtaque(atacante, defensor, hpDefensorElement, barraVidaDefensor) {
        if (combateTerminado()) return;

        const damage = Math.floor(Math.random() * atacante.attack) + 10;
        defensor.hp -= damage;
        hpDefensorElement.textContent = Math.max(0, defensor.hp);
        actualizarBarraVida(defensor.hp, barraVidaDefensor);
        agregarRegistro(`${atacante.name} ataca causando ${damage} puntos de daño a ${defensor.name}`);

        if (defensor.hp <= 0) {
            mostrarResultadoCombate(`${defensor.name} ha sido derrotado!`);
        }
    }

    function realizarDefensa(pokemon, hpElement, barraVidaElement) {
        if (combateTerminado()) return;

        const curacion = 15;
        pokemon.hp += curacion;
        pokemon.hp = Math.min(pokemon.hp, 100);
        hpElement.textContent = pokemon.hp;
        actualizarBarraVida(pokemon.hp, barraVidaElement);
        agregarRegistro(`${pokemon.name} se cura ${curacion} puntos de HP`);
    }

    function realizarEspecial(atacante, defensor, hpDefensorElement, barraVidaDefensor) {
        if (combateTerminado()) return;

        const damage = Math.floor(Math.random() * atacante.attack) + 20;
        defensor.hp -= damage;
        hpDefensorElement.textContent = Math.max(0, defensor.hp);
        actualizarBarraVida(defensor.hp, barraVidaDefensor);
        agregarRegistro(`${atacante.name} usa un ataque especial causando ${damage} puntos de daño a ${defensor.name}`);

        if (defensor.hp <= 0) {
            mostrarResultadoCombate(`${defensor.name} ha sido derrotado!`);
        }
    }

    function actualizarBarraVida(hp, barraVidaElement) {
        const porcentaje = (hp / 100) * 100;
        barraVidaElement.style.width = `${porcentaje}%`;
    }

    function turnoOponente() {
        if (combateTerminado()) return;

        const decision = Math.floor(Math.random() * 3);
        if (decision === 0) {
            realizarAtaque(oponente, jugador, hpJugador, barraVidaJugador);
        } else if (decision === 1) {
            realizarDefensa(oponente, hpOponente, barraVidaOponente);
        } else {
            realizarEspecial(oponente, jugador, hpJugador, barraVidaJugador);
        }

        turnoJugador = true;
    }

    function mostrarResultadoCombate(mensaje) {
        resultadoCombate.classList.add('mostrar');
        mensajeResultado.textContent = mensaje;

        // Deshabilitar todos los botones de acción
        botonAtaque.disabled = true;
        botonDefensa.disabled = true;
        botonEspecial.disabled = true;

        // Agregar botón para reiniciar el combate
        const botonReiniciar = document.createElement('button');
        botonReiniciar.classList.add('boton-reiniciar');
        botonReiniciar.textContent = 'Volver al Inicio';
        botonReiniciar.addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        resultadoCombate.appendChild(botonReiniciar);
    }

    function combateTerminado() {
        return jugador.hp <= 0 || oponente.hp <= 0;
    }

    function agregarRegistro(mensaje) {
        registroCombate.value += `${mensaje}\n`;
        registroCombate.scrollTop = registroCombate.scrollHeight;
    }
});
