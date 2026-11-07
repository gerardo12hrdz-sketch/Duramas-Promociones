// 1. Cotizar desde formulario principal con selección de asesor
document.getElementById('form-cotizacion').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const poblacion = document.getElementById('poblacion').value;
    const asesor = document.getElementById('atendido-por').value;
    const producto = document.getElementById('producto-select').value;
    const mensaje = document.getElementById('mensaje').value || "Sin detalles adicionales";

    // Determinar número de destino según el asesor elegido
    let numeroDestino = "524432722109"; // Sra. Alicia por defecto
    let nombreAsesor = "Sra. Alicia";

    if (asesor === "Carlos") {
        numeroDestino = "524431980853";
        nombreAsesor = "Sr. Carlos";
    }

    const textoWhatsApp = `Hola ${nombreAsesor}, mi nombre o empresa es *${nombre}*.%0A%0A` +
                            `📍 *Población/Destino:* ${poblacion}%0A` +
                            `📌 *Producto de interés:* ${producto}%0A` +
                            `📝 *Detalles del pedido:* ${mensaje}%0A%0A` +
                            `📞 *Mi teléfono de contacto:* ${telefono}`;

    window.open(`https://wa.me/${numeroDestino}?text=${textoWhatsApp}`, '_blank');
});

// 2. Cotización rápida por producto en catálogo (Sra. Alicia por defecto)
const botonesCotizarItems = document.querySelectorAll('.btn-cotizar-item');
botonesCotizarItems.forEach(boton => {
    boton.addEventListener('click', function() {
        const productoNombre = this.getAttribute('data-producto');
        const textoWhatsApp = `Hola, solicito información y cotización directa del producto: *${productoNombre}*.`;
        window.open(`https://wa.me/524432722109?text=${textoWhatsApp}`, '_blank');
    });
});