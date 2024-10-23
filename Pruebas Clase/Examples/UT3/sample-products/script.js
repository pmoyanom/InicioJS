const productos = [
    {
        nombre: "iPhone 14",
        precio: "999€",
        descripcion: "El último modelo de iPhone con una pantalla OLED de 6.1 pulgadas y un potente chip A15 Bionic."
    },
    {
        nombre: "Samsung Galaxy S23",
        precio: "899€",
        descripcion: "Teléfono insignia de Samsung con cámara de alta resolución y pantalla Dynamic AMOLED de 6.2 pulgadas."
    },
    {
        nombre: "Sony WH-1000XM5",
        precio: "399€",
        descripcion: "Auriculares inalámbricos con cancelación de ruido de última generación y hasta 30 horas de duración de batería."
    },
    {
        nombre: "MacBook Air M2",
        precio: "1,299€",
        descripcion: "Portátil ultraligero de Apple con el nuevo chip M2, 256GB de almacenamiento SSD y pantalla Retina de 13 pulgadas."
    },
    {
        nombre: "PlayStation 5",
        precio: "499€",
        descripcion: "Consola de última generación de Sony con capacidad de juego en 4K y un innovador mando DualSense."
    },
    {
        nombre: "Nintendo Switch OLED",
        precio: "349€",
        descripcion: "Consola híbrida de Nintendo con pantalla OLED de 7 pulgadas, ideal para jugar tanto en casa como fuera de ella."
    },
    {
        nombre: "Xiaomi Mi Electric Scooter",
        precio: "499€",
        descripcion: "Patinete eléctrico con una autonomía de hasta 30 km, ideal para desplazamientos urbanos rápidos y eficientes."
    },
    {
        nombre: "Amazon Echo Dot (4th Gen)",
        precio: "59€",
        descripcion: "Altavoz inteligente compacto con Alexa integrada para controlar dispositivos inteligentes y escuchar música."
    },
    {
        nombre: "Dell XPS 13",
        precio: "1,199€",
        descripcion: "Portátil ultradelgado de 13 pulgadas con pantalla InfinityEdge y procesador Intel de 11ª generación."
    },
    {
        nombre: "GoPro HERO11 Black",
        precio: "499€",
        descripcion: "Cámara de acción con grabación de video 5K, estabilización avanzada y resistente al agua."
    },
    {
        nombre: "Apple Watch Series 8",
        precio: "449€",
        descripcion: "Reloj inteligente con pantalla siempre activa, seguimiento de salud avanzado y medición de oxígeno en sangre."
    },
    {
        nombre: "Fitbit Charge 5",
        precio: "179€",
        descripcion: "Monitor de actividad física con seguimiento de salud, GPS integrado y medición de frecuencia cardíaca."
    },
    {
        nombre: "DJI Mini 3 Pro",
        precio: "749€",
        descripcion: "Drone compacto con cámara 4K, modos de vuelo inteligentes y hasta 34 minutos de autonomía."
    },
    {
        nombre: "Canon EOS R6",
        precio: "2,499€",
        descripcion: "Cámara sin espejo de fotograma completo con enfoque automático Dual Pixel y grabación de video en 4K."
    },
    {
        nombre: "Bose SoundLink Revolve+",
        precio: "299€",
        descripcion: "Altavoz Bluetooth portátil con sonido envolvente de 360 grados y resistente al agua."
    },
    {
        nombre: "Razer BlackWidow V3",
        precio: "149€",
        descripcion: "Teclado mecánico para gaming con retroiluminación RGB y switches mecánicos Green para una mayor precisión."
    },
    {
        nombre: "Logitech MX Master 3",
        precio: "99€",
        descripcion: "Ratón inalámbrico ergonómico con rueda de desplazamiento MagSpeed y botones personalizables."
    },
    {
        nombre: "Kindle Paperwhite",
        precio: "139€",
        descripcion: "E-reader con pantalla de 6.8 pulgadas, luz ajustable y batería de larga duración para leer cómodamente."
    },
    {
        nombre: "Samsung 32\" Smart Monitor M7",
        precio: "399€",
        descripcion: "Monitor 4K con funcionalidades inteligentes y aplicaciones integradas para trabajar y disfrutar de entretenimiento sin PC."
    },
    {
        nombre: "LG OLED55C1",
        precio: "1,299€",
        descripcion: "Televisor OLED de 55 pulgadas con colores vibrantes, negro perfecto y soporte para Dolby Vision y Atmos."
    }
];


const container = document.getElementById("productos-container");

productos.forEach(producto => {
    // Crear un contenedor para cada producto
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    // Crear un título para el nombre del producto
    const nombreElemento = document.createElement("h2");
    nombreElemento.textContent = producto.nombre;

    // Crear un párrafo para el precio
    const precioElemento = document.createElement("p");
    precioElemento.classList.add("precio");
    precioElemento.textContent = `Precio: ${producto.precio}`;

    // Crear un párrafo para la descripción
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = producto.descripcion;

    const srcUrl = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
    const imagen = document.createElement("img");
    imagen.src = srcUrl;
    // Crear un contenedor para la imagen

    // Agregar los elementos creados al contenedor del producto
    productoDiv.appendChild(imagen);
    productoDiv.appendChild(nombreElemento);
    productoDiv.appendChild(precioElemento);
    productoDiv.appendChild(descripcionElemento);

    // Agregar el contenedor del producto al contenedor principal
    container.appendChild(productoDiv);
});