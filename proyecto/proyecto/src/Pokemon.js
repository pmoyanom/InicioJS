
class Pokemon {
    // El constructor define las propiedades que cada objeto 'Pokemon' tendrá al ser creado.
    constructor(name, type, hpMax, attackStat, defense, moves) {
        this.name = name;                 // Nombre del Pokémon.
        this.type = type;                 // Tipo de Pokémon (e.g., Fuego, Agua).
        this.hp = hpMax;                  // HP actual del Pokémon (se inicializa al máximo).
        this.hpMax = hpMax;               // HP máximo del Pokémon.
        this.attackStat = attackStat;     // Estadística de ataque del Pokémon.
        this.defense = defense;           // Estadística de defensa del Pokémon.
        this.moves = moves;               // Lista de movimientos que el Pokémon puede usar.
        this.healUsed = false;            // Bandera que indica si el Pokémon ya se ha curado.
    }

    // Método para atacar a un oponente usando uno de los movimientos del Pokémon.
    attack(opponent, move) {
        // Se genera un factor aleatorio entre 0.85 y 1.0 para variar el daño.
        const randomFactor = Math.random() * (1.0 - 0.85) + 0.85;

        // Se calcula el daño causado al oponente usando la fórmula:
        // Daño = (Ataque del atacante / Defensa del oponente) * Daño del movimiento * Factor aleatorio
        // El daño mínimo será 1.
        const damage = Math.max(
            1,
            Math.floor((this.attackStat / opponent.defense) * move.damage * randomFactor)
        );

        // Se resta el daño del HP del oponente, asegurándose de que no baje de 0.
        opponent.hp = Math.max(0, opponent.hp - damage);

        // Mensaje en consola informando el nombre del Pokémon, el movimiento usado y el daño infligido.
        console.log(
            `${this.name} usa ${move.name} y hace ${damage} de daño a ${opponent.name}!`
        );
    }

    // Método para que el Pokémon se cure.
    heal() {
        // Comprueba si el Pokémon ya se ha curado antes (solo puede curarse una vez).
        if (!this.healUsed) {
            // Calcula la cantidad de HP a curar, que es el 50% del HP máximo.
            const healAmount = Math.floor(this.hpMax * 0.5);

            // Restaura el HP del Pokémon, pero no puede superar el HP máximo.
            this.hp = Math.min(this.hpMax, this.hp + healAmount);

            // Marca que el Pokémon ya se ha curado.
            this.healUsed = true;

            // Mensaje en consola informando la cantidad de HP recuperado.
            console.log(`${this.name} se ha curado y ha recuperado ${healAmount} HP!`);
        } else {
            // Si el Pokémon ya se ha curado antes, muestra un mensaje en consola.
            console.log(`${this.name} ya se ha curado y no puede hacerlo de nuevo!`);
        }
    }
}

// Exporta la clase 'Pokemon' para que pueda ser utilizada en otros archivos.
module.exports = Pokemon;