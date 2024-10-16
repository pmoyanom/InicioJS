class saludoHorario {
    usuario = "usuario";
    constructor(usuario) {
        this.usuario = usuario;
    }

    muestraSaludo() {
        let fecha = new Date();
        // Sumar 1 al mes para que esté en el rango correcto
        let dia = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
        let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
        console.log(`Hello Welcome again: "${this.usuario}"`);
        console.log(`Login registered el: ${dia} a las ${hora}`);
    }
}

const saludar = new saludoHorario("Pedro");
saludar.muestraSaludo();