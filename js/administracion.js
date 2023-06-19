
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
let borrarProd = document.querySelector(".borrar-producto");

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
        id: txtId

    })


    productos.forEach(producto => {
        let tableBody = document.getElementById('table-body');

        let agregarFila = document.createElement('tr')
        agregarFila.id = 'new-tr';
        agregarFila.innerHTML = `
        <td>${txtCategoria}</td>
        <td>${txtNombre}</td>
        <td>$${txtPrecio}</td>
        <td>${txtDescripcion}</td>
        <td>#${txtId}</td>
        <th><button type="button" class="btn editar-producto btn-secondary btn-sm mb-1">Editar</button>
        <button type="button" class="btn borrar-producto btn-danger btn-sm mb-1">Borrar</button></th>
        `
        tableBody.append(agregarFila);
    });
}


borrarProd.addEventListener("click", borrarFila)

productos.forEach((prod) => {


    function borrarFila(id) {
        let nuevosProductos = productos.filter(function (produ) {
            return produ.id !== id;
        })
        productos = [...nuevosProductos]
    }

    borrarFila(prod.id)

})




// onclick="deletebook(${book.isbn})"


// let validar = cofrim("desea eliminar el libro?")
// if(validar) {
//     let newBooks = books.filter((book) =>{
//         return book.isbn !== isbn;
//     });
//     books=[...newBooks]
// }