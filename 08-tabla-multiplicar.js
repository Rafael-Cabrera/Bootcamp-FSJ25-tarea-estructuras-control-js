//EJERCICIO 8
/*
 * Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
*/
function mostrarTablaMultiplicar(numero) {
    // Verifica si el valor ingresado es un número válido
    if (isNaN(numero)) {
        return 'Por favor, introduce un número válido.'; // Sale de la función si el número no es válido
    }

    // Genera la tabla de multiplicar
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }        
    
    // Muestra el resultado en una ventana de alerta
    console.log(resultado);
}

// Llama a la función
mostrarTablaMultiplicar(3);