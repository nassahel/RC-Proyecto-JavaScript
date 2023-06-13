let carrito = [];


let agregarProd = document.getElementById("agregarProducto")
agregarProd.addEventListener("click", addProducto)



function addProducto() {
    
    let nombreProducto = document.getElementById("nombreProducto").innerText; 
    let precioProducto = document.getElementById("precioProducto").innerText; 
    let codigoProducto = document.getElementById("codigoProducto").innerText;
    let cantidadProducto = document.getElementById("cantidadProducto").value;
    let modalBody = document.getElementById("modalBody");


carrito.push({
    nombre: nombreProducto,
    precio: precioProducto,
    codigo: codigoProducto
})


let nuevoProducto = document.createElement("div")
nuevoProducto.className =  "itemCarrito"
nuevoProducto.innerHTML = parseInt(cantidadProducto) * `
<p>${nombreProducto}</p> 
<p>${precioProducto}</p> 
<p>${codigoProducto}</p> 
`

console.log(carrito);

modalBody.append(carrito)
}


