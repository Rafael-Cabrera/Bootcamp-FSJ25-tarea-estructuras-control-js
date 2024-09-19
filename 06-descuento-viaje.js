/*
 * EJERCICIO 6
 * Crear una Función para calcular el descuento en viajes turísticos tomando
 * en cuenta lo siguiente:
 * Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
 * descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
 * es Puerto el Triunfo el descuento será del 15%.
*/

function calcularDescuentoViaje(lugarOrigen, lugarDestino) {
    // Convertir los parámetros a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
    lugarOrigen = lugarOrigen.toLowerCase();
    lugarDestino = lugarDestino.toLowerCase();

    // Inicializar el porcentaje de descuento
    let descuento = 0;

    // Comprobar si el origen es "Palma"
    if (lugarOrigen === 'palma') {
        // Aplicar descuentos basados en el destino
        if (lugarDestino === 'la costa del sol') {
            descuento = 5;
        } else if (lugarDestino === 'panchimalco') {
            descuento = 10;
        } else if (lugarDestino === 'puerto el triunfo') {
            descuento = 15;
        }
    }

    return descuento;
}

// Ejemplo de uso
const origen = 'Palma';
const destino = 'Panchimalco';
const descuento = calcularDescuentoViaje(origen, destino);

console.log(`El descuento aplicable es del ${descuento}%`);