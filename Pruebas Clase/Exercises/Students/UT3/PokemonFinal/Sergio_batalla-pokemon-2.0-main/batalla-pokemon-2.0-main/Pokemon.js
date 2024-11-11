export class Pokemon {
    constructor(nombre, tipo, hpMax, ataque, defensa, movimientos, img) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hpMax = hpMax;
        this.hpActual = hpMax;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos;
        this.img = img;
        this.puedeCurarse = true;
    }

    // Función para agregar mensajes al área de texto en el HTML
    agregarMensaje(mensaje) {
        const mensajesDiv = document.getElementById('mensajes-combate');
        const nuevoMensaje = document.createElement('p');
        nuevoMensaje.textContent = mensaje;
        mensajesDiv.appendChild(nuevoMensaje);

        // Hacer que el scroll siempre esté al final para ver el mensaje más reciente
        mensajesDiv.scrollTop = mensajesDiv.scrollHeight;
    }

    attack(move, enemigo) {
        const probabilidadFallo = Math.random();
        if (probabilidadFallo < 0.2) {
            this.agregarMensaje(`${this.nombre} intentó usar ${move.nombre} pero falló!`);
            return;
        }

        const randomFactor = Math.random() * (1 - 0.85) + 0.85;
        const damage = Math.max(1, Math.round(((this.ataque / enemigo.defensa) * move.dañoBase) * randomFactor));
        enemigo.hpActual = Math.max(0, enemigo.hpActual - damage);

        this.agregarMensaje(`💥 ${this.nombre} usó ${move.nombre}!`);
        this.agregarMensaje(`➡️ ${enemigo.nombre} recibió ${damage} puntos de daño.`);
        this.agregarMensaje(`💔 HP restante de ${enemigo.nombre}: ${enemigo.hpActual} HP`);
    }

    heal() {
        if (this.puedeCurarse) {
            const cantidadCurada = this.hpMax * 0.5;
            this.hpActual = Math.min(this.hpMax, this.hpActual + cantidadCurada);
            this.puedeCurarse = false;
            this.agregarMensaje(`✨ ${this.nombre} se curó! HP actual: ${this.hpActual}`);
        } else {
            this.agregarMensaje(`❌ ${this.nombre} no puede curarse nuevamente.`);
        }
    }

    
}
