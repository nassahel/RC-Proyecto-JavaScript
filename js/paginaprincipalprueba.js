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
     price: 1800,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/napolitana-con-albahaca-pizzas-avanti-300x300.jpg'},
    {name:'Pizza con peperoni',
     price: 2000,
     url: 'https://www.labrigatta.com/wp-content/uploads/2021/02/product_19-300x300.jpg'},
    {name:'Pizza con champiniones',
     price: 2200,
     url: 'https://maxipasta.com.ar/wp-content/uploads/2022/05/Pizza_Champi-300x300.jpg'},
    {name:'PIzza de Calabresa',
     price: 2100,
     url: 'https://avantipizzas.com.ar/wp-content/uploads/2022/04/calabressa-pizzas-avanti-300x300.jpg'},
     {name:'Pizza de Fugazzeta',
      price: 2100,
      url:'https://maxipasta.com.ar/wp-content/uploads/2022/05/fugazzeta-rellena-1-300x300.jpg'},
      {name:'Pizza de ternera',
       price:'2300',
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