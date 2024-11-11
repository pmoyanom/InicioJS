// Función para leer la cookie seleccionada
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function guardarPokemonOponenteEnCookies(pokemon) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000)); // Cookie válida por 1 día
    const expires = "expires=" + d.toUTCString();
    const pokemonData = JSON.stringify(pokemon);  // Guardar todo el objeto con id y si es shiny
    document.cookie = `opponentPokemon=${pokemonData}; ${expires}; path=/`;
}


// Obtener el Pokémon guardado en la cookie
function getSelectedPokemon() {
    const pokemonData = getCookie('selectedPokemon');
    return pokemonData ? JSON.parse(pokemonData) : getRandomPokemon();
}

// Función para obtener un Pokémon aleatorio
function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
}

// Cargar la información de los Pokémon en la página
function loadDataInPage() {
    const pokemon1 = getSelectedPokemon(); // Leer Pokémon 1 desde la cookie
    const pokemon2 = getRandomPokemon(); // Pokémon 2 será aleatorio
    guardarPokemonOponenteEnCookies(pokemon2);

    console.log(`¡Empieza la batalla entre ${pokemon1.name} y ${pokemon2.name}!`);

    if (pokemon1.isShiny) {
        document.getElementById('pokemon1-img').src = pokemon1.img.replace('normal-sprite', 'shiny-sprite');
    }
    document.getElementById('pokemon1-name').textContent = pokemon1.name;

    document.getElementById('pokemon2-img').src = pokemon2.img;
    document.getElementById('pokemon2-name').textContent = pokemon2.name;
}

// Función para iniciar la batalla
function startBattle() {
    window.location.href = '../../ut3-proyecto-final-pokemon/fase3-combate/';
}

loadDataInPage();
document.getElementById('start-battle').addEventListener('click', startBattle);
