//Import the Pokemon array and the getCookie and setCookie functions
import { pokemons } from './Pokemones.js';
import { getCookie, setCookie } from './Galletas.js';

// Wait for the page to load
window.onload = function() {
    console.log("¡La página y los datos están listos!");

    //Load the player's pokemon
    const playerPokemon = getCookie('playerPokemon');

        console.log("Pokémon del jugador:", playerPokemon);
        document.getElementById('playerImg').src = playerPokemon.img;
        document.getElementById('playerName').textContent = playerPokemon.name;
        document.getElementById('playerType').textContent = "Tipo: " + playerPokemon.types.join(", ");
        document.getElementById('playerHP').textContent = "HP: " + playerPokemon.hp;

    //Load the enemy's pokemon by random
    const enemyPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    console.log("Pokémon enemigo:", enemyPokemon);

    //Save the enemy's pokemon in a cookie
    setCookie('enemyPokemon', enemyPokemon, 7);

    document.getElementById('enemyImg').src = enemyPokemon.img;
    document.getElementById('enemyName').textContent = enemyPokemon.name;
    document.getElementById('enemyType').textContent = "Tipo: " + enemyPokemon.types.join(", ");
    document.getElementById('enemyHP').textContent = "HP: " + enemyPokemon.hp;
    
    //Add event listener to the start battle button
    document.getElementById('startBattleButton').addEventListener('click', function() {
        window.location.href = 'battle.html';
    });
};
