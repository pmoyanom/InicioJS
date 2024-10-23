//Ejemplo básico crear una cookie
// Crear una cookie llamada "usuario" con valor "Pedro" que expira en 7 días

let fechaExpiracion = new Date();
fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000));  // 7 días
let expiracion = "expires=" + fechaExpiracion.toUTCString();
document.cookie = "usuario=Pedro; " + expiracion + "; path=/";


//Almacenamiento de cookies
// Crear una cookie con valor y fecha de expiración en 1 hora

let ahora = new Date();
ahora.setTime(ahora.getTime() + (1 * 60 * 60 * 1000));  // 1 hora
let expiracionHora = "expires=" + ahora.toUTCString();
document.cookie = "preferencia=oscuro; " + expiracionHora + "; path=/";


//Recuperación de una cookie específica
// Función para obtener una cookie por su nombre

function obtenerCookie(nombre) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        // Comprobar si la cookie empieza con el nombre buscado
        if (cookie.indexOf(nombre + '=') === 0) {
            return cookie.substring((nombre + '=').length, cookie.length);
        }
    }
    return null;  // Devolver null si no se encuentra la cookie
}

// Usar la función para obtener el valor de la cookie 'usuario'
let usuario = obtenerCookie('usuario');
console.log('Usuario:', usuario);


//Eliminar una cookie
// Eliminar una cookie estableciendo su fecha de expiración en el pasado

//document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

