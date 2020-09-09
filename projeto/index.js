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

const validateUserNumber = userNumber => (userNumber === 1 || userNumber === 2) ? userNumber : 'Você digitou um número de uma opção inválida de usuário. Tente novamente!';

class Pedido {
    constructor(productsList, coupon, orderDate = new Date()){
        this.listOfProducts = productsList;
        this.coupon = coupon;
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
        if (this.coupon.validityCategories.length === categories.length){
            this.discountValue = this.subtotalPrice * this.coupon.value;
        } else {
            for(let category of this.coupon.validityCategories){
                const productsOfCouponCategory = this.listOfProducts.filter(product => product.categoria === category);
                const validProductsSubtotalPrice = productsOfCouponCategory.reduce((acumulator, product) => acumulator + product.preco * product.quantidade, 0);
                this.discountValue += validProductsSubtotalPrice * this.coupon.value;
            }
        }
        
    }

    calculateTotalPrice(){
        this.totalPrice = this.subtotalPrice - this.discountValue;
    }
}

discountCouponsList = [
    {
        promoCode: 'loja10',
        dueDate: new Date(2020, 12, 31),
        value: 0.10,
        validityCategories: categories
    },
    {
        promoCode: 'loja15',
        dueDate: new Date(2020, 8, 30),
        value: 0.15,
        validityCategories: categories
    },
    {
        promoCode: 'loja30',
        dueDate: new Date(2020, 01, 31),
        value: 0.3,
        validityCategories: categories
    },
    {
        promoCode: 'bfinfo',
        dueDate: new Date(2020, 11, 31),
        value: 0.3,
        validityCategories: ['informática']
    }
];

const validateCouponByPromoCode = promoCode => {
    const coupon = discountCouponsList.find(coupon => coupon.promoCode === promoCode && coupon.dueDate > new Date());
    const emptyCoupon = {
        promoCode: 'none',
        dueDate: new Date(2000, 0, 1),
        value: 0,
        validityCategories: categories
    }
    return (typeof coupon === 'object') ? coupon : emptyCoupon;
}

const validateChosenMenuOption = chosenMenuOption => ((chosenMenuOption >= 1 && chosenMenuOption <= 4) && Number.isInteger(chosenMenuOption)) ? chosenMenuOption : 'Você digitou o número de uma opção de menu inválido. Tente novamente!';

let userNumber = 0;
let wantCloseSystem = 'n';

let requestsList = [];
let shoppingCart;
let request;

while (wantCloseSystem === 'n') {
    userNumber = parseInt(query('Você é cliente ou funcionário? (1 - Cliente ou 2 - Funcionário) '));
    userNumber = validateUserNumber(userNumber);
    while (typeof userNumber === 'string') {
        console.log(userNumber);
        userNumber = parseInt(query('Você é cliente ou funcionário? (1 - Cliente ou 2 - Funcionário) '));
        userNumber = validateUserNumber(userNumber);
    }

    console.log('Seja bem-vindo!');

    if (userNumber === 1) {
        shoppingCart = [];

        let buyInAnotherCategory = 's';
        let categoryNumber = -1;

        let stillBuyingInCategory = 's';
        let addedProduct;

        while (buyInAnotherCategory.toLowerCase() === 's') {
            console.table(categories);
            categoryNumber = parseInt(query(`Escolha uma das categorias acima (número de 0 a ${categories.length - 1}): `));
            categoryNumber = validateCategoryNumber(categoryNumber);
            while (typeof categoryNumber === 'string') {
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

        const hasDiscountCoupon = query('Você possui cupom de desconto? S ou N: ');
        let coupon;

        if (hasDiscountCoupon.toLowerCase() === 's') {
            const promoCode = query('Digite o código do seu cupom: ');
            coupon = validateCouponByPromoCode(promoCode);
            if (typeof coupon.promoCode === 'none') {
                console.log('Cupom inválido ou expirado!');
            } else {
                console.log('Esse cupom é válido nas seguintes categorias:');
                console.table(coupon.validityCategories);
            }
        } else {
            coupon = validateCouponByPromoCode('none');
        }

        request = new Pedido(shoppingCart, coupon);
        request.calculateTotalItems();
        request.calculateSubtotalPrice();
        request.calculateDiscount();
        request.calculateTotalPrice();

        console.log('--------------------------------------');
        console.log('     Seu Carrinho de Compras     ');
        console.log('--------------------------------------');
        console.table(shoppingCart);

        const { subtotalPrice, discountValue, totalPrice, orderDate } = request;
        console.log(`Valor subtotal: R$ ${subtotalPrice.toFixed(2)} \nValor do desconto: R$ ${discountValue.toFixed(2)} \nValor total: R$ ${totalPrice.toFixed(2)} \nData da compra: ${orderDate}`);

        requestsList.push(request);

    } else {
        const menu = ['1 - Quantidade de pedidos do dia', '2 - Valor total vendido do dia', '3 - Lista de produtos vendidos', '4 - Tempo restante para fechar a loja'];
        let wantChoseAnotherMenuOption = 's';

        while (wantChoseAnotherMenuOption === 's') {
            console.table(menu);
            let chosenMenuOption = parseInt(query('Digite a opção do menu que você deseja consultar: '));
            chosenMenuOption = validateChosenMenuOption(chosenMenuOption);
            while (typeof chosenMenuOption === 'string') {
                console.log(chosenMenuOption);
                chosenMenuOption = parseInt(query('Digite a opção do menu que você deseja consultar: '));
                chosenMenuOption = validateChosenMenuOption(chosenMenuOption);
            }

            switch (chosenMenuOption) {
                case 1:
                    let pedidosRealizados = (requestsList.length === 1) ? 'pedido realizado' : 'pedidos realizados';
                    console.log(`Hoje tivemos ${requestsList.length} ${pedidosRealizados} até agora.`);
                    break;
                case 2:
                    const totalSoldPrice = requestsList.reduce((acumulator, request) => acumulator + request.totalPrice, 0);
                    console.log(`Hoje vendemos R$ ${totalSoldPrice.toFixed(2)} até agora.`);
                    break;
                case 3:
                    const allSoldProducts = requestsList.reduce((acumulator, request) => acumulator.concat(request.listOfProducts), []);
                    if(allSoldProducts.length === 0){
                        console.table(allSoldProducts);
                    } else {
                        console.log('Não realizamos a primeira venda ainda. Veja mais tarde!');
                    }                    
                    break;
                case 4:
                    const todayDate = new Date();
                    const remainingHours = 18 - todayDate.getHours();
                    const remainingMinutes = 60 - todayDate.getMinutes();
                    const horas = (remainingHours > 1) ? 'horas' : 'hora';
                    const minutos = (remainingMinutes > 1) ? 'minutos' : 'minuto';
                    console.log(`Resta ${remainingHours} ${horas} e ${remainingMinutes} ${minutos} para acabar o expediente! (Fim: 19h)`);
                    break;
                default:
                    break;
            }

            wantChoseAnotherMenuOption = query('Deseja consultar outra opção do menu? ')
        }     
    }

    wantCloseSystem = query('Deseja encerrar o sistema? S ou N: ');
}