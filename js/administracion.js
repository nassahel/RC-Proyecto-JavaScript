
let btnGuardar = document.getElementById('agregarGuardar');
btnGuardar.addEventListener('click', agregarProductos);
let borrarProd = document.querySelector(".borrar-producto");
let btnEditar = document.addEventListener

let productos = JSON.parse(localStorage.getItem("listaProductos")) || [];

if (productos.length === 0) {     
    mapearProductos(empanadas);
    mapearProductos(pizzas);
    mapearProductos(minutas);
    mapearProductos(sandwichs);
    mapearProductos(bebidas);
}

function mapearProductos(arrayProd) {
    arrayProd.forEach((producto) => {
        productos.push({
            categoria: producto.Categoria,
            nombre: producto.Nombre,
            precio: producto.Precio,
            descripcion: producto.Descripcion,
            id: producto.ID
        });
    });
    guardarLocal();
}

function sacarLocal() {
    let tableBody = document.getElementById('table-body');

    tableBody.innerHTML = '';

    productos.forEach((producto) => {
        let agregarFila = document.createElement('tr');
        agregarFila.id = 'new-tr';
        agregarFila.innerHTML = `
        <td>${producto.categoria}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td class="text-start">${producto.descripcion}</td>
        <td>#${producto.id}</td>
        <th>
          <button type="button" class="btn editar-producto btn-secondary btn-sm mb-1"  data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>
          <button type="button" class="btn borrar-producto btn-danger btn-sm mb-1" onclick="eliminarProducto('${producto.id}')">Borrar</button>
        </th>
        `;
        tableBody.append(agregarFila);
    });
}

sacarLocal();

function agregarProductos() {
    let txtCategoria = document.getElementById('agregarCategoria').value;
    let txtNombre = document.getElementById('agregarNombre').value;
    let txtPrecio = document.getElementById('agregarPrecio').value;
    let txtDescripcion = document.getElementById('agregarDescripcion').value;
    let txtId = document.getElementById('agregarId').value;

    productos.push({
        categoria: txtCategoria,
        nombre: txtNombre,
        precio: txtPrecio,
        descripcion: txtDescripcion,
        id: txtId
    });

    let tableBody = document.getElementById('table-body');
    let agregarFila = document.createElement('tr');
    agregarFila.id = 'new-tr';
    agregarFila.innerHTML = `
        <td>${txtCategoria}</td>
        <td>${txtNombre}</td>
        <td>$${txtPrecio}</td>
        <td>${txtDescripcion}</td>
        <td>#${txtId}</td>
        <th>
          <button type="button" class="btn editar-producto btn-secondary btn-sm mb-1" data-bs-toggle="modal" data-bs-target="#modalEditar" data-id="${txtId}">Editar</button>
          <button type="button" class="btn borrar-producto btn-danger btn-sm mb-1" onclick="eliminarProducto('${txtId}')">Borrar</button>
        </th>
        `;
    tableBody.append(agregarFila);
    guardarLocal();
}

function guardarLocal() {
    localStorage.setItem("listaProductos", JSON.stringify(productos));
}

const eliminarProducto = (id) => {
    const index = productos.findIndex((producto) => producto.id === id);
    if (index !== -1) {
        productos.splice(index, 1);
        guardarLocal();
        sacarLocal();
    }
};



const modalEditar = document.getElementById('modalEditar');
modalEditar.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const productId = button.getAttribute('data-id');
    const modalForm = document.getElementById('modalForm');
    const modalNombre = document.getElementById('modalNombre');
    const modalPrecio = document.getElementById('modalPrecio');
    const modalDescripcion = document.getElementById('modalDescripcion');
    const modalCategoria = document.getElementById('modalCategoria');

    // Obtener el producto correspondiente al ID
    const producto = productos.find((p) => p.id === productId);

    // Rellenar los campos del modal con los datos del producto
    modalNombre.value = producto.nombre;
    modalPrecio.value = producto.precio;
    modalDescripcion.value = producto.descripcion;
    modalCategoria.value = producto.categoria

    // Guardar los cambios al presionar el botón "Guardar"
    modalForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los valores actualizados del modal
        const nuevoNombre = modalNombre.value;
        const nuevoPrecio = modalPrecio.value;
        const nuevaDescripcion = modalDescripcion.value;
        const nuevaCategoria = modalCategoria.value

        // Actualizar los datos del producto en el array
        producto.nombre = nuevoNombre;
        producto.precio = nuevoPrecio;
        producto.descripcion = nuevaDescripcion;
        producto.categoria = nuevaCategoria;

        // Cerrar el modal
        const modal = bootstrap.Modal.getInstance(modalEditar);
        modal.hide();

        // Guardar los cambios en el almacenamiento local y actualizar la tabla
        guardarLocal();
        sacarLocal();
    });
});