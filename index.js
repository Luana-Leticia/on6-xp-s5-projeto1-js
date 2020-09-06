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

// função normal

const falar2 = function () {
  return "oi";
}

// função anônima

const falar3 = () =>{ 
  return "oi"
} 
// arrow function e função anônima

const falar4 = () => "oi"; // arrow function e função anônima
/*

function dobro(num) {
  return num * 2
}

const dobro2 = function (num){
  return num*2;
}
*/

const dobro = (num) => num * 2;


/*
function calcularMedia(nota1, nota2, nota3) {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

*/

const calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

// Vamos refatorar essas funções para a sintaxe de Arrow function

// Quando uma função for guardada numa constante, ela pode ser anônima
// Na arrow function, o nome function é suprimido
// Em arrows functions com 1 linha no código, as {} são opcionais e o return também




console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Callback')

// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
/*
function somar(a, b) {
  return a + b
}
*/

const somar = (a, b) => a + b;
/*
function subtrair(a, b) {
  return a - b
}
*/

const subtrair = (a, b) => a - b;

/*
function multiplicar(a, b) {
  return a * b
}
*/

const multiplicar = (a, b) => a * b;

/*
function dividir(a, b) {
  return a / b
}
*/

const dividir = (a, b) => a / b;

/*
function ordenar(a, b) {
  if (a <= b) {
    return [a, b]
  } else {
    return [b, a]
  }
}

*/

const ordenar = (a, b) => (a <= b) ? [a, b] : [b, a];

// Callbacks: funções que são passadas como parâmetros de outra(s)
// Qualquer função pode ser passada como parâmetro
// E a função pode estar escrita na forma antiga ou anônima ou em forma de arrow function

// Crie uma função chamada calcular que receberá como parâmetro: dois números e uma função de callback

/*
function calcular (n1, n2, callback){
  return callback(n1, n2);
}
*/

const calcular = (n1, n2, callback) => callback(n1, n2); // arrow function



// Calcular em arrow function ficaria assim:
//const calcular2 =  (n1, n2, callback) => callback(n1, n2);






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






// Volte nas funções e refatore-as na sintaxe ES6 OK

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

const resultadoAprovacao = (media >= 7) ? "Aprovada" : "Reprovada";  // operador ternário
// condição ? true : false

console.log(`A aluna foi ${resultadoAprovacao}`)


// Ternário operator: É uma forma diferente de declarar if else simples (com poucas linhas)
// Funciona assim: (condição) ? retorno caso verdadeiro : retorno caso falso
// A condição vai entre parênteses, os retornos não necessariamente








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



// Desestruturação de objetos: É uma forma diferente de capturar os valores das chaves dos objetos

// Ao declararmos constantes com os nomes idênticos ao nomes das propriedades e declararmo-nas
// entre {}, o JS entende que são variáveis que recebem as propriedades de um objeto





console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

const hoje = new Date();
console.log(hoje); // 2020-09-06T00:54:12.729Z Mostra a hora atual no meridiano de Greenwich
const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();
console.log(dia, mes, ano); // 20 08 2020 Ele conta o m~es a partir do zero. Não sei por quê

const dataFormatada = hoje.toLocaleDateString("pt-BR"); // 20/09/2020 ou 2020-9-5 depende do pc
const dataFormatada2 = hoje.toLocaleString("pt-BR"); // 20/09/2020 ou 2020-9-5 21:59:28
console.log(dataFormatada);
console.log(dataFormatada2);






// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date







// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️

const minhaDataNascimento = new Date(1997, 3, 24); // isso, abril é 3 pra isso
console.log(minhaDataNascimento); //1997-04-24T03:00:00.000Z

// Options você passa e edita o formato da data
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataLonga = minhaDataNascimento.toLocaleDateString('pt-BR', options)
console.log(dataLonga) // 1997 M04 24, Thu Por algum motivo não está capturando em português






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

