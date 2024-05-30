
    // Función para calcular los días transcurridos
    function calcularDiasTranscurridos(fechaInicio) {
        const fechaActual = new Date(); // Fecha actual
        const tiempoTranscurrido = fechaActual - fechaInicio; // Diferencia en milisegundos
        const diasTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24)); // Convertir a días
        return diasTranscurridos;
    }

    // Fecha de inicio (2 de noviembre)
    const fechaInicio = new Date('2023-11-02T00:00:00');

    // Calcular los días transcurridos
    const diasTranscurridos = calcularDiasTranscurridos(fechaInicio);

    // Mostrar el resultado en el elemento con id "dayCount"
    document.getElementById('dayCount').textContent = diasTranscurridos;


    // Función para cambiar la imagen según la hora
    function cambiarImagenSegunHora() {
        const fechaActual = new Date(); // Obtener la fecha y hora actual
        const horas = fechaActual.getHours(); // Obtener la hora actual
        const imagen = document.getElementById('timeImage'); // Obtener el elemento de la imagen

        // Cambiar la imagen según la hora
        if (horas >= 6 && horas < 18) {
            // De 6 AM a 6 PM (amaneciendo)
            imagen.src = './imagenesPag/Dia.jpg';
            imagen.alt = 'Amaneciendo';
        } else {
            // De 6 PM a 6 AM (anocheciendo)
            imagen.src = './imagenesPag/Noche.jpg';
            imagen.alt = 'Anocheciendo';
        }
    }

    // Llamar a la función para cambiar la imagen al cargar la página
    cambiarImagenSegunHora();

    // Opcional: actualizar la imagen cada hora
    setInterval(cambiarImagenSegunHora, 3600000); // 3600000 ms = 1 hora