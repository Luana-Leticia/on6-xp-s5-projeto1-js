console.log('--------------------------------------');
console.log('     Projeto Carrinho de Compras     ');
console.log('--------------------------------------');

const db = require('./database');
const query = require('synchronous-user-input');

const { produtos } = db;
produtos.sort((product1, product2) => product1.preco - product2.preco);
//console.table(produtos);


const getProductById = id => {
    const product = produtos.find(product => product.id === id);
    return (typeof product === 'object') ? product : 'Você digitou um id de um produto que não existe. Tente novamente!';
}

const validateQuantity = quantity => (quantity > 0) ? quantity : 'Você digitou uma quantidade igual a zero ou negativa. Tente novamente!';


const shoppingCart = [];

let stillBuying = 's';
while (stillBuying.toLowerCase() === 's') {
    let id = query('Digite o id do produto desejado: ');
    let product = getProductById(id);
    while(typeof product === "string"){
        console.log(product);
        id = parseInt(query('Digite o id do produto desejado: '));
        product = getProductById(id);
    }
    let quantity = parseInt(query('Digite a quantidade que gostaria de adquirir: '));
    quantity = validateQuantity(quantity);
    while(typeof quantity === 'string'){
        console.log(quantity);
        quantity = parseInt(query('Digite a quantidade que gostaria de adquirir: '));
        quantity = validateQuantity(quantity);
    }
    
    stillBuying = query('Deseja continuar comprando? S ou N: ');
}



/* 
const hasDiscountCoupon = query('Você possui cupom de desconto? S ou N: ');
const discountCoupon = query('De quanto é o seu cupom? ');
*/

