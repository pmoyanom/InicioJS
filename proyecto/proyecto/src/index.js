// index.js
const readline = require('readline-sync');
const Pokemon = require('./Pokemon');
const Move = require('./Move');
const Types = require('./Types');

// Crear movimientos
const flamethrower = new Move('Lanzallamas', 40);
const waterGun = new Move('Pistola Agua', 30);
const tackle = new Move('Placaje', 20);
const vineWhip = new Move('Látigo Cepa', 35);
const thunderShock = new Move('Impactrueno', 25);
const scratch = new Move('Arañazo', 15);

// Crear una lista de Pokémon
const pokemons = [
    new Pokemon('Charizard', Types.FIRE, 150, 50, 40, [flamethrower, tackle]),
    new Pokemon('Blastoise', Types.WATER, 180, 45, 45, [waterGun, tackle]),
    new Pokemon('Venusaur', Types.GRASS, 160, 48, 42, [vineWhip, tackle]),
    new Pokemon('Pikachu', Types.ELECTRIC, 120, 55, 35, [thunderShock, tackle]),
    new Pokemon('Raichu', Types.ELECTRIC, 130, 60, 40, [thunderShock, scratch]),
    new Pokemon('Jolteon', Types.ELECTRIC, 140, 58, 37, [thunderShock, tackle]),
    new Pokemon('Arcanine', Types.FIRE, 155, 65, 38, [flamethrower, scratch]),
    new Pokemon('Gyarados', Types.WATER, 170, 63, 40, [waterGun, tackle]),
    new Pokemon('Vaporeon', Types.WATER, 160, 50, 45, [waterGun, tackle]),
    new Pokemon('Flareon', Types.FIRE, 145, 60, 35, [flamethrower, tackle]),
];

// Selección aleatoria de Pokémon para el jugador y la máquina
var playerPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
var enemyPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

// Función para mostrar el estado actual de los Pokémon
function showPokemonStatus(player, enemy) {
    console.log('-----------------------------------');
    console.log(`Tu Pokémon: ${player.name} - HP: ${player.hp} / ${player.hpMax}`);
    console.log(`Pokémon Enemigo: ${enemy.name} - HP: ${enemy.hp} / ${enemy.hpMax}`);
    console.log('-----------------------------------');
}

// Función para ejecutar el turno del jugador
function playerTurn(player, enemy) {
    showPokemonStatus(player, enemy);
    console.log(`\nEs tu turno!`);
    console.log(`1. Atacar`);
    console.log(`2. Curarse`);
    const action = readline.question('Elige una acción (1 o 2): ');

    if (action === '1') {
        console.log(`\nElige un movimiento:`);
        player.moves.forEach((move, index) => {
            console.log(`${index + 1}. ${move.name} (Daño: ${move.damage})`);
        });
        const moveIndex = readline.questionInt('Selecciona el movimiento: ') - 1;
        const selectedMove = player.moves[moveIndex];

        player.attack(enemy, selectedMove);
    } else if (action === '2') {
        player.heal();
    } else {
        console.log('Acción no válida.');
    }
}

// Función para ejecutar el turno de la máquina
function enemyTurn(enemy, player) {
    showPokemonStatus(player, enemy);
    console.log(`\nTurno de la máquina!`);
    const action = Math.random() < 0.5 ? 'attack' : 'heal';

    if (action === 'attack' || enemy.healUsed) {
        const randomMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
        enemy.attack(player, randomMove);
    } else {
        enemy.heal();
    }
}

// Ciclo principal del combate
function battle(player, enemy) {
    console.log('¡Comienza la batalla Pokémon!');
    showPokemonStatus(player, enemy);

    while (player.hp > 0 && enemy.hp > 0) {
        playerTurn(player, enemy);
        if (enemy.hp <= 0) {
            console.log(`\n¡${enemy.name} ha sido derrotado! ¡Has ganado!`);
            break;
        }

        enemyTurn(enemy, player);
        if (player.hp <= 0) {
            console.log(`\n¡${player.name} ha sido derrotado! ¡La máquina gana!`);
            break;
        }
    }
}

// Inicia el combate pasando los Pokémon como parámetros
battle(playerPokemon, enemyPokemon);
