let empanadasBox = document.getElementById("empanada-box");
let pizzasBox = document.getElementById("pizzas-box");
let minutasBox = document.getElementById("minutas-box");
let sandwichBox = document.getElementById("sandwich-box");
let bebidasBox = document.getElementById("bebidas-box");

let verCarrito = document.getElementById("ver-carrito")
let modalBody = document.getElementById("modalBody")
let totalCompra = document.getElementById("total");
let contCarrito = document.getElementById("contadorCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function crearPagina(arrayProductos, seccionPagina) {
    
arrayProductos.forEach((producto) => {
    let item = document.createElement("section");
    item.className = "row col-11 p-2 new-sand bg-white my-4 shadow d-flex align-items-center justify-content-evenly"
    item.innerHTML = `
    
        <img class="col col-12 col-lg-3" src=${producto.Imagen}>
        <div class="col col-12 col-lg-6">
            <h2>${producto.Nombre}</h2> 
            <h2>$${producto.Precio}</h2>  
            <h6>${producto.Descripcion}</h6>  
            <p>#${producto.ID}</p>
        </div>
    
        `;

        seccionPagina.append(item);



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
        carritoCont();
        guardarLocal();
    });

});
}


// ESTO LO HICE AL FINAL PARA AGREGAR UNA PAGINA DE CADA SECCION. CUANDO ESTA HABILITADA SOLO UNA SE MUESRAN , PERO SI QUIERO ACTIVAR LA FUNCION VARIAS VECES PARA QUE APAREZCA CADA SECCION EN CADA PAGINA NO ME APARECEN

// crearPagina(empanadas, empanadasBox)
crearPagina(pizzas, pizzasBox)
// crearPagina(minutas, minutasBox)
crearPagina(sandwichs, sandwichBox)
// crearPagina(bebidas, bebidasBox)



const eliminarProducto = (id) => {
    carrito = carrito.filter((producto) => producto.id !== id);
    carritoCont();
    guardarLocal();
  };

verCarrito.addEventListener("click", () => {
    modalBody.innerHTML = "";
    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "prod-carrit row mx-2 shadow d-flex align-items-center py-2 mb-2";
        carritoContent.innerHTML = `
       <img class="col-4" id="imgcar"  src=${producto.imagen}> 
       <div class="col col-6">
            <h6>${producto.nombre}</h6>             
            <h6>$${producto.precio}</h6> 
            <p>#${producto.id}</p>
       </div>
        
        `;
        modalBody.append(carritoContent)

        let eliminar = document.createElement("span");
        eliminar.innerText = "X"
        eliminar.className = "eliminar-producto col col-1"
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
            carritoContent.remove();
            const total = carrito.reduce((acc, el) => acc + el.precio, 0);
            totalCompra.innerText = total;
          });
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    totalCompra.innerText = total;
})


function carritoCont() {
    if (carrito.length === 0) {
        contCarrito.style.display = "none";
    } else {
        contCarrito.style.display = "block";
    }

    const carritoLargo = carrito.length;

    localStorage.setItem("carritoLargo", JSON.stringify(carritoLargo))
    contCarrito.innerText = JSON.parse(localStorage.getItem("carritoLargo"))
 }
    
function guardarLocal() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


carritoCont();