let vendedoresSeleccionados = [];

// Al hacer clic en "Agregar Vendedores", selecciona los vendedores y actualiza la cantidad
document.getElementById('addVendedores').addEventListener('click', function () {
    const vendedores = document.querySelectorAll('#listaVendedores .list-group-item.active');

    vendedores.forEach(vendedor => {
        vendedoresSeleccionados.push(vendedor.textContent);
        // Actualiza la lista de vendedores seleccionados en el modal
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = vendedor.textContent;
        document.getElementById('vendedoresSeleccionados').appendChild(li);
        // Elimina al vendedor de la lista disponible
        vendedor.remove();
    });

    // Actualiza la cantidad de vendedores seleccionados en el botón
    document.getElementById('cantidadSeleccionados').textContent = vendedoresSeleccionados.length;
});

// Función para marcar y desmarcar vendedores
document.querySelectorAll('#listaVendedores .list-group-item').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

// Al hacer clic en "Guardar Evento", guarda los datos de los asesores y vendedores
document.getElementById('guardarEvento').addEventListener('click', function () {
    const asesor = document.getElementById('asesor').value;
    const horaInicio = document.getElementById('horaInicio').value;
    const horaFin = document.getElementById('horaFin').value;
    const evento = document.getElementById('evento').value;
    const tipoEvento = document.getElementById('tipoEvento').value;

    // Envía los datos de los vendedores seleccionados y el asesor
    const eventoData = {
        asesor: asesor,
        vendedores: vendedoresSeleccionados,
        horaInicio: horaInicio,
        horaFin: horaFin,
        evento: evento,
        tipoEvento: tipoEvento
    };

    console.log('Datos del evento:', eventoData);

    // Agregar los datos del evento a la tabla
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${asesor}</td>
        <td>${horaInicio}</td>
        <td>${horaFin}</td>
        <td>${evento}</td>
        <td>${tipoEvento}</td>
        <td>No leído</td>
    `;
    document.getElementById('tablaEventos').appendChild(nuevaFila);

    // Aquí podrías hacer una petición AJAX o Fetch para enviar los datos al backend
});
