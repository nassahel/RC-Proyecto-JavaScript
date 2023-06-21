///---------------------------------------------------------------------- PIZZAS------------------------------------------------------- ////

const pizzas= [
    {name:'Pizza napolitana',
     price: '$2350',
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/napolitana-con-albahaca-pizzas-avanti-300x300.jpg'},
    {name:'Pizza de muzzarella',
     price: '$2300',
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/roquefort-pizzas-avanti-300x300.jpg'},
    {name:'Pizza de calabresa',
     price: '$2500',
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/calabressa-pizzas-avanti-300x300.jpg'},
    {name:'Pizza de fugazzeta',
     price: '$2300',
     url:'https://maxipasta.com.ar/wp-content/uploads/2022/05/fugazzeta-rellena-1-300x300.jpg'},
]

const pizzaSection = document.querySelector('#pizzas');

pizzas.forEach(function (Pizza) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Pizza.url} alt=${Pizza.name}/>
    <p>${Pizza.name}</p>
    <button class="addToCard"  type="submit">${Pizza.price}</button>
    `;

    card.innerHTML = item;
    pizzaSection.appendChild(card);
    
})
//----------------------------------------------------------------------- MINUTAS------------------------------------------------------ ////

const minutas=[ 
    {name:'Pechuga c/guarnicion',
    price: '$2100',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5PXmmXxlfpF9JPgggPnGF7hDCZa0SNgraZuDUKCYmFohrpFuzikVfB1IxF0MCzZQLRc&usqp=CAU',
    },
    {name:'Bife de lomo',
    price: '$1600',
    url:'https://cdn.pixabay.com/photo/2015/05/29/04/08/strip-loin-steak-788873_1280.jpg',
    },
    {name:'Kipe relleno',
    price: '$2300',
    url:'https://www.shutterstock.com/image-photo/roasted-kibe-brazilian-snack-on-260nw-1919900744.jpg',
    },
    {name:'Matambre al verdeo',
    price: '$2500',
    url:'https://media-cdn.tripadvisor.com/media/photo-s/1c/c0/e9/ff/matambre-tiernizado-al.jpg',
    },
]
const minutaSection = document.querySelector('#minutas');

minutas.forEach(function (Minutas) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Minutas.url} alt=${Minutas.name}/>
    <p>${Minutas.name}</p>
    <button class="addToCard"  type="submit">${Minutas.price}</button>
    `;

    card.innerHTML = item;
    minutaSection.appendChild(card);
    
})
///---------------------------------------------------------------------- EMPANADASSS------------------------------------------------ ////

const empanadas=[
    {name:'Empanada de jamon y queso',
     price: '$240',
     url:'https://tiendadeempanadas.com.ar/wp-content/uploads/2020/07/JyQ-300x300.jpg',
    },
    {name: 'Empanada de pollo',
     price: '$240',
     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdl0R8_2gYcI1gb6u2tANwGuAGRpUxR3GYg&usqp=CAU',
    },
    {name:'Empanada de capresse',
     price: '$250',
     url:'https://i0.wp.com/empanadaspr.com/wp-content/uploads/2023/04/cerdo2.png?resize=300%2C300&ssl=1',
    },
    {name:'Empanadas de carne',
    price: '$240',
    url:'https://tiendadeempanadas.com.ar/wp-content/uploads/2020/07/POLlO-300x300.jpg',
    }


]
const empanadaSection = document.querySelector('#empanadas');

empanadas.forEach(function (Empanadas) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Empanadas.url} alt=${Empanadas.name}/>
    <p>${Empanadas.name}</p>
    <button class="addToCard"  type="submit" >${Empanadas.price}</button>
    `;

    card.innerHTML = item;
    empanadaSection.appendChild(card);
    
})
//// ------------------------------------------------------------SANDWICHES----------------------------------------------------------------- ///

const sandwiches= [
    {name:'Sandwich de Milanesa',
     price: '$1500',
     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnH6SJXFa6EZ4-MM_i8Quq8dqUP9Jenv1swmcxHf8Vv4wJVQWnlX5CT4flmDTXOEmn10&usqp=CAU'
    },
    {name:'Sandwich de Ternera',
    price: '$1500',
    url:'https://www.juliana-delivery.com.ar/uploads/products/detail_products_6117.png',
    },
    {name:'Sandwich de Lomito',
    price: '$1600',
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPmPnLFHG0utRui8sVvDJVyeqNhe7gBrDjv5QEOLuLaIiNUi0aMkic2mrNkC2eVd3ymg&usqp=CAU',
    },
    {name:'Hamburguesa comun',
    price: '$1400',
    url:'https://static.vecteezy.com/system/resources/thumbnails/021/665/613/small/beef-burger-isolated-png.png',
    },
]
const sandwichwsection = document.querySelector('#sandwiches');

sandwiches.forEach(function (Sandiwiches) {
    let card = document.createElement('div');
    card.classList.add('card')

    let item = ` 
    <img src=${Sandiwiches.url} alt=${Sandiwiches.name}/>
    <p>${Sandiwiches.name}</p>
    <button class="addToCard"  type="submit">${Sandiwiches.price}</button>
    `;

    card.innerHTML = item;
    sandwichwsection.appendChild(card);
    
})
///-------------------------------------------------------------- BEBIDAS ---------------------------------------------------------------//
const bebidas=[
    {name:'Coca cola 2lts',
    price: '$600',
    url:'https://trajineras.com/wp-content/uploads/2020/02/cocacola_2.5lts.png',
    },
    {name:'Sprite 2lts',
     price: '$500',
     url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-ifDmZIa7bGnTadszbb2R6-NnXcJ4XAyAgT0iDBHwByNxjTtUr8kxRqqEEDKHmZvG2w&usqp=CAU',
    },
    {name:'Agua Mineral',
     price: '$400',
     url:'https://blogautoservicios.com.ar/wp-content/uploads/2023/04/7790315000422_536-7.jpg',
    },
    {name:'Cerveza Quilmes',
     price: '$700',
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
    <button  class="addToCard"type="submit" >${Bebidas.price}</button>
    `;

    card.innerHTML = item;
    bebidaSection.appendChild(card);
    
})
/*----------------------------------------------Carrito------------- */














