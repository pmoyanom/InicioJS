class Pokemon {
    constructor(nombre, tipo, hpActual, hpMaximo, ataque, defensa, ataque1, ataque2) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hpActual = hpActual;
        this.hpMaximo = hpMaximo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.ataque1 = ataque1;
        this.ataque2 = ataque2;
        this.curado = false;
    }
    
}
module.exports = Pokemon;