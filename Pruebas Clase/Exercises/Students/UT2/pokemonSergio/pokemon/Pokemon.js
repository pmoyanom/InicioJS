// Pokemon.js
const Type = require('./Type');

class Pokemon {
  constructor(nombre, tipo, hpMax, ataque, defensa, movimientos) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.hpMax = hpMax;
    this.hpActual = hpMax;
    this.ataque = ataque;
    this.defensa = defensa;
    this.movimientos = movimientos; 
    this.puedeCurarse = true; 
  }

  attack(move, enemigo) {
    const probabilidadFallo = Math.random();
    if (probabilidadFallo < 0.2) { // 30% chance to fail
        console.log(`${this.nombre} tried to use ${move.nombre} but missed!`);
        return; // End the turn if it fails
    }

    const randomFactor = Math.random() * (1 - 0.85) + 0.85;
    const damage = Math.max(1, Math.round(((this.ataque / enemigo.defensa) * move.dañoBase) * randomFactor));
    enemigo.hpActual = Math.max(0, enemigo.hpActual - damage);

    console.log(`\n💥 ${this.nombre} used ${move.nombre}!`);
    console.log(`➡️  ${enemigo.nombre} received ${damage} damage.`);
    console.log(`💔 Remaining HP of ${enemigo.nombre}: ${enemigo.hpActual} HP\n`);
  }

  heal() {
    if (this.puedeCurarse) {
      this.hpActual = Math.min(this.hpMax, this.hpActual + this.hpMax * 0.5);
      this.puedeCurarse = false;
      console.log(`✨ ${this.nombre} healed. Current HP: ${this.hpActual}`);
    } else {
      console.log(`❌ ${this.nombre} has already healed before and cannot heal again.`);
    }
  }
}

module.exports = Pokemon;
