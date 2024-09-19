/*
 * EJERCICIO 4
 * Crear una función que en base a 2 números enteros que ingrese el usuario, 
 * calcular cual número es el mayor y devolverlo.
 * parametro {number} num1 - El primer número entero.
 * parametro {number} num2 - El segundo número entero.
 * Devuelve {number} - El número mayor entre los dos.
*/
function numeroMayor(num1, num2) {
    // Valida que las entradas sean números enteros válidos
    if (isNaN(num1) || isNaN(num2)) {
        return 'Por favor, ingrese números enteros válidos.';
    }
    // Buscar el número mayor.
    let numeroMayor = num1 > num2 ? num1 : num2;

    return 'El número mayor es:' + numeroMayor;

}

//Invocar la función enviando dos número como argumentos.
console.log(numeroMayor(5,4))
// (FIN) Ejercicio 4.