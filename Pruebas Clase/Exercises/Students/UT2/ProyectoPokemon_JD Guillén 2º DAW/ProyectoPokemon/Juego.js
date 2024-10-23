const readlineSync = require('readline-sync');
const Pokemon = require('./Pokemon');
const Datos = require('./Datos');
const Movimientos = require('./Movimientos');
const Acciones = require('./Acciones');




class Juego { 
    constructor() {
        this.datos = new Datos();  
        this.acciones = new Acciones();  

    }
    //method to distribute the pokemons
    repartirPokemons() {
        //call the method to show the title in ascii art
        this.mostrarTitulo();
        //select the player pokemon randomly
        let pokemonJ = this.datos.pokemons[Math.floor(Math.random() * this.datos.pokemons.length)];
        console.log('Your pokemon is: ' + pokemonJ.nombre);
        
        let pokemonM;
        do {
            //use the do-while loop to avoid selecting the same pokemon
            pokemonM = this.datos.pokemons[Math.floor(Math.random() * this.datos.pokemons.length)];
        } while (pokemonJ.nombre === pokemonM.nombre);
        
        console.log('Your opponent is: ' + pokemonM.nombre);
    
        return [pokemonJ, pokemonM];
    }
    //method of the computer's turn
    turnoM(pokemonM, pokemonJ) {
        //randomly choose if the computer will attack or heal
        let decision = Math.random() < 0.5 ? 'attack' : 'heal';
        if (decision === 'attack') {
            //if the decision is attack, randomly choose an attack
            let ataque = Math.random() < 0.5 ? pokemonM.ataque1 : pokemonM.ataque2;
            console.log(`The opponent ${pokemonM.nombre} chooses to attack with ${ataque.nombre}.`);
            this.acciones.ataque(pokemonM, pokemonJ, ataque);
        } else {
            //if the decision is heal, the computer will heal
            console.log(`The opponent ${pokemonM.nombre} chooses to heal.`);
            let resultadoCura = this.acciones.curar(pokemonM);
            //if the computer can't heal, it will lose its turn
            if (!resultadoCura) {
                console.log(`${pokemonM.nombre} has lost their turn.`);
            }
        }
    }

    //method of the player's turn
    turnoJ(pokemonJ, pokemonM) {
        //menu with the options of attack or heal and in each option the calls of the different methods
        let accion = readlineSync.question('What do you want to do? \n 1. Attack \n 2. Heal\n');
        switch (accion) {
            case '1':
                let ataque = readlineSync.question(`Select an attack: \n 1. ${pokemonJ.ataque1.nombre} \n 2. ${pokemonJ.ataque2.nombre}\n`);
                switch (ataque) {
                    case '1':
                        this.acciones.ataque(pokemonJ, pokemonM, pokemonJ.ataque1);
                        break;
                    case '2':
                        this.acciones.ataque(pokemonJ, pokemonM, pokemonJ.ataque2);
                        break;
                    default:
                        console.log('You have not chosen a valid option');
                        break;
                }
                break;
            case '2':
                //if the player is healed or his health is full, it will lose its turn
                let resultadoCura = this.acciones.curar(pokemonJ);
                if (!resultadoCura) {
                    console.log(`${pokemonJ.nombre} Has lost their turn.`);
                }
                break;
            default:
                console.log('You have not chosen a valid option');
                break;
        }
    }

    //method to develop the game
    desarrollarJuego(pokemonJ, pokemonM) {
        //initialization of a boolean variable to uses in the while loop
        let turno=1;
        let salida = false;
        while (!salida) {
            //show the health of the two pokemons
            console.log(`*************************************************************`);
            console.log(`\n${pokemonJ.nombre} has ${pokemonJ.hpActual} HP`);
            this.acciones.mostrarVidaJ(pokemonJ);
            console.log(`${pokemonM.nombre} has ${pokemonM.hpActual} HP\n`);
            this.acciones.mostrarVidaM(pokemonM);
            console.log(`*************************************************************`);
            // Player's turn
            this.turnoJ(pokemonJ, pokemonM);

            // Verify if the opponent has been defeated
            if (pokemonM.hpActual <= 0) {
                console.log(`${pokemonM.nombre} has been defeated in turn ${turno}. You won!`);
                salida = true;
                break;
            }

            // computer's turn
            this.turnoM(pokemonM, pokemonJ);

            // Verify if the player has been defeated
            if (pokemonJ.hpActual <= 0) {
                console.log(`${pokemonJ.nombre} has been defeated in turn ${turno}. You lost!`);
                salida = true;
                break;
            }

            // Show the health of the two pokemons at the end of each turn
            console.log(`*************************************************************`);
            console.log(`\nAfter turn:`);
            console.log(`${pokemonJ.nombre} has ${pokemonJ.hpActual} HP`);
            this.acciones.mostrarVidaJ(pokemonJ);

            console.log(`${pokemonM.nombre} has ${pokemonM.hpActual} HP\n`);
            this.acciones.mostrarVidaM(pokemonM);
            console.log(`*************************************************************`);
            turno++;
            //show the turn
            console.log(`Turn ${turno}`);


        }
    }
    //method to start the game
    jugar() {
        let [pokemonJ, pokemonM] = this.repartirPokemons();
        this.desarrollarJuego(pokemonJ, pokemonM);
    }
    //method to show the title in ascii art
    mostrarTitulo(){
        const pokeTitle = [
            "                               .::.                           ",
            "                              .;:**'                          ",
            "                              `                               ",
            "  .:XHHHHk.              db.   .;;.     dH  MX                ",
            "oMMMMMMMMMMM       ~MM  dMMP :MMMMMR   MMM  MR      ~MRMN     ",
            "QMMMMMb  'MMX       MMMMMMP !MX' :M~   MMM MMM  .oo. XMMM 'MMM",
            "  `MMMM.  )M> :X!Hk. MMMM   XMM.o'  .  MMMMMMM X?XMMM MMM>!MMP",
            "   'MMMb.dM! XM M'?M MMMMMX.`MMMMMMMM~ MM MMM XM `' MX MMXXMM ",
            "    ~MMMMM~ XMM. .XM XM`'MMMb.~*?**~ .MMX M t MMbooMM XMMMMMP ",
            "     ?MMM>  YMMMMMM! MM   `?MMRb.    `MM   !L'MMMMM XM IMMM   ",
            "      MMMX   'MMMM'  MM       ~%:           !Mh.''' dMI IMMP  ",
            "      'MMM.                                             IMX   ",
            "       ~M!M                                             IM    "
        ];
        
        // Para mostrar el arte ASCII en la consola
        pokeTitle.forEach(line => console.log(line));
        
        
    }
}
module.exports = Juego;