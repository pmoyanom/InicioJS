const Types = { // Define an object containing all Pokemon types
        
    NORMAL: 'NORMAL',
    FIRE: 'FIRE',
    WATER: 'WATER',
    GRASS: 'GRASS',
    ELECTRIC: 'ELECTRIC',
    FAIRY: 'FAIRY',
    FIGHTING: 'FIGHTING',
    POISON: 'POISON',
    GROUND: 'GROUND',
    FLYING: 'FLYING',
    PSYCHIC: 'PSYCHIC',
    BUG: 'BUG',
    ROCK: 'ROCK',
    GHOST: 'GHOST',
    DRAGON: 'DRAGON'
}
// Define an object that holds type advantages and disadvantages
// Each type has multipliers for effectiveness against other types
// 2.0 means super effective, 0.5 means not very effective
const typesAdvantages={
    NORMAL:{
        FIGHTING:0.5,
        ROCK:0.5
    },
    FIRE:{
        GROUND:0.5,
        WATER:0.5,
        ROCK:0.5,
        GRASS:2.0,
        BUG:2.0
    },
    WATER:{
        GRASS:0.5,
        ELECTRIC:0.5,
        FIRE:2.0,
        ROCK:2.0,
        GROUND:2.0

    },
    GRASS:{
        BUG:0.5,
        POISON:0.5,
        FIRE:0.5,
        WATER:2.0,
        ROCK:2.0,
        GROUND:2.0,
        FLYING:0.5
    },
    ELECTRIC:{
        GROUND:0.5,
        WATER:2.0,
        FLYING:2.0
    },
    FAIRY: {
        POISON:0.5,
        DRAGON:2.0,
        FIGHTING:2.0
    },
    FIGHTING:{ 
        PSYCHIC:0.5,
        FLIYING:0.5,
        FAIRY:0.5,
        NORMAL:2.0,
        ROCK:2.0
    },
    POISON:{
        GROUND:0.5,
        PSYCHIC:0.5,
        FAIRY:2.0,
        GRASS:2.0
    },
    GROUND:{
        WATER:0.5,
        GRASS:0.5,
        FIRE:2.0,
        ELECTRIC:2.0,
        ROCK:2.0,
        POISON:2.0
    },
    FLYING:{
        ELECTRIC:0.5,
        ROCK:0.5,
        GRASS:2.0,
        BUG:2.0,
        FIGHTING:2.0
    },
    PSYCHIC:{
        BUG:0.5,
        GHOST:0.5,
        FIGHTING:2.0,
        POISON:2.0
    },
    BUG:{
        FLIYING:0.5,
        FIRE:0.5,
        ROCK:0.5,
        PSYCHIC:2.0,
        GRASS:2.0
    },
    ROCK:{
        FIGHTING:0.5,
        GROUND:0.5,
        WATER:0.5,
        GRASS:0.5,
        FIRE:2.0,
        BUG:2.0,
        FLIYING:2.0
    },
    GHOST:{ 
        PSYCHIC:2.0
    },
    DRAGON:{ 
        FAIRY:0.5
    }

}

// Export the Types and typesAdvantages objects for use in other modules
module.exports={Types, typesAdvantages};