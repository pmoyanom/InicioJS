
class Pokemon {
    constructor(name, type, hpMax, attackStat, defense, moves) {
        this.name = name;
        this.type = type;
        this.hp = hpMax;
        this.hpMax = hpMax;
        this.attackStat = attackStat;
        this.defense = defense;
        this.moves = moves;
        this.healUsed = false;
    }

    attack(opponent, move) {
        const randomFactor = Math.random() * (1.0 - 0.85) + 0.85;
        const damage = Math.max(
            1,
            Math.floor((this.attackStat / opponent.defense) * move.damage * randomFactor)
        );
        opponent.hp = Math.max(0, opponent.hp - damage);
        console.log(
            `${this.name} usa ${move.name} y hace ${damage} de daño a ${opponent.name}!`
        );
    }

    heal() {
        if (!this.healUsed) {
            const healAmount = Math.floor(this.hpMax * 0.5);
            this.hp = Math.min(this.hpMax, this.hp + healAmount);
            this.healUsed = true;
            console.log(`${this.name} se ha curado y ha recuperado ${healAmount} HP!`);
        } else {
            console.log(`${this.name} ya se ha curado y no puede hacerlo de nuevo!`);
        }
    }
}

module.exports = Pokemon;