//Ejemplo básico crear una cookie
// Crear una cookie llamada "usuario" con valor "Juan" que expira en 7 días

let fechaExpiracion = new Date();
fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000));  // 7 días
let expiracion = "expires=" + fechaExpiracion.toUTCString();
document.cookie = "usuario=Juan; " + expiracion + "; path=/";


//Almacenamiento de cookies
// Crear una cookie con valor y fecha de expiración en 1 hora

let ahora = new Date();
ahora.setTime(ahora.getTime() + (1 * 60 * 60 * 1000));  // 1 hora
let expiracionHora = "expires=" + ahora.toUTCString();
document.cookie = "preferencia=oscuro; " + expiracionHora + "; path=/";


//Recuperación de una cookie específica
// Función para obtener una cookie por su nombre

// Función para obtener el valor de una cookie por su nombre
// El parámetro 'nombre' es el nombre de la cookie que se desea obtener.
function obtenerCookie(nombre) {
    
    // Obtenemos todas las cookies almacenadas en el navegador como un único string,
    // donde cada cookie está separada por un ';'.
    let cookies = document.cookie.split(';');
    
    // Iteramos sobre todas las cookies que hemos dividido en el array `cookies`.
    for (let i = 0; i < cookies.length; i++) {
        // Borramos los espacios en blanco al inicio y final de la cookie actual.
        let cookie = cookies[i].trim();
        
        // Comprobamos si la cookie actual empieza con el nombre buscado seguido de un '='.
        // `indexOf(nombre + '=') === 0` significa que el nombre de la cookie aparece al inicio de la cadena.
        if (cookie.indexOf(nombre + '=') === 0) {
            // Si encontramos la cookie, usamos `substring` para extraer y devolver el valor de la cookie.
            // El valor está después del '=' que sigue al nombre de la cookie.
            return cookie.substring((nombre + '=').length, cookie.length);
        }
    }
    
    // Si no encontramos ninguna cookie con el nombre dado, devolvemos `null`.
    return null;
}

// Usar la función para obtener el valor de la cookie 'usuario'
let usuario = obtenerCookie('usuario');
console.log('Usuario:', usuario);


//Eliminar una cookie
// Eliminar una cookie estableciendo su fecha de expiración en el pasado

//document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

//document.cookie = "usuario=; max-age=0; path=/";