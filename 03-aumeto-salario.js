/**
 * EJERCICIO 3:
 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
 * Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría 
 * y aumento. Deberá demostrar los datos del empleado y el aumento salarial.
 * **********************************************************************************
 * parametro {Object} empleado - Un objeto que contiene los datos del empleado.
 * parametro {string} empleado.nombre - El nombre.
 * parametro {number} empleado.salario - El salario actual.
 * parametro {string} empleado.categoria - La categoría.
 * Devuelve {Object} - Un objeto con los datos del empleado y el aumento de salario.
 */
 
// Tabla de categorías de aumento
const tablaAumentos = {
    'A': 0.15, // 15% de aumento
    'B': 0.30, // 30% de aumento
    'C': 0.10, // 1% de aumento
    'D': 0.20 // 20% de aumento
};

function calcAumentoSalario(empleado) {
    const { nombre, salario, categoria } = empleado;
    const porcentAumento = tablaAumentos[categoria];

    if (porcentAumento === undefined) {
        throw new Error("Categoría no válida.");
    }

    const aumento = salario * porcentAumento;
    const salarioNuevo = salario + aumento;

    return {
        nombre,
        salarioActual: salario,
        categoria,
        aumento,
        salarioNuevo
    };
}

// Ejemplo de uso
const empleado = {
    nombre: "Rafa",
    salario: 628,
    categoria: "C"
};

try {
    const resultado = calcAumentoSalario(empleado);
    console.log("Datos del empleado y aumento salarial:", resultado);
} catch (error) {
    console.error(error.message);
}
// (FIN) Ejercicio 3