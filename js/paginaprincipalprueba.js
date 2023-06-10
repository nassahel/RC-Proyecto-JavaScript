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