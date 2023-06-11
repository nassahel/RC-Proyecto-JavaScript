
let btnGuardar = document.getElementById('agregarGuardar');
btnGuardar.addEventListener('click', agregarUnaFila);

function agregarUnaFila() {
    let txtCategoria = document.getElementById('agregarCategoria').value;
    let txtNombre = document.getElementById('agregarNombre').value;
    let txtPrecio = document.getElementById('agregarPrecio').value;
    let txtDescripcion = document.getElementById('agregarDescripcion').value;
    let tableBody = document.getElementById('table-body');


    let agregarFila = document.createElement('tr')
    agregarFila.id = 'new-tr';
    agregarFila.innerHTML = `
    <td><input type="checkbox" name="" id="check-d"></td>
    <td>${txtCategoria}</td>
    <td>${txtNombre}</td>
    <td>$${txtPrecio}</td>
    <td>${txtDescripcion}</td>
    `
    tableBody.append(agregarFila);
}

