let sandwichBox = document.getElementById("sandwich-box");
let verCarrito = document.getElementById("ver-carrito")
let modalBody = document.getElementById("modalBody")

let carrito = [];

sandwichs.forEach((producto) => {
    let item = document.createElement("section");
    item.className = "row col-11 p-2 new-sand bg-white my-4 shadow d-flex align-items-center justify-content-evenly"
    item.innerHTML = `
    
        <img class="col col-12 col-lg-3" src=${producto.Imagen}>
        <div class="col col-12 col-lg-6">
            <h2>${producto.Nombre}</h2> 
            <h2>$${producto.Precio}</h2>  
            <p>${producto.Descripcion}</p>  
            <p>#${producto.ID}</p>
        </div>
    
        `;

    sandwichBox.append(item);



    let comprar = document.createElement("button");
    comprar.className = "col h-25 col-lg-1 btn btn-agregar"
    comprar.innerText = "Comprar";

    item.append(comprar)



    comprar.addEventListener("click", () => {
        carrito.push({
            imagen: producto.Imagen,
            nombre: producto.Nombre,
            precio: producto.Precio,
            descripcion: producto.Descripcion,
            id: producto.ID,
        });
        console.log(carrito);
    });

});




verCarrito.addEventListener("click", () => {
    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "prod-carrit row mx-2 rounded py-2 mb-2";
        carritoContent.innerHTML = `
       <img class="col-4" src=${producto.imagen}> 
       <div class="col col-6">
            <h5>${producto.nombre}</h5>             
            <p>#${producto.id}</p>
       </div>
        <div class="col col-2">
            <h5>$${producto.precio}</h5> 
        </div>   
        `;
        modalBody.append(carritoContent)
    })
})