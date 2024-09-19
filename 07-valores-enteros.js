let valores = [];
let cantidadValores = 0;

function agregarValor() {
    const input = document.getElementById("valor");
    const numero = parseInt(input.value);
    const contador = document.getElementById('contador');


    if (!isNaN(numero)) {
        valores.push(numero);
        input.value = ''; // Limpiar el input
        // Incrementar contador
        cantidadValores++;
        contador.textContent = `Valores ingresados: ${cantidadValores}`;

        if (valores.length >= 10) {
            alert("Se han ingresado 10 valores.");
            input.disabled = true; // Deshabilitar el input
        }
    } else {
        alert("Por favor, ingresa un número entero válido.");
    }
}

function calcularResultados() {
    if (valores.length < 10) {
        alert("Debes ingresar 10 valores antes de calcular.");
        return;
    }

    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let valor of valores) {
        if (valor < 0) negativos++;
        if (valor > 0) positivos++;
        if (valor % 15 === 0) multiplosDe15++;
        if (valor % 2 === 0) sumaPares += valor;
    }

    const resultado = `
        Cantidad de valores negativos: ${negativos}<br>
        Cantidad de valores positivos: ${positivos}<br>
        Cantidad de múltiplos de 15: ${multiplosDe15}<br>
        Suma de números pares: ${sumaPares}
    `;

    document.getElementById("resultado").innerHTML = resultado;
}
