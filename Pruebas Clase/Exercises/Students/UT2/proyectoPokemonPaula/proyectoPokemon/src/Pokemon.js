// Import the Move class and moves array from the Move.js file
const { Move, moves } = require('./Move'); 
// Import the Types and typesAdvantages from the Types.js file
const {Types, typesAdvantages} = require('./Types'); 

// Define the Pokemon class
class Pokemon {
    constructor(name, type, hpMax, attack, defense, moves) {
        this.name = name;
        this.type = type;
        this.hpMax = hpMax;
        this.hpActual = hpMax;// Current HP starts at max
        this.attack = attack;
        this.defense = defense;
        this.moves = moves; // Array of Move objects
        this.hasHealed = false; // Track if healing has been used
    }
    // Calculate type effectiveness multiplier
    getTypeMult(opponentType){
        if(typesAdvantages[this.type]&&typesAdvantages[this.type][opponentType]){
            return typesAdvantages[this.type][opponentType];
        }
        return 1;// Default to normal effectiveness
    }
       // Perform an attack on the opponent
    performAttack(opponent, movement) {
        const randomFactor=(0.85+Math.random()*0.15); // Random factor between 0.85 and 1
        const typeMultiplier=this.getTypeMult(opponent.type);
        const damage=Math.max(1, Math.floor((this.attack/opponent.defense)*movement.baseDamage*randomFactor*typeMultiplier));
        
        opponent.hpActual=Math.max(opponent.hpActual-damage, 0); // Ensure HP doesn't go below 0
        console.log(`${this.name} used ${movement.name} and inflicted ${damage} of damage to ${opponent.name}`);
         // Display effectiveness message
        if (typeMultiplier>1) {
            console.log(`It's super effective!`);
        } else if (typeMultiplier<1) {
            console.log(`It's not very effective...`);
        }
    }
     // Heal the Pokemon
    heal() {
        if (!this.hasHealed && this.hpActual<this.hpMax ) {
            const healedAmount=Math.floor(this.hpMax*0.5);// Heal 50% of max HP
            this.hpActual=Math.min(this.hpActual+healedAmount,this.hpMax);
            console.log(`${this.name} has healed ${healedAmount} HP. ${this.name} now has ${this.hpActual}/${this.hpMax} HP.`);
            this.hasHealed=true;
        } else if(this.hasHealed){
            console.log(`${this.name} has already used heal in this battle.`);

        } else {
            console.log(`${this.name} already has max HP.`);
        }
    }

   
}

// Create an array of predefined Pokemon
const pokemons = [
    new Pokemon('CHARMANDER', Types.FIRE, 200, 60, 50, [moves[0], moves[27]]), // Ember, Flame Wheel
    new Pokemon('KAKUNA', Types.BUG, 180, 40, 80, [moves[2], moves[1]]), // Harden, Tackle
    new Pokemon('JIGGLYPUFF', Types.FAIRY, 250, 45, 40, [moves[3], moves[4]]), // Charm, Sing
    new Pokemon('GENGAR', Types.GHOST, 220, 75, 70, [moves[5], moves[6]]), // Shadow Punch, Lick
    new Pokemon('MACHOKE', Types.FIGHTING, 260, 80, 80, [moves[7], moves[8]]), // Low Kick, Karate Chop
    new Pokemon('PSYDUCK', Types.WATER, 190, 65, 60, [moves[13], moves[24]]), // Water Gun, Water Pulse
    new Pokemon('PONYTA', Types.FIRE, 180, 85, 65, [moves[0], moves[27]]), // Ember, Flame Wheel
    new Pokemon('EEVEE', Types.NORMAL, 200, 70, 65, [moves[11], moves[28]]), // Quick Attack, Swift
    new Pokemon('BULBASAUR', Types.GRASS, 210, 65, 65, [moves[12], moves[1]]), // Razor Leaf, Tackle
    new Pokemon('SQUIRTLE', Types.WATER, 210, 60, 80, [moves[13], moves[26]]), // Water Gun, Bite
    new Pokemon('PIKACHU', Types.ELECTRIC, 180, 70, 55, [moves[14], moves[11]]), // Thundershock, Quick Attack
    new Pokemon('ONIX', Types.ROCK, 230, 60, 160, [moves[15], moves[1]]), // Rock Throw, Tackle
    new Pokemon('DROWZEE', Types.PSYCHIC, 220, 65, 60, [moves[18], moves[25]]), // Psybeam, Confusion
    new Pokemon('KRABBY', Types.WATER, 170, 105, 90, [moves[13], moves[29]]), // Water Gun, Bite
    new Pokemon('VOLTORB', Types.ELECTRIC, 180, 50, 70, [moves[14], moves[1]]), // Thundershock, Tackle
    new Pokemon('EXEGGCUTE', Types.GRASS, 200, 60, 90, [moves[12], moves[25]]), // Razor Leaf, Confusion
    new Pokemon('CUBONE', Types.GROUND, 210, 70, 95, [moves[22], moves[26]]), // Earthquake, Bite
    new Pokemon('HITMONLEE', Types.FIGHTING, 200, 120, 70, [moves[7], moves[8]]), // Low Kick, Karate Chop
    new Pokemon('LICKITUNG', Types.NORMAL, 240, 70, 85, [moves[6], moves[26]]), // Lick, Stomp
    new Pokemon('CHANSEY', Types.NORMAL, 400, 30, 30, [moves[10], moves[4]]), // Pound, Sing
    new Pokemon('TANGELA', Types.GRASS, 220, 70, 115, [moves[12], moves[1]]), // Razor Leaf, Tackle
    new Pokemon('HORSEA', Types.WATER, 170, 60, 80, [moves[13], moves[28]]), // Water Gun, Swift
    new Pokemon('GOLDEEN', Types.WATER, 190, 80, 70, [moves[13], moves[16]]), // Water Gun, Peck
    new Pokemon('STARYU', Types.WATER, 170, 65, 70, [moves[13], moves[28]]), // Water Gun, Swift
    new Pokemon('SCYTHER', Types.BUG, 210, 110, 90, [moves[9], moves[11]]), // Scratch, Quick Attack
    new Pokemon('MAGIKARP', Types.WATER, 160, 30, 65, [moves[1], moves[1]]), // Tackle, Tackle
    new Pokemon('TENTACOOL', Types.WATER, 180, 60, 55, [moves[17], moves[13]]), // Acid, Water Gun
    new Pokemon('GASTLY', Types.GHOST, 170, 55, 50, [moves[6], moves[25]]), // Lick, Confusion
    new Pokemon('GRIMER', Types.POISON, 230, 90, 70, [moves[17], moves[10]]), // Acid, Pound
    new Pokemon('PIDGEY', Types.FLYING, 180, 55, 50, [moves[11], moves[1]]), // Quick Attack, Tackle
    new Pokemon('DRAGONITE', Types.DRAGON, 280, 120, 100, [moves[22], moves[9]]) // Earthquake, Scratch
];


module.exports= {Pokemon, pokemons};