/*--------------------------------------------------------------- EVENTO FORMULARIO----------------------------------------------------------*/
const search = document.querySelector('#search');
const btnSearch = document.querySelector('#btn-search');
const searchProduct = document.querySelector('#search-product');
const form = document.querySelector('form');
//------------------------------------------------------------------EVENTO DE LOS PRODUCTOS--------------------------------------------------------------//
function renderSearchProduct(params) {
    let pizzaSection = pizzas.find(function (Pizza) {
        if(Pizza.name === search.value)return Pizza;
        
    });
    let minutaSection = minutas.find(function (Minutas) {
        if(Minutas.name === search.value)return Minutas;
     });
     let empanadaSection = empanadas.find(function (Empanadas) {
        if(Empanadas.name === search.value)return Empanadas;
     });
     let sandwichwsection = sandwiches.find(function (Sandiwiches) {
        if(Sandiwiches.name === search.value)return Sandiwiches;
    });
    let bebidaSection = bebidas.find(function (Bebidas) {
         if(Bebidas.name === search.value)return Bebidas;
     });
    if(pizzaSection !== undefined){
        searchProduct.innerHTML = `<h3 class=buscador>Producto encontrado</h3>`;

        let item = `
        <div class=buscador>
        <img src=${pizzaSection.url} alt=${pizzaSection.name}/>
        <p>${pizzaSection.name}</p>
        <button type="submit" onclick="addCard()">${pizzaSection.price}</button>
        </div>`;


        searchProduct.innerHTML += item;

    }else if(minutaSection !== undefined ){
        searchProduct.innerHTML = `<h3 class=buscador>Producto encontrado</h3>`;

                let item = `
                <div class=buscador>
                <img src=${minutaSection.url} alt=${minutaSection.name}/>
                <p>${minutaSection.name}</p>
                <button type="submit" onclick="addCard()">${minutaSection.price}</button>
                </div>`;
        
                searchProduct.innerHTML += item;
    }else if (empanadaSection !== undefined){
                searchProduct.innerHTML = `<h3 class=buscador>Producto encontrado</h3>`;
        
                let item = `
                <div class=buscador>
                <img src=${empanadaSection.url} alt=${empanadaSection.name}/>
                <p>${empanadaSection.name}</p>
                <button type="submit" onclick="addCard()">${empanadaSection.price}</button>
                </div>`;
        
                searchProduct.innerHTML += item;

    }else if (sandwichwsection !== undefined){
                searchProduct.innerHTML = `<h3 class=buscador>Producto encontrado</h3>`;
        
                let item = `
                <div class=buscador>
                <img src=${sandwichwsection.url} alt=${sandwichwsection.name}/>
                <p>${sandwichwsection.name}</p>
                <button type="submit" onclick="addCard()">${sandwichwsection.price}</button>
                </div>`;
        
                searchProduct.innerHTML += item;
        
    }else if (bebidaSection !== undefined){
                searchProduct.innerHTML = `<h3 class=buscador>Producto encontrado</h3>`;
        
                let item = `
                <div class=buscador>
                <img src=${bebidaSection.url} alt=${bebidaSection.name}/>
                <p>${bebidaSection.name}</p>
                <button type="submit" onclick="addCard()">${bebidaSection.price}</button>
                </div>`;
        
                searchProduct.innerHTML += item;
        
    }

    
}
form.addEventListener('submit', function(event){
    searchProduct.innerHTML ='';
    pizzaSection.innerHTML ='';
    minutaSection.innerHTML ='';
    empanadaSection.innerHTML ='';
    sandwichwsection.innerHTML ='';
    bebidaSection.innerHTML ='';
    event.preventDefault();

    renderSearchProduct();
});