const pessoa2 = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: () => pessoa2.idade++,
  andar: (metrosCaminhados) => {
    pessoa2.andando = true
    pessoa2.caminhouQuantosMetros += metrosCaminhados
  },
  parar: () => pessoa2.andando = false,

  apresentacao: () => {
  
    const anos = (pessoa2.idade === 1) ? 'ano' : 'anos';
    const metros = (pessoa2.caminhouQuantosMetros === 1) ? 'metro' : 'metros';
    
    return `Olá, eu sou ${pessoa2.nome} ${pessoa2.sobrenome}, tenho ${pessoa2.idade} ${anos}, ${pessoa2.altura}, meu peso é ${pessoa2.peso} e, só hoje, eu já caminhei ${pessoa2.caminhouQuantosMetros} ${metros}!`
  }
}

// Essa pessoa vai dar errado, porque tem this dentro de arrow function
const pessoa3 = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: () => this.idade++,
  andar: (metrosCaminhados) => {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },
  parar: () => this.andando = false,

  apresentacao: () => {
  
    const anos = (this.idade === 1) ? 'ano' : 'anos';
    const metros = (this.caminhouQuantosMetros === 1) ? 'metro' : 'metros';
    
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}


// Esse aqui tá certo, só não tá resumido
const pessoa4 = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: function(){this.idade++},
  andar: function (metrosCaminhados) {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },
  parar: function () {this.andando = false },

  apresentacao: function () {
  
    const anos = (this.idade === 1) ? 'ano' : 'anos';
    const metros = (this.caminhouQuantosMetros === 1) ? 'metro' : 'metros';
    
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}

// Assim funciona também, e é resumido
const pessoa5 = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario(){this.idade++},
  andar(metrosCaminhados) {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },
  parar() {this.andando = false },

  apresentacao() {
  
    const anos = (this.idade === 1) ? 'ano' : 'anos';
    const metros = (this.caminhouQuantosMetros === 1) ? 'metro' : 'metros';
    
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}


// Sobre objetos e o this: o this se refere a uma propriedade do objeto quando esta é referenciada dentro dele!
// Importante: O this não pega dentro de arrow functions!
// Objetos são legais, mas quando temos muuuitos objetos com as propriedades e temos que 
// escrever todos, faz mais sentido criar uma classe com um construtor. 
// Classe é um objeto que pode ser instanciado =)

// Vamos utilizar o formato ES6 para refatorar a constante pessoa.

// Quero criar as variáveis pessoa2 e pessoa3 com as mesmas propriedades, mas alterando os valores de nome, sobrenome, altura e peso








console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Pessoa

class Pessoa {
  constructor (name, surname, age, walking = true, distance = 0){
    this.nome = name
    this.sobrenome = surname
    this.idade = age
    this.andando = walking
    this.caminhouQuantosMetros = distance
  }

  fazerAniversario(){
    this.idade++
  }

  andar(metrosCaminhados) {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  }

  parar() {
    this.andando = false 
  }

  apresentacao() {
  
    const anos = (this.idade === 1) ? 'ano' : 'anos';
    const metros = (this.caminhouQuantosMetros === 1) ? 'metro' : 'metros';
    
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}




// O this também não pega em arrow functions também
// As funções não precisam ser declaradas com os dois pontos de propriedade, mas continuam
// sendo propriedades da classe
// Não usar arrow function nas classes






console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5]

// Acessando elementos pela posição do array

console.log(numbers.length);
console.log(lista[2]);





// Informe o tamanho de cada array
console.log(lista.length);

const primeiro = lista[0];
console.log(primeiro);




// Faça a desestruturação do array

const [primeiroItem, segundoItem, terceiroItem] = lista;

console.log(primeiroItem, segundoItem, terceiroItem);



// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const db = require('./db');

console.log(db);

// No arquivo db há um objeto que tem uma única propriedade, e esta propriedade se chama tias
// E o seu valor é uma a lista de objetos tias


const { tias } = db; // Então aqui pegamos a propriedade tias do objeto maior (o  module.exports)

console.log(tias);

console.table(tias);

console.table(lista);



// O console.table plota arrays (de qualquer coisa) em tabelas, muito legal.



console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO (EM ARRAYS)
console.log('Métodos iteração ')


// Iterações nos arrays
let i = 0

while (i < numbers.length) {
  const dobro = numbers[i] * 2
  console.log(dobro)
  i++
}

// 18 4 10


