/// LO MAS BUSCADO //
const lomasbuscado= [
    {name: 'Pizza Napolitana',
     price: 1800,
     url:'https://avantipizzas.com.ar/wp-content/uploads/2022/04/napolitana-con-albahaca-pizzas-avanti-300x300.jpg'},
    {name:'Empanadas de ternera',
     price: 2000,
     url:'https://tiendadeempanadas.com.ar/wp-content/uploads/2020/07/POLlO-300x300.jpg'},
    {name:'Sandwich de milanesa',
     price: 1500,
     url:'https://www.shutterstock.com/image-photo/sandwich-de-milanesa-con-huevo-260nw-2178793257.jpg'},
    {name:'Coca cola 2lts',
     price: 850,
     url:'https://trajineras.com/wp-content/uploads/2020/02/cocacola_2.5lts.png'}   
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
    {name:'Pizza especial',
     price: 2500,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/napolitana-con-albahaca-pizzas-avanti-300x300.jpg'},
    {name:'PIzza de Calabresa',
     price: 2500,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/calabressa-pizzas-avanti-300x300.jpg'},
     {name:'Pizza de Fugazzeta',
      price: 2300,
      url:'https://maxipasta.com.ar/wp-content/uploads/2022/05/fugazzeta-rellena-1-300x300.jpg'},
      {name:'Pizza de ternera',
       price: 2300,
       url:'https://st4.depositphotos.com/1000605/21101/i/450/depositphotos_211012608-stock-photo-pizza-with-minced-meat-and.jpg'},
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
    {name:'Milanesa rellena con fritas',
     price: 2000,
     url:'https://www.cucinare.tv/wp-content/uploads/2018/12/Milanesa-rellena-frita-300x300.jpg',
    },
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
    {name:'Pata muslo con guarnicion',
    price: 2100,
    url:'https://comersanoviandas.com/wp-content/uploads/2021/04/Pata-muslo-al-horno-con-verduras-asadas-1.jpg',}

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
    {name:'Empanada de mondongo',
     price: 230,
     url:'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/06/03211316/RIG-0705-4-empanadademondongo-petitechefcom-300x300.jpg',
    },
    {name:'Empanada de capresse',
     price: 250,
     url:'https://www.deliciosi.com/images/100/134/empanadas-caprese.jpg',
    },
    {name:'Empanda de jamon y queso',
     price: 250,
     url:'https://www.cucinare.tv/wp-content/uploads/2020/01/Empanadas-de-jamon-y-queso-300x300.jpg',
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
    {name:'Sandwich de Milanesa especial',
     price: 1700,
     url:'https://www.laalemanacomidas.com.ar/wp-content/uploads/2020/04/180786-a3dd8eb3-b0db-4b1d-bf9f-83c55bc38593-1531908931.png',
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
    {name:'Hamburguesa especial',
     price: 1600,
     url:'https://ilfornodirita.pedidosonline.uy/wp-content/uploads/2022/02/hamburguesa-completa-300x300.jpg',
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
    {name:'Fanta 2lts',
     price: 500,
     url:'https://www.hiperlibertad.com.ar/arquivos/ids/210161-300-300/Gaseosa-Fanta-Naranja-1-5-Lt-2-2552.jpg?v=638210685975330000',
    },
    {name:'Secco 2lts',
     price: 450,
     url:'https://www.delimart.com.ar/user-content/d51d4e57-f106-46ad-ac0b-672523d7bd97.jpg',
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