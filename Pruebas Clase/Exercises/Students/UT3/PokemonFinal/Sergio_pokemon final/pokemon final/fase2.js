window.addEventListener('DOMContentLoaded', (event) => {
    const pokemonJugador = JSON.parse(localStorage.getItem('pokemonJugador'));
    const pokemonOponente = JSON.parse(localStorage.getItem('pokemonOponente'));

    if (pokemonJugador && pokemonOponente) {
        document.getElementById('nombre-pokemon-jugador').textContent = pokemonJugador.name;
        document.getElementById('img-pokemon-jugador').src = pokemonJugador.img;

        document.getElementById('nombre-pokemon-oponente').textContent = pokemonOponente.name;
        document.getElementById('img-pokemon-oponente').src = pokemonOponente.img;
    } else {
        // Si no se encuentra información en localStorage, redirigir al inicio
        window.location.href = 'index.html';
    }
});
