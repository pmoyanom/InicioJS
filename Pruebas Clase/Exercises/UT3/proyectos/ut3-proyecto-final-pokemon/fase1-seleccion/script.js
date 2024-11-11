let selectedPokemon = null;

function generateGrid() {
    const grid = document.getElementById('pokemonGrid');
    pokemons.forEach(pokemon => {
        // 1% de probabilidad de ser shiny
        const isShiny = Math.random() < 0.01;
        const imgSrc = isShiny ? pokemon.img.replace('normal-sprite', 'shiny-sprite') : pokemon.img;
        if (isShiny) { pokemon.isShiny = true; }

        const card = document.createElement('div');
        card.id = `pokemon${pokemon.id}`;
        card.className = 'pokemon-card' + (isShiny ? ' shiny' : '');
        card.innerHTML = `
            <span class="shiny-star">★</span>
            <img src="${imgSrc}" alt="${pokemon.name}">
            <div class="pokemon-name">${pokemon.name}</div>
            <div class="pokemon-types">
                ${pokemon.types.map(type => `<span class="type ${type}">${type}</span>`).join('')}
            </div>
        `;

        card.addEventListener('click', () => {
            const selectedCard = document.querySelector('.pokemon-card.selected');
            if (selectedCard) {
                selectedCard.classList.remove('selected');
            }
            card.classList.add('selected');
            selectedPokemon = { ...pokemon, isShiny };
            guardarPokemonEnCookies(selectedPokemon);

            document.getElementById('confirmButton').disabled = false;
        });

        grid.appendChild(card);
    });
}

function guardarPokemonEnCookies(pokemon) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000)); // Cookie válida por 1 día
    const expires = "expires=" + d.toUTCString();
    const pokemonData = JSON.stringify(pokemon);  // Guardar todo el objeto con id y si es shiny
    document.cookie = `selectedPokemon=${pokemonData}; ${expires}; path=/`;
}

function seleccionAleatoria() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    const pokemonAleatorio = pokemons[randomIndex];
    const isShiny = pokemonAleatorio.isShiny;
    const cards = document.querySelectorAll('.pokemon-card');
    cards.forEach(card => card.classList.remove('selected'));
    cards[randomIndex].classList.add('selected');
    selectedPokemon = { ...pokemonAleatorio, isShiny };
    guardarPokemonEnCookies(selectedPokemon);
    document.getElementById(`pokemon${pokemonAleatorio.id}`).scrollIntoView();
    document.getElementById('confirmButton').disabled = false;
}

document.getElementById('randomButton').addEventListener('click', seleccionAleatoria);
document.getElementById('confirmButton').addEventListener('click', () => {
    window.location.href = '../../ut3-proyecto-final-pokemon/fase2-vs/';

})
window.onload = generateGrid;