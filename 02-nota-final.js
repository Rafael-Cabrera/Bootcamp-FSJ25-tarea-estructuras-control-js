/* EJERCICIO 2: 
 * Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
 * parametro {Object} alumno -> Un objeto que contiene los datos del alumno y sus calificaciones.
 * parametro {string} alumno.nombre -> El Nombre.
 * parametro {string} alumno.carnet -> El No. carnet.
 * parametro {Object} alumno.calificaciones -> Un objeto que contiene las calificaciones y sus porcentajes.
 * devuelve {Object} - Un objeto con el nombre, carnet y nota final del alumno.
 */
function calcNotaFila(alumno) {
    const { nombre, carnet, calificaciones } = alumno;

    let sumaGlobal = 0;
    let sumaPorcent = 0;

    for (const { calificacion, porcent } of Object.values(calificaciones)) {
        sumaGlobal += calificacion * porcent;
        sumaPorcent += porcent;
    }

    // Evita la división por cero en caso de que no se proporcionen porcentajes
    if (sumaPorcent === 0) {
        throw new Error("La suma de los porcentajes no puede ser cero.");
    }

    const notaFinal = sumaGlobal / sumaPorcent;

    return {
        nombre,
        carnet,
        notaFinal
    };
}

// Se crea el objeto alumno:
const alumno = {
    nombre: "Rafael Antonio Cabrera",
    carnet: "K123456",
    calificaciones: {
        examen: { calificacion: 8.5, porcent: 0.2 },
        tareas: { calificacion: 7, porcent: 0.4 },
        asistencia: { calificacion: 10, porcent: 0.1 },
        investigacion: { calificacion: 7, porcent: 0.3}
    }
};

//Se invoca la función pasando el objeto alumno como parametro
const resultado = calcNotaFila(alumno);
console.log("Datos del alumno:", resultado); //Resultado devuelto por la función.
// (FIN) Ejercicio 2