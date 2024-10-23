const readlineSync = require('readline-sync');
const Pokemon = require('./Pokemon');
const Datos = require('./Datos');
const Movimientos = require('./Movimientos');
const Juego = require('./Juego');

class Acciones {
    //Actions for the player an computer
    ataque(pokemonAtacante, pokemonDefensor, movimiento) {
        //calculate the chances of miss the attack
        let dano=0;
        let pFalloA = Math.round (Math.random()*10+1);
        let pFalloB = Math.round (Math.random()*20+1);
        if (pFalloA==pFalloB) {
            console.log(`${pokemonAtacante.nombre} misses ${movimiento.nombre}.`);
            dano=0;
        } else{
            //calcuate the damage of the attack in case of the accuracy of the attack
         dano = Math.round((pokemonAtacante.ataque / pokemonDefensor.defensa) * movimiento.dBase * (Math.random() * (1.0 - 0.85) + 0.85));
        pokemonDefensor.hpActual = Math.max(pokemonDefensor.hpActual - dano, 0); 
        console.log(`${pokemonAtacante.nombre} uses ${movimiento.nombre} and causes ${dano} damage to ${pokemonDefensor.nombre}.`);
        }
        return dano;
    }
        //method for healing
    curar(pokemon) {
        // in case of the pokemon is already healed, it can't be healed again
        if (pokemon.curado) {
            console.log(`${pokemon.nombre} is already healed and can´t heal again.`);
            return false; 
        }
        //in case of the pokemon is at full health, it can't be healed
        if (pokemon.hpActual === pokemon.hpMaximo) {
            console.log(`${pokemon.nombre} has full health and can't be healed.`);
            return false; 
        }
        //the pokemon heals half of its maximum health
        let curacion = pokemon.hpMaximo / 2;
        pokemon.hpActual = Math.min(pokemon.hpActual + curacion, pokemon.hpMaximo); 
        pokemon.curado = true; 
        console.log(`${pokemon.nombre} healed ${curacion} health points.`);
        return true; 
    }
    //methods for displaying the health bar
    mostrarVidaJ(pokemonJ) {
        //calculate the percentage of health
        let vJ = Math.round((pokemonJ.hpActual / pokemonJ.hpMaximo) * 100); 
        //calculate the length of the bar
        let cBarraJ = Math.round((pokemonJ.hpActual / pokemonJ.hpMaximo) * 50); 
        //full health bar of 50 characters
        let barraJ = '=================================================='; 
        //the part of the bar that will be shown
        let barraJ2 = barraJ.substring(0, cBarraJ); 
        //show the bar and the percentage
        console.log(`${barraJ2}${' '.repeat(50 - cBarraJ)} ${vJ}%`); 
    }
    
    mostrarVidaM(pokemonM) {
        let vM = Math.round((pokemonM.hpActual / pokemonM.hpMaximo) * 100); 
        let cBarraM = Math.round((pokemonM.hpActual / pokemonM.hpMaximo) * 50); 
        let barraM = '=================================================='; 
        let barraM2 = barraM.substring(0, cBarraM); 
        
        console.log(`${barraM2}${' '.repeat(50 - cBarraM)} ${vM}%`); 
    }
    

}

module.exports = Acciones;