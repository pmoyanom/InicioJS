//import the Pokemon array and the setCookie function
import { pokemons } from './Pokemones.js';
import { setCookie } from './Galletas.js';

//variable to store the selected pokemon
let selectedPokemon = null; 

// Function to save the selected pokemon in a cookie
function saveSelectedPokemon(pokemon) {
    setCookie('playerPokemon', pokemon, 7);  
}

// Function to render the pokemon list
function renderPokemonList() {
    const pokemonList = document.getElementById('pokemonList');
    pokemons.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.dataset.id = pokemon.id; 
        pokemonCard.innerHTML = `
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Tipo: ${pokemon.types.join(", ")}</p>
        `;
        
        // Event listener to select the pokemon
        pokemonCard.addEventListener('click', () => selectPokemon(pokemon, pokemonCard));

        pokemonList.appendChild(pokemonCard);
    });
}

function selectPokemon(pokemon, cardElement) {
    // If a pokemon is already selected, unselect it
    if (selectedPokemon) {
        selectedPokemon.card.classList.remove('selected');
    }

    // Set the selected pokemon
    selectedPokemon = { pokemon, card: cardElement };
    cardElement.classList.add('selected');

    // set the startBattleButton to enabled
    document.getElementById('startBattleButton').disabled = false;
}

// Action the startBattleButton
document.getElementById('startBattleButton').addEventListener('click', () => {
    if (!selectedPokemon) {
        alert("Por favor, selecciona un Pokémon primero.");
        return;
    }

    // Save the selected pokemon in a cookie
    saveSelectedPokemon(selectedPokemon.pokemon);

    // Redirigir a la página de prebatalla
    window.location.href = 'prebatalla.html'; 
});

// Random selection button
document.getElementById('randomSelectionButton').addEventListener('click', () => {
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    
   
    const randomPokemonCard = document.querySelector(`[data-id="${randomPokemon.id}"]`);
    
    if (selectedPokemon) {
        selectedPokemon.card.classList.remove('selected');
    }

    selectedPokemon = { pokemon: randomPokemon, card: randomPokemonCard };
    randomPokemonCard.classList.add('selected');

    document.getElementById('startBattleButton').disabled = false;
});

renderPokemonList();
