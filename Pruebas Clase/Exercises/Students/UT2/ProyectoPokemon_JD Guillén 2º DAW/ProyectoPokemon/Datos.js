
const Movimientos = require('./Movimientos');
const Pokemon = require('./Pokemon');

const Type = { 
    FIRE: "fire",
    WATER: "water",
    ELECTRIC: "electric",
    FLYING: "flying",
    PSYCHIC: "psychic",
    POISON: "poison",
    ROCK: "rock",
    PLANT: "plant",
    NORMAL: "normal"
};
class Datos {
    constructor() {
        this.flamethrower = new Movimientos("Flamethrower", 40);
        this.wGun = new Movimientos("Water gun", 40);
        this.tShock = new Movimientos("Thunder Shock", 40);
        this.tornado = new Movimientos("Tornado", 40);
        this.psychic = new Movimientos("Psychic", 40);
        this.sWave = new Movimientos("Sludge Wave", 40);
        this.rThrow = new Movimientos("Rock Throw", 40);
        this.vWhip = new Movimientos("Vine Whip", 40);
        this.tackle = new Movimientos("Tackle", 20);
        this.cut = new Movimientos("Cut", 20);
        this.boomburst = new Movimientos("Boomburst", 20);
        this.bSlam = new Movimientos("Body Slam", 20);
        this.agility = new Movimientos("Agility", 20);
        this.hAttack = new Movimientos("Horn Attack", 20);
        this.scratch = new Movimientos("Scratch", 20);

        this.pokemons = [
            new Pokemon("Charizard", Type.FIRE, 150, 150, 35, 20, this.Flamethrower, this.tackle),
            new Pokemon("Blastoise", Type.WATER, 150, 150, 30, 25, this.wGun, this.scratch),
            new Pokemon("Pidgeot", Type.FLYING, 150, 150, 29, 23, this.tornado, this.bSlam),
            new Pokemon("Pikachu", Type.ELECTRIC, 150, 150, 32, 20, this.tShock, this.agility),
            new Pokemon("Mewtwo", Type.PSYCHIC, 150, 150, 40, 38, this.psychic, this.boomburst),
            new Pokemon("Ekans", Type.POISON, 150, 150, 25, 38, this.sWave, this.hAttack),
            new Pokemon("Onix", Type.ROCK, 150, 150, 26, 36, this.rThrow, this.boomburst),
            new Pokemon("Venusaur", Type.PLANT, 150, 150, 30, 26, this.vWhip, this.cut)
        ];
    }
}

module.exports = Datos;