// for... of: muito legal! Basicamente: para cada item do meu array, faça isso usando ele
// O array não é alterado. A não ser que isso seja feito voluntariamente, acredito.
for (number of numbers) {
  const dobro = number * 2;

  console.log(dobro)
}
 // 18 4 10













// Mostre a tabela das tias pelo console.table()






console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console. Foi feito logo acima




const tiasSP = tias.filter(item => item.local === "SP");

console.table(tiasSP);

/*  
Agora sabemos que o que vai dentro do filter é uma função callback, e além disso, neste caso, a função está escrita da forma de arrow function!

função antiga:
function nome (item){
  return item.local === "SP";
} 

arrow function:
const nome = item => item.local === "SP";

O método filter para cada true recebido da callback, pega o elemento e bota numa nova lista e retorna no final a nova lista com todos os elementos que fizeram a callback retorna true. Ou seja, ele é um filtro.


*/






const numerosImpares = numbers.filter(item => item % 2 !== 0)

console.log(numerosImpares) // [9, 5] OK



console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.

/*
Função na forma antiga

function cuidar(tia){
  if (tia.filhos <= 2){
    return tia.cuidouDeMim = true;
  } else{
    return tia.cuidouDeMim = false;
  }
}


*/

// cuidar em arrow function 
const cuidar = tia => (tia.filhos <= 2) ? tia.cuidouDeMim = true : tia.cuidouDeMim = false;



const tiasCuidou = tias.map(cuidar); 
console.table(tias);
console.log(tiasCuidou);


// Importante demais: O método map modifica diretamente o nosso array, adicionando o que quisermos!

// Lembrando, o parâmetro que a callback recebe, é o elemento do array SEMPRE




console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]

const comparar = (a, b) => {
  if (a < b) { //  mantenho a como primeiro e b vem depois
    return -1
  } else if (a > b) { // primeiro vem b e depois vem a 
    return 1
  } else { // se a e b forem iguais, mantém a mesma ordem
    return 0
  }
}


// 9 e 2 -> retorna valor positivo -> 9 - 2 = 7 positivo
// 2 e 5 -> retorna valor negativo -> 2 - 5 = - 3 negativo
// 2 e 2 -> retorna valor zero -> 2 - 2 = 0
// Então se eu retornar a - b, já dá certo
// Essa demonstração foi para provar que a subtração já retorna uma forma de ordenação
// a sendo o primeiro e b o segundo elemento, a - b retorna a ordem crescente, 
// enquanto b - a retorna decrescente!



/*
const comparar2 = (a, b) => {
  return a - b;
}

const comparar3 = (a, b) => a - b;

*/

//numbers.sort(comparar2); // o sort modifica o array, não retorna outro!!

numbers.sort((a, b) => a - b);
console.log(numbers); // usei o comparar e alterei para comparar2 e usei de novo, depois mudei para ES6 e
// usei de novo kkk



// Refatore a função comparar e ordene numbers em ordem crescente







// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)
/*
//forma inicial
function ordenarTiasPorIdade(tia1, tia2){
  return tia2.idade - tia1.idade;
}*/

tias.sort((tia1, tia2) => tia2.idade - tia1.idade);

console.table(tias); // OK

/*
Uma nota sobre o find: 

O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined. 

Útil para quando queremos apenas um elemento que satisfaça uma condição 

*/


console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers
/*function somarTodos(acumulador, item){
  return acumulador + item;
}*/

//const somaDeTodos = numbers.reduce(somarTodos, 10); // segundo parametro acumulador: valor adicionado ao resultado

const somaDeTodos = numbers.reduce((acumulador, item) => acumulador + item, 10); 
console.log(somaDeTodos);









// Some a quantidade de netos que vovó possui.

/*function somarNetos(acumulador, item){
  return acumulador + item.filhos;
}

const qtdeNetos = tias.reduce(somarNetos, 1);
console.log(qtdeNetos);*/

const qtdeNetos = tias.reduce((acumulador, item) => acumulador + item.filhos, 1);
console.log(qtdeNetos);

/*
Sobre Spread operator
Podemos "copiar" todas as propriedades existentes dentro de um objeto e repassá-los para num novo objeto
*/



// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')