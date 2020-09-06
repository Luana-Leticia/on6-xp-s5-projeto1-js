console.log('--------------------------------------');
console.log('     Projeto Carrinho de Compras     ');
console.log('--------------------------------------');

const db = require('./database');
const query = require('synchronous-user-input');

const { produtos } = db;
produtos.sort((product1, product2) => product1.preco - product2.preco);
//console.table(produtos);
/*
let stillBuying = 's';
while (stillBuying.toLowerCase() === 's') {
    const id = query('Digite o id do produto desejado: ');
    const quantity = query('Digite a quantidade que gostaria de adquirir: ');
    stillBuying = query('Deseja continuar comprando? S ou N: ');
}
*/
const shoppingCart = [];
/* 
const hasDiscountCoupon = query('Você possui cupom de desconto? S ou N: ');
const discountCoupon = query('De quanto é o seu cupom? ');
*/

