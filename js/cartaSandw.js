let prodSand = JSON.parse(localStorage.getItem("carrito"))

if (prodSand === null) {
    prodSand = sandwichs;
    localStorage.setItem("car", JSON.stringify(prodSand))

}


let carrito = []

let sandsBox = document.getElementById("sands-box")
let modalBody = document.getElementById("modalBody")

sandwichs.forEach(sndwProduct => {

    let nuevoSandwich = document.createElement("article")
    nuevoSandwich.className = "new-sand row d-flex justify-content-evenly my-4 shadow bg-white py-2"
    nuevoSandwich.innerHTML = `
    <img class="col col-12 col-lg-3" src=${sndwProduct.Imagen}>
    <div class="col col-sm-12 col-lg-6 ms-4 w-50"> 
        <h2>${sndwProduct.Nombre}</h2>
        <h2>$${sndwProduct.Precio}</h2>
        <p>${sndwProduct.Descripcion}</p>
        <p>#${sndwProduct.ID}</p>
    </div>
    <div class="col col-12 col-lg-2 my-auto">
    <button id="agregarProducto" class="btn btn-agregar mb-4" type="submit">Agregar al Carrito</button>
    </div>
    `
    sandsBox.append(nuevoSandwich)
    
    let agregarCarrito = document.getElementById("agregarProducto")
    agregarCarrito.addEventListener("click", agregarAlCarrito)
    
    
    function agregarAlCarrito() {
        carrito.push({
            Imagen: sndwProduct.Imagen,
            Nombre: sndwProduct.Nombre,
            Precio: sndwProduct.Precio,
            Descripcion: sndwProduct.Descripcion,
            id: sndwProduct.ID
        });
        console.log(carrito);
    }
});



// carrito.forEach((product) => {
//     let carritoContent = document.createElement("div")
//     carritoContent.innerHTML = `
//     <img src=${sndwProduct.Imagen}>
//         <h2>${product.Nombre}</h2>
//         <h2>$${product.Precio}</h2>
//         <p>${product.Descripcion}</p>
//         <p>#${product.ID}</p>
//     `
//     modalBody.append(carritoContent);
// })


