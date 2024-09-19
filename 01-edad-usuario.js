//EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
function edadUsuario(nombre,edad){
    let result = `${nombre}, `;
    result += edad >= 18 ? `eres mayor de edad.` : `${nombre}, eres menor de edad.`;
    return result;
}

//console.log(edadUsuario('Rafael', 51));
// (FIN) Ejercicio 1