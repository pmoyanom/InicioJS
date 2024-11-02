const POKEMON_1_HEALTH_COOKIE = 'pokemon1Health';
const POKEMON_2_HEALTH_COOKIE = 'pokemon2Health';

let pokemon1Health = 100;
let pokemon2Health = 100;

const logMessages = document.getElementById('log-messages');
const pokemon1HealthBar = document.getElementById('pokemon1-health');
const pokemon2HealthBar = document.getElementById('pokemon2-health');
const attackButton = document.getElementById('attack-button');
const healButton = document.getElementById('heal-button');

function loadPokemonData() {
    const pokemon1 = getPokemonFromCookie('selectedPokemon');
    const pokemon2 = getPokemonFromCookie('opponentPokemon');

    pokemon1Health = parseInt(getCookie(POKEMON_1_HEALTH_COOKIE)) || 100;
    pokemon2Health = parseInt(getCookie(POKEMON_2_HEALTH_COOKIE)) || 100;

    updatePokemonData(pokemon1, pokemon2);
    updateHealthBar(1, pokemon1Health);
    updateHealthBar(2, pokemon2Health);
}

function getPokemonFromCookie(cookieName) {
    const pokemonData = JSON.parse(getCookie(cookieName));
    if (pokemonData.isShiny) {
        pokemonData.img = pokemonData.img.replace('normal-sprite', 'shiny-sprite');
    }
    return pokemonData;
}

function updatePokemonData(pokemon1, pokemon2) {
    document.getElementById('pokemon1-img').src = pokemon1.img;
    document.getElementById('pokemon1-name').textContent = pokemon1.name;
    document.getElementById('pokemon2-img').src = pokemon2.img;
    document.getElementById('pokemon2-name').textContent = pokemon2.name;
}

function updateHealthBar(pokemonNumber, health) {
    const healthBar = pokemonNumber === 1 ? pokemon1HealthBar : pokemon2HealthBar;
    healthBar.style.width = health + '%';
}

function addLogMessage(message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    logMessages.appendChild(newMessage);
    logMessages.scrollTop = logMessages.scrollHeight; // Mantener el scroll abajo
}

function attack() {
    const damage = Math.floor(Math.random() * 20) + 10;
    pokemon2Health = Math.max(0, pokemon2Health - damage);
    addLogMessage(`Pikachu ataca a Charmander y causa ${damage} de daño.`);
    updateHealthBar(2, pokemon2Health);
    setCookie(POKEMON_2_HEALTH_COOKIE, pokemon2Health, 1); // Guardar salud en cookies
    checkForWin();
}

function heal() {
    const healAmount = Math.floor(Math.random() * 15) + 5;
    pokemon1Health = Math.min(100, pokemon1Health + healAmount);
    addLogMessage(`Pikachu se cura ${healAmount} puntos de vida.`);
    updateHealthBar(1, pokemon1Health);
    setCookie(POKEMON_1_HEALTH_COOKIE, pokemon1Health, 1); // Guardar salud en cookies
}

function checkForWin() {
    if (pokemon2Health === 0) {
        addLogMessage('¡Pikachu gana el combate!');
        attackButton.disabled = true;
        healButton.disabled = true;
    }
}

function getCookie(name) {
    const nameEQ = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

loadPokemonData();

attackButton.addEventListener('click', attack);
healButton.addEventListener('click', heal);

