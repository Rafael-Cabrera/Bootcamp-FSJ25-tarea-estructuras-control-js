// EJERCICIO 9
/*
 * Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver + lo siguiente:
 * Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
 * Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
 * Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
 * Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/
function celsiusToFahrenheit(celsius) {
    // Verifica si el valor ingresado es un número válido
    if (isNaN(celsius)) {
        return 'Por favor, introduce un número válido.'; // Sale de la función si el número no es válido
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let resultado = '';
    // Mostrar nivel de temperaturas
        if(fahrenheit > 13 && fahrenheit <= 32){
            resultado = 'Temperatura baja';
        } else if(fahrenheit > 32 && fahrenheit <= 68){
            resultado = 'Temperatura adecuada';
        } else if(fahrenheit > 68 && fahrenheit <= 6){
            resultado = 'Temperatura alta';
        } else {
            resultado = 'Temperatura desconocida';
        }
    return resultado;
}

console.log(celsiusToFahrenheit(5));