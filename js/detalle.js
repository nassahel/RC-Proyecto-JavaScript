let carrito = []

let productos = JSON.parse(localStorage.getItem("carritox"));

if(productos === null) {
    productos = sandwichs;
    localStorage.setItem("carritox", JSON.stringify(productos))
}

function crearTarjeta(arrayProductos, seccion) {
    arrayProductos.forEach(producto => {
        
        let item = `
        <section class="row col-11 p-2 new-sand bg-white my-4 shadow row d-flex justify-content-between">
        <img class="col col-12 col-lg-3" src=${producto.Imagen}>
        <div class="col col-12 col-lg-6">
            <h2>${producto.Nombre}</h2> 
            <h2>$${producto.Precio}</h2>  
            <p>${producto.Descripcion}</p>  
            <p>#${producto.ID}</p>
        </div>
        <div class="col col-12 col-lg-3 m-auto text-center">
        <button class="btn btn-agregar">Agregar al Carrito</button>
        </div>
        </section>
        
        `;
        seccion.innerHTML += item; 
    });       
}

function renderTarjeta() {
    let pizzaBox = document.getElementById("pizza-box")

    crearTarjeta(sandwichs, pizzaBox)
}

renderTarjeta()