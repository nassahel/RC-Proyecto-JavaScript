

/// LO MAS BUSCADO //
const lomasbuscado= [
    {name: 'Pizza Napolitana',
     price: 1800,
     url:'https://avantipizzas.com.ar/wp-content/uploads/2022/04/napolitana-con-albahaca-pizzas-avanti-300x300.jpg'},
    {name:'Empanadas de ternera',
     price: 2000,
     url:'https://tiendadeempanadas.com.ar/wp-content/uploads/2020/07/POLlO-300x300.jpg'},
    {name:'Coca cola 2lts',
     price: 850,
     url:'https://trajineras.com/wp-content/uploads/2020/02/cocacola_2.5lts.png'},
     {name:'Cerveza Quilmes',
     price: 700,
     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVXyPS5zCxuNgSQneFSpZek0whs9ZGHFV1g&usqp=CAU',
     },
]


const buscadoSection = document.querySelector('#lomasbuscado');

lomasbuscado.forEach(function (buscado) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item =`
    <img src=${buscado.url} alt=${buscado.name}/>
    <p>${buscado.name}</p>
    <p>${buscado.price}</p>
    `;
    
    card.innerHTML = item;
    buscadoSection.appendChild(card);
})
 /// PIZZAS ////

const pizzas= [
    {name:'Pizza Napolitana',
     price: 2350,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/napolitana-con-albahaca-pizzas-avanti-300x300.jpg'},
    {name:'Pizza de muzzarella',
     price: 2300,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/roquefort-pizzas-avanti-300x300.jpg'},
    {name:'PIzza de Calabresa',
     price: 2500,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/calabressa-pizzas-avanti-300x300.jpg'},
    {name:'Pizza de Fugazzeta',
     price: 2300,
     url:'https://maxipasta.com.ar/wp-content/uploads/2022/05/fugazzeta-rellena-1-300x300.jpg'},
]

const pizzaSection = document.querySelector('#pizzas');

pizzas.forEach(function (Pizza) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Pizza.url} alt=${Pizza.name}/>
    <p>${Pizza.name}</p>
    <p>${Pizza.price}</p>
    `;

    card.innerHTML = item;
    pizzaSection.appendChild(card);
    
})
/// MINUTAS ////

const minutas=[ 
    {name:'Pechuga c/guarnicion',
    price: 2100,
    url: 'https://chefmiralles.files.wordpress.com/2014/02/pollomanzana-7.jpg?w=300&h=300',
    },
    {name:'Bife de lomo',
    price: 1600,
    url:'https://dlvry-tkout.com/wp-content/uploads/2022/04/3295-300x300.jpg',
    },
    {name:'Kipe relleno',
    price: 2300,
    url:'https://www.cucinare.tv/wp-content/uploads/2019/09/Keppe-300x300.jpg',
    },
    {name:'Matambre al verdeo',
    price: 2500,
    url:'https://img-global.cpcdn.com/recipes/d974bacedda743ae/400x400cq70/photo.jpg',
    },
]
const minutaSection = document.querySelector('#minutas');

minutas.forEach(function (Minutas) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Minutas.url} alt=${Minutas.name}/>
    <p>${Minutas.name}</p>
    <p>${Minutas.price}</p>
    `;

    card.innerHTML = item;
    minutaSection.appendChild(card);
    
})
/// EMPANADASSS ////

const empanadas=[
    {name:'Empanada de carne',
     price: 240,
     url:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_250,h_250/https://www.recetasjudias.com/wp-content/uploads/2017/06/Empanadas-Argentinas-300x300.jpg',
    },
    {name: 'Empanada de pollo',
     price: 240,
     url:'https://www.domenico.es/wp-content/uploads/2022/12/DSC07161-scaled-e1671539130174-300x300.jpg',
    },
    {name:'Empanada de capresse',
     price: 250,
     url:'https://www.deliciosi.com/images/100/134/empanadas-caprese.jpg',
    },
    {name:'Sfijas',
    price: 240,
    url:'https://arabianshawarma.com.ar/wp-content/uploads/2021/11/sfijas--300x300.jpg',
    }


]
const empanadaSection = document.querySelector('#empanadas');

empanadas.forEach(function (Empanadas) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Empanadas.url} alt=${Empanadas.name}/>
    <p>${Empanadas.name}</p>
    <p>${Empanadas.price}</p>
    `;

    card.innerHTML = item;
    empanadaSection.appendChild(card);
    
})
//// SANDWICHES ///

const sandwiches= [
    {name:'Sandwich de Milanesa',
     price: 1500,
     url:'https://www.shutterstock.com/image-photo/sandwich-de-milanesa-con-huevo-260nw-2178793257.jpg'
    },
    {name:'Sandwich de Ternera',
    price: 1500,
    url:'https://img-global.cpcdn.com/recipes/9efa1e15484d1a5d/400x400cq70/photo.jpg',
    },
    {name:'Sandwich de Lomito',
    price: 1600,
    url:'https://cdn.shopify.com/s/files/1/0596/4313/4144/products/image_a2c57cce-32d6-46b0-aeef-933d3272cb07.jpg?v=1649356971',
    },
    {name:'Hamburguesa comun',
    price: 1400,
    url:'https://www.baarty.com/articulos/wp-content/uploads/2022/07/proveedor-pan-hamburguesas.jpg',
    },
]
const sandwichwsection = document.querySelector('#sandwiches');

sandwiches.forEach(function (Sandiwiches) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Sandiwiches.url} alt=${Sandiwiches.name}/>
    <p>${Sandiwiches.name}</p>
    <p>${Sandiwiches.price}</p>
    `;

    card.innerHTML = item;
    sandwichwsection.appendChild(card);
    
})
/// BEBIDAS //
const bebidas=[
    {name:'Coca cola 2lts',
    price: 600,
    url:'https://trajineras.com/wp-content/uploads/2020/02/cocacola_2.5lts.png',
    },
    {name:'Sprite 2lts',
     price: 500,
     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-ifDmZIa7bGnTadszbb2R6-NnXcJ4XAyAgT0iDBHwByNxjTtUr8kxRqqEEDKHmZvG2w&usqp=CAU',
    },
    {name:'Agua Mineral',
     price: 400,
     url:'https://blogautoservicios.com.ar/wp-content/uploads/2023/04/7790315000422_536-7.jpg',
    },
    {name:'Cerveza Quilmes',
     price: 700,
     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVXyPS5zCxuNgSQneFSpZek0whs9ZGHFV1g&usqp=CAU',
    }
]

const bebidaSection = document.querySelector('#bebidas');

bebidas.forEach(function (Bebidas) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Bebidas.url} alt=${Bebidas.name}/>
    <p>${Bebidas.name}</p>
    <p>${Bebidas.price}</p>
    `;

    card.innerHTML = item;
    bebidaSection.appendChild(card);
    
})
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})