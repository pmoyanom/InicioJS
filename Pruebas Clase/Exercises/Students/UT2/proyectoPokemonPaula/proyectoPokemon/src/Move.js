class Move{ // Define the Move class to represent Pokemon moves
    constructor(name, baseDamage){
        this.name=name;
        this.baseDamage=baseDamage;
    }
}

const moves =[ // Create an array of predefined moves
    new Move('Ember', 40),
    new Move('Tackle', 40),
    new Move('Hardem', 15),
    new Move('Charm', 25),
    new Move('Sing', 25),
    new Move('Shadow Punch', 40),
    new Move('Lick', 25),
    new Move('Low Kick', 40),
    new Move('Karate Chop', 50),
    new Move('Scratch', 40),
    new Move('Pound', 40),
    new Move('Quick Attack', 40),
    new Move('Razor Leaf', 55),
    new Move('Water Gun', 40),
    new Move('Thundershock', 40),
    new Move('Rock Throw', 50),
    new Move('Peck', 35),
    new Move('Acid', 40),
    new Move('Psybeam', 65),
    new Move('Flamethrower', 90),
    new Move('Hydro Pump', 110),
    new Move('Psychic', 90),
    new Move('Earthquake', 100),
    new Move('Blizzard', 110),
    new Move('Water Pulse', 60),
    new Move('Confusion', 50),
    new Move('Stomp', 65),
    new Move('Flame Wheel', 60),
    new Move('Swift', 60),
    new Move('Bite', 60)
];
// Export the Move class and the moves array for use in other files
module.exports={Move, moves};