function calculateDiscount() {
    // Obtener el valor seleccionado del menú desplegable
    var car = document.getElementById("carSelect").value;
    var discount = 0;
    const images = {
        fordfiesta: 'https://upload.wikimedia.org/wikipedia/commons/6/60/2019_Ford_Fiesta_Active_X_Turbo_1.0_Front.jpg',
        fordfocus: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIEUVwxB2t0v99MZAmObKQzf1SeMQJATLDA&s',
        fordescape: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpsWiY6jsqrZpo1n2ipHPDpMhHH1aqtYkOw&s'
        // Añadir más marcas e imágenes según sea necesario
    };
    // Determinar el descuento basado en el coche seleccionado
    switch (car) {
        case "fordfiesta":
            discount = 5;
            break;
        case "fordfocus":
            discount = 10;
            break;
        case "fordescape":
            discount = 20;
            break;
        default:
            discount = 0;
    }

    // Mostrar el coche seleccionado y el descuento aplicado
    var resultDiv = document.getElementById("result");
    const brandImage = document.getElementById('brand-image');
    if (discount > 0) {
        resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<section id="div1">
            <p>Coche seleccionado: ${car}</p>
            <p>Descuento aplicado: ${discount}%</p>
            </section>
            <section id="car-brand-image">
                <img id="brand-image" src='${images[car]}'/>
            </section>`;
    } else {
        resultDiv.innerHTML = "Por favor, selecciona un coche.";
    }
}