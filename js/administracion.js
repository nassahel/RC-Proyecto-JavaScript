
// let btnGuardar = document.getElementById('agregarGuardar');
// btnGuardar.addEventListener('click', agregarUnaFila);



// function agregarUnaFila() {
//     let txtCategoria = document.getElementById('agregarCategoria').value;
//     let txtNombre = document.getElementById('agregarNombre').value;
//     let txtPrecio = document.getElementById('agregarPrecio').value;
//     let txtDescripcion = document.getElementById('agregarDescripcion').value;
//     let txtId = document.getElementById('agregarId').value;
//     let tableBody = document.getElementById('table-body');


//     let agregarFila = document.createElement('tr')
//     agregarFila.id = 'new-tr';
//     agregarFila.innerHTML = `
//     <td><input type="checkbox" name="" id="check-d"></td>
//     <td>${txtCategoria}</td>
//     <td>${txtNombre}</td>
//     <td>$${txtPrecio}</td>
//     <td>${txtDescripcion}</td>
//     <td>#${txtId}</td>
//     `
//     tableBody.append(agregarFila);
// }


let btnGuardar = document.getElementById('agregarGuardar');
btnGuardar.addEventListener('click', agregarProductos);

let productos = [];

function agregarProductos() {

    let txtCategoria = document.getElementById('agregarCategoria').value;
    let txtNombre = document.getElementById('agregarNombre').value;
    let txtPrecio = document.getElementById('agregarPrecio').value;
    let txtDescripcion = document.getElementById('agregarDescripcion').value;
    let txtId = document.getElementById('agregarId').value;

    productos.push({
        nombre: txtNombre,
        precio: txtPrecio,
        descripcion: txtDescripcion,
        id: txtId,
        check: false

    })


    productos.forEach(producto => {
        let tableBody = document.getElementById('table-body');

        let agregarFila = document.createElement('tr')
        agregarFila.id = 'new-tr';
        agregarFila.innerHTML = `
        <td><input type="checkbox" name="" id="check-d""></td>
        
        <td>${txtCategoria}</td>
        <td>${txtNombre}</td>
        <td>$${txtPrecio}</td>
        <td>${txtDescripcion}</td>
        <td>#${txtId}</td>
        `
        tableBody.append(agregarFila);
    });
}




function borrarproducto () {
productos.filter(function(product) {
    let checkB = document.getElementById("check-d").checked;
    product.check.checked;

})    
}

