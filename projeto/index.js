console.log('--------------------------------------');
console.log('     Projeto Carrinho de Compras     ');
console.log('--------------------------------------');

const db = require('./database');
const query = require('synchronous-user-input');
const { compileFunction } = require('vm');

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
let addedProduct;

while (stillBuying.toLowerCase() === 's') {
    let id = parseInt(query('Digite o id do produto desejado: '));
    let product = getProductById(id);
    while(typeof product === 'string'){
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
    
    addedProduct = {...product, quantidade: quantity}
    shoppingCart.push(addedProduct);
    stillBuying = query('Deseja continuar comprando? S ou N: ');
}

console.log('--------------------------------------');
console.log('     Seu Carrinho de Compras     ');
console.log('--------------------------------------');

shoppingCart.sort((product1, product2) => product1.preco - product2.preco);
console.table(shoppingCart);

discountCouponsList = [
    {
        promoCode: 'loja10',
        dueDate: new Date(2020, 12, 31),
        value: 0.10
    },
    {
        promoCode: 'loja15',
        dueDate: new Date(2020, 8, 30),
        value: 0.15
    },
    {
        promoCode: 'loja30',
        dueDate: new Date(2020, 01, 31),
        value: 0.3
    }
];

const validateCouponByPromoCode = promoCode => {
    const coupon = discountCouponsList.find(coupon => coupon.promoCode === promoCode && coupon.dueDate > new Date());
    return (typeof coupon === 'object') ? coupon : 'Cupom inválido ou expirado!';
}


const hasDiscountCoupon = query('Você possui cupom de desconto? S ou N: ');
console.log("cupom aqui: ", hasDiscountCoupon);
let couponValue = 0;

if (hasDiscountCoupon.toLowerCase() === 's') {
    const promoCode = query('Digite o código do seu cupom: ');
    const coupon = validateCouponByPromoCode(promoCode);
    if(typeof coupon === 'string'){
        console.log(coupon);
    }else{
        couponValue = coupon.value;
    }
}

class Pedido {
    constructor(productsList, couponValue, orderDate = new Date()){
        this.listOfProducts = productsList;
        this.couponDiscountValue = couponValue;
        this.orderDate = orderDate;
        this.totalItems = 0;
        this.subtotalPrice = 0;
        this.discountValue = 0;
        this.totalPrice = 0;
    }

    calculateTotalItems(){
        this.totalItems = this.listOfProducts.reduce((acumulator, product) => acumulator + product.quantidade, 0);
    }

    calculateSubtotalPrice(){
        this.subtotalPrice = this.listOfProducts.reduce((acumulator, product) => acumulator + product.quantidade * product.preco, 0);
    }

    calculateDiscount(){
        this.discountValue = this.subtotalPrice * this.couponDiscountValue;
    }

    calculateTotalPrice(){
        this.totalPrice = this.subtotalPrice - this.discountValue;
    }

}

console.log(couponValue);
const pedido1 = new Pedido(shoppingCart, couponValue);
pedido1.calculateTotalItems();

pedido1.calculateSubtotalPrice();
pedido1.calculateDiscount();
pedido1.calculateTotalPrice();
console.log(pedido1.totalItems, pedido1.couponDiscountValue, pedido1.subtotalPrice, pedido1.discountValue, pedido1.totalPrice);

console.log('\n \n \n lista de produtos pedidos: ');
console.table(pedido1.listOfProducts);
