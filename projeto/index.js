console.log('--------------------------------------');
console.log('     Projeto Carrinho de Compras     ');
console.log('--------------------------------------');

const db = require('./database');
const query = require('synchronous-user-input');

const { produtos } = db;

produtos.sort((product1, product2) => product1.preco - product2.preco);

const categories = produtos.reduce((acumulator, product) => (acumulator.includes(product.categoria)) ? acumulator : [...acumulator, product.categoria], []);

const getProductById = (id, productsList) => {
    const product = productsList.find(product => product.id === id);
    return (typeof product === 'object') ? product : 'Você digitou um id de um produto que não existe. Tente novamente!';
}

const validateQuantity = quantity => (quantity > 0) ? quantity : 'Você digitou uma quantidade igual a zero ou negativa. Tente novamente!';

const validateCategoryNumber = categoryNumber => (categoryNumber >= 0 && categoryNumber < categories.length) ? categoryNumber : 'Você digitou um número de categoria inválido. Tente novamente!';

const shoppingCart = [];

let buyInAnotherCategory = 's';
let categoryNumber = -1;

let stillBuyingInCategory = 's';
let addedProduct;

while (buyInAnotherCategory.toLowerCase() === 's') {
    console.table(categories);
    categoryNumber = parseInt(query(`Escolha uma das categorias acima (número de 0 a ${categories.length - 1}): `));
    categoryNumber = validateCategoryNumber(categoryNumber);
    while(typeof categoryNumber === 'string'){
        console.log(categoryNumber);
        categoryNumber = parseInt(query(`Escolha uma das categorias acima (número de 0 a ${categories.length - 1}): `));
        categoryNumber = validateCategoryNumber(categoryNumber);
    }
    const productsOfSpecificCategory = produtos.filter(product => product.categoria === categories[categoryNumber]);
    console.table(productsOfSpecificCategory);

    stillBuyingInCategory = 's';

    while (stillBuyingInCategory.toLowerCase() === 's') {
        let id = parseInt(query('Digite o id do produto desejado: '));
        let product = getProductById(id, productsOfSpecificCategory);
        while (typeof product === 'string') {
            console.log(product);
            id = parseInt(query('Digite o id do produto desejado: '));
            product = getProductById(id, productsOfSpecificCategory);
        }
        let quantity = parseInt(query('Digite a quantidade que gostaria de adquirir: '));
        quantity = validateQuantity(quantity);
        while (typeof quantity === 'string') {
            console.log(quantity);
            quantity = parseInt(query('Digite a quantidade que gostaria de adquirir: '));
            quantity = validateQuantity(quantity);
        }

        addedProduct = { ...product, quantidade: quantity }
        shoppingCart.push(addedProduct);

        stillBuyingInCategory = query('Deseja continuar comprando nesta categoria? S ou N: ');
    }

    buyInAnotherCategory = query('Você deseja comprar em outra categoria? S ou N: ');
}

shoppingCart.sort((product1, product2) => product1.preco - product2.preco);

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

const pedido1 = new Pedido(shoppingCart, couponValue);
pedido1.calculateTotalItems();
pedido1.calculateSubtotalPrice();
pedido1.calculateDiscount();
pedido1.calculateTotalPrice();

console.log('--------------------------------------');
console.log('     Seu Carrinho de Compras     ');
console.log('--------------------------------------');
console.table(shoppingCart);

const { subtotalPrice, discountValue, totalPrice, orderDate } = pedido1;
console.log(`Valor subtotal: R$ ${subtotalPrice} \nValor do desconto: R$ ${discountValue} \nValor total: R$ ${totalPrice} \nData da compra: ${orderDate}`);