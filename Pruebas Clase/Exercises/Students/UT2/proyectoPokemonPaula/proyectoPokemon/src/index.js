
const readline=require('readline-sync'); // Import the readline-sync module to handle user input

// Import necessary classes and data from other files
const { Pokemon, pokemons } = require('./Pokemon');
const { Move, moves } = require('./Move');
const {Types, typesAdvantages} = require("./Types");

// Function to get a random Pokemon from the pokemons array
function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
}


// Function to determine the random action for the AI's Pokemon
function getRandomAction(machinePokemon, playerPokemon) {
    const randomAction=Math.random();
    if (randomAction<0.5 || !machinePokemon.heal) {
          // 50% chance to attack, or always attack if healing is not available
        const randomMove=machinePokemon.moves[Math.floor(Math.random()*machinePokemon.moves.length)];
        machinePokemon.performAttack(playerPokemon, randomMove);
    } else {
        machinePokemon.heal(); // Attempt to heal if it's not already used
    }
}

// Main battle function
function battle() {
    // Get random Pokemon for the player and the AI
    const playerPokemon=getRandomPokemon();
    let machinePokemon=getRandomPokemon();

    
    // Ensure the AI's Pokemon is different from the player's
    while (playerPokemon===machinePokemon) {
        machinePokemon=getRandomPokemon();
    }


     // Display welcome messages and initial battle information
    console.log(`Welcome to the Pokéathlon Dome!!\nWelcome to Johto!!\nchoose wisely!!!`);
    console.log(`The battle begins!`);
    console.log('********************');
    console.log(`Your Pokemon: ${playerPokemon.name} (${playerPokemon.type})`);
    console.log(`AI´s Pokemon: ${machinePokemon.name} (${machinePokemon.type})`);
    console.log('********************');
 
    // Battle loop continues until one Pokemon's HP reaches 0
    while (playerPokemon.hpActual > 0 && machinePokemon.hpActual > 0) {
        // Display current HP status
        console.log(`\nYour Pokemon ${playerPokemon.name} - HP: ${playerPokemon.hpActual}/${playerPokemon.hpMax}`);
        console.log(`AI´s Pokemon: ${machinePokemon.name} - HP: ${machinePokemon.hpActual}/${machinePokemon.hpMax}`);
        console.log('********************');

        // Player's turn
        const action = readline.question('Choose wisely... \n1.Attack\n2.Heal ');

        if (action==='1') {

            // Player chooses to attack
            console.log('Choose your next move: ');
            playerPokemon.moves.forEach((move, index) => {
                console.log(`${index + 1}: ${move.name} (Damage: ${move.baseDamage})`);
            });
            const moveIndex=parseInt(readline.question('Select the movement number: '))-1;          //Validación
            console.log('********************');
            console.log(playerPokemon.moves[moveIndex]);
            console.log('********************');

            // Perform the selected attack if it's valid
            if (moveIndex>=0 && moveIndex<playerPokemon.moves.length) {
                const selectedMove = playerPokemon.moves[moveIndex];
                playerPokemon.performAttack(machinePokemon, selectedMove); // Attack with the selected movement
            } else {
                console.log('Invalid move...');
            }

        } else if (action==='2') {
             // Player chooses to heal
            playerPokemon.heal();
        }

         // Check if AI's Pokemon is defeated
        if (machinePokemon.hpActual<=0) {
            console.log(`${machinePokemon.name} HAS BEEN DEFEAT. You are the winner!`);
            break;
        }
         // AI's turn
        console.log('\nAI´s turn...');
        getRandomAction(machinePokemon, playerPokemon);

        // Check if player's Pokemon is defeated
        if (playerPokemon.hpActual<=0) {
            console.log(`${playerPokemon.name} HAS BEEN DEFEAT. You loose the battle...`);
            break;
        }
    }
}

// Start the battle
battle();
        


