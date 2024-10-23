const Pokemon = require('./Pokemon');
const Move = require('./Move');
const Type = require('./Type');
const readlineSync = require('readline-sync');

// Definition of moves
const hyperBeam = new Move('Hyper Beam', 90);
const solarBeam = new Move('Solar Beam', 95);
const rockSlide = new Move('Rock Slide', 75);
const thunderPunch = new Move('Thunder Punch', 75);
const firePunch = new Move('Fire Punch', 75);
const surf = new Move('Surf', 90);
const dragonBreath = new Move('Dragon Breath', 60);
const fly = new Move('Fly', 85);
const focusPunch = new Move('Focus Punch', 80);
const flamethrower = new Move('Flamethrower', 90);
const waterGun = new Move('Water Gun', 40);
const vineWhip = new Move('Vine Whip', 45);
const thunderbolt = new Move('Thunderbolt', 90);
const quickAttack = new Move('Quick Attack', 40);
const gust = new Move('Gust', 40);
const sleepPowder = new Move('Sleep Powder', 0);
const karateChop = new Move('Karate Chop', 50);
const earthquake = new Move('Earthquake', 85);
const bodySlam = new Move('Body Slam', 85);  

// Definition of Pokémon
const Pokemons = [
    new Pokemon('Charmander', Type.FUEGO, 150, 52, 53, [flamethrower, firePunch]),
    new Pokemon('Squirtle', Type.AGUA, 150, 48, 75, [waterGun, surf]),
    new Pokemon('Bulbasaur', Type.PLANTA, 130, 49, 69, [vineWhip, solarBeam]),
    new Pokemon('Raichu', Type.ELECTRICO, 150, 90, 65, [thunderPunch, hyperBeam]),
    new Pokemon('Jolteon', Type.ELECTRICO, 150, 110, 60, [thunderbolt, quickAttack]),
    new Pokemon('Butterfree', Type.BICHO, 100, 45, 70, [gust, sleepPowder]),
    new Pokemon('Machamp', Type.LUCHA, 110, 130, 80, [focusPunch, karateChop]),
    new Pokemon('Onix', Type.ROCA, 100, 45, 160, [rockSlide, earthquake]),
    new Pokemon('Dragonite', Type.DRAGON, 134, 134, 95, [dragonBreath, fly]),
    new Pokemon('Snorlax', Type.NORMAL, 160, 110, 75, [hyperBeam, bodySlam]),
    new Pokemon('Gyarados', Type.AGUA, 95, 125, 89, [surf, hyperBeam]),
];

// Function to choose two random Pokémon
function elegirPokemonAleatorio() {
    const index1 = Math.floor(Math.random() * Pokemons.length);
    let index2;
    
    // Ensure that the two Pokémon are different
    do {
        index2 = Math.floor(Math.random() * Pokemons.length);
    } while (index1 === index2);
    
    return [Pokemons[index1], Pokemons[index2]];
}

function batalla(jugador, oponente) {
    let turno = true; // The player goes first

    console.log("---------- BATTLE START ----------");
    console.log(` The Pokémon participating are: ${jugador.nombre} 🆚 ${oponente.nombre}`);
    console.log("-----------------------------------------");

    while (jugador.hpActual > 0 && oponente.hpActual > 0) {
        console.log("----------- NEW TURN -------------");
        if (turno) {
            console.log(`🎯 It's ${jugador.nombre}'s turn`);
            const accion = readlineSync.question('Do you want to attack (a) or heal (c)? ');

            if (accion === 'a') {
                const indexMovimiento = readlineSync.keyInSelect(jugador.movimientos.map(m => m.nombre), 'Choose your move:');
                
                if (indexMovimiento >= 0) {
                    jugador.attack(jugador.movimientos[indexMovimiento], oponente);
                }
            } else if (accion === 'c') {
                jugador.heal();
            }
        } else {
            console.log(`🎯 It's ${oponente.nombre}'s turn`);
            const accionOponente = Math.random() > 0.5 ? 'a' : 'c';

            if (accionOponente === 'a') {
                const indexMovimiento = Math.floor(Math.random() * oponente.movimientos.length);
                oponente.attack(oponente.movimientos[indexMovimiento], jugador);
            } else {
                oponente.heal();
            }
        }

        turno = !turno; // Switch turn
        console.log("-------------------------------------");
    }

    console.log("----------- BATTLE END -----------");
    if (jugador.hpActual > 0) {
        console.log(`${jugador.nombre} won the battle!🏆`);
    } else {
        console.log(`${oponente.nombre} won the battle!🏆`);
    }
    console.log("-----------------------------------------");
}

// Choose random Pokémon and start the battle
const [jugador, oponente] = elegirPokemonAleatorio();
batalla(jugador, oponente);
