//declaración de clases

class Papel {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    doblar() {
        console.log("Doblado");
    }
}

let Papel_A = class extends Papel {
    constructor(ancho, alto) {
        super(ancho, alto);
        this.tipo=tipo;
    }
    doblar() {
        console.log("Doblado");
    }
}
const miPapel = new Papel(10, 20);
console.log(miPapel.ancho);
miPapel.doblar();