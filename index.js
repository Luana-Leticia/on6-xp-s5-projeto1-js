console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia
function falar() {
  return 'Pipipi popopo'
}

const falar2 = function () {
  return "oi";
}

const falar3 = () =>{
  return "oi"
}

const falar4 = () => "oi";

function dobro(num) {
  return num * 2
}

const dobro2 = function (num){
  return num*2;
}

function calcularMedia(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

// Vamos refatorar essas funções para a sintaxe de Arrow function





console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Callback')

// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  return a / b
}

function ordenar(a, b) {
  if (a <= b) {
    return [a, b]
  } else {
    return [b, a]
  }
}

///// EU

// Crie uma função chamada calcular que receberá como parâmetro: dois números e uma função de callback
function calcular (n1, n2, callback){
  return callback(n1, n2);
}


// Calcular em arrow function ficaria assim:
const calcular2 =  (n1, n2, callback) => callback(n1, n2);






// Faça a soma de dois números usando a função calcular
const resultadoSoma = calcular(10, 15, somar);
console.log('A soma de 10 e 15 é ', resultadoSoma);








// Faça a subtração de dois números usando a função calcular
const resultadoSubtracao = calcular(100, 20, subtrair);
console.log(`A subtração de 100 e 20 é ${resultadoSubtracao}`);






// Faça a multiplicação de dois números usando a função calcular

const resultadoMultiplicacao = calcular(100, 20, multiplicar);
console.log(`A multiplicação de 100 e 20 é ${resultadoMultiplicacao}`);






// Faça a divisão de dois números usando a função calcular


const resultadoDivisao = calcular(100, 20, dividir);
console.log(`A divisão de 100 e 20 é ${resultadoDivisao}`);




// Faça a ordenação crescente de dois números usando a função calcular

const resultadoOrdenacao = calcular(100, 20, ordenar);
console.log(`A ordem crescente de 100 e 20 é ${resultadoOrdenacao}`);






// Volte nas funções e refatore-as na sintaxe ES6

console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Condicionais')

// CONDICIONAIS
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1

// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou!

const media = calcularMedia(n1, n2, n3);
console.log(`A média entre 9, 5 e 1 é ${media}`);
/*
const resultatoAprovacao0 = (if (media >= 7) {
  return `Aprovado`;
} else {
  return `Reprovado`
})*/

const resultadoAprovacao = (media >= 7) ? "Aprovada" : "Reprovada";
// condição ? true : false

console.log(`A aluna foi ${resultadoAprovacao}`)

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  name: 'Pikachu',
  type: 'elétrico',
  height: 40.6,
}

// Fazer destructuring e acessar os valores de objeto e pokemon
const { nome } = objeto;
console.log(nome);

const { tipo } = objeto;
console.log(tipo);

const { peso } = objeto;
console.log(peso);

const { name, type, height } = pokemon;
console.log(`Meu pokemon é o ${name} e é do tipo ${type} e tem altura de ${height} cm.`);







console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

const hoje = new Date();
console.log(hoje);
const data = hoje.getDate;
console.log(data);

const minhaDataNascimento = new Date(1997, 3, 24);

const hoje = new Date()

console.log(hoje) // 2020-09-05T10:56:49.693Z

const data = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano) // 5 8 2020

const dataFormatada = hoje.toLocaleDateString('pt-BR')
console.log(dataFormatada) // 05/09/2020

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataLonga = hoje.toLocaleDateString('pt-BR', options)
console.log(dataLonga) // sábado, 5 de setembro de 2020








// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date







// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️







// Podemos usar o método toLocaleString para formatar a data







// Temos mais opções para formatar a data
//const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }







console.log('-----------------------------------------------------')
// ----------------------------------------------

const pessoa = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: () => pessoa.idade++,
  andar: (metrosCaminhados) => {
    pessoa.andando = true
    pessoa.caminhouQuantosMetros += metrosCaminhados
  },
  parar: () => pessoa.andando = false,

  apresentacao: () => {
  
    const anos = (pessoa.idade === 1) ? 'ano' : 'anos';
    const metros = (pessoa.caminhouQuantosMetros === 1) ? 'metro' : 'metros';
    
    return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}!`
  }
}


console.log(pessoa);




// Vamos utilizar o formato ES6 para refatorar a constante pessoa.

// Quero criar as variáveis pessoa2 e pessoa3 com as mesmas propriedades, mas alterando os valores de nome, sobrenome, altura e peso






console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Pessoa







console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5]

// Acessando elementos pela posição do array







// Informe o tamanho de cada array







// Faça a desestruturação do array







// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const db = require('./db')






console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()







console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console.







console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.







console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]

const comparar = (a, b) => {
  if (a < b) { // primeiro vem b e depois vem a
    return -1
  } else if (a > b) { // mantenho a como primeiro e b vem depois
    return 1
  } else { // se a e b forem iguais, mantém a mesma ordem
    return 0
  }
}

// Refatore a função comparar e ordene numbers em ordem crescente







// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)








console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers







// Some a quantidade de netos que vovó possui.







// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')