const prompt = require("prompt-sync")()

const lista = ["Ferrari R$20000", "Porshe R$30000", "Mercedes R$40000", "S10 R$1000", "Chevrolet Onix R$5000", "Vectra R$6000"]

const menorValor = lista.slice(3, 6)

console.log(menorValor)














/*const filmes = new Array()
for(let i = 0; i < 4; i++){
  let novoFilme = prompt("Digite o nome do filme: ")
  filmes.push(novoFilme)
}

const series = new Array()
for(let i = 0; i < 4; i++){
  let novaSerie = prompt("Digite o nome da serie: ")
  series.push(novaSerie)
}

const lista = series.concat(filmes)

console.log(lista) */ 

// ------------------------------------------------------

//COMANDO SLICE

/* const marcas = ["Nike", "Adidas", "Pandora", "Vivara", "PUMA", "Rolex"]

const novoArray = marcas.slice(3, 5) // o comando slice vai cortar um array e pegar os elementos solicitados e formar um novo array

console.log(novoArray) */



//COMANDO SPLICE

/* const marcas = ["Nike", "Adidas", "Pandora"]
marcas.splice(1, 0, "Vivara", "Rolex") // com o comando .splice podemos adicionar elementos em lugares especificos do nosso arraw (o 1 é a posição onde vai adicionar o elemento e o 0 é se ele vai excluir algum elemento)

console.log(marcas) */



//COMANDO CONCAT

/*const nomeMarcas1 = ["Nike", "Adidas", "PUMA"]
const nomeMarcas2 = ["Dior", "Bolha", "Tiger"]

const novoArray = nomeMarcas1.concat(nomeMarcas2) // atraves do concat podemos somar/juntar os itens dos arrays selecionados
console.log(novoArray)*/




//COMANDO .POP E .SHIFT

/* const nomeMarcas = new Array("Nike", "Adidas", "Gucci", "prada", "balenciaga")

const elementoRemovido = nomeMarcas.pop() // o comando .pop fora do console.log exclui a ultima marca e não exibe. E para exibir o elemento removido basta salva-lo em uma variavel.
console.log("Listagem final: ", nomeMarcas/*nomeMarcas.pop()) // o comando .pop dentro do console.log imprime somente o ultimo elemento do array
//console.log(elementoRemovido)
// Podemos substituir o comando .pop pelo comando .shift onde vai remover o primerio item do array. */



//COMANDO .PUSH E ESTRUTURA DE REPETIÇÃO DO WHILE

/* const nomeMarcas = new Array();
let i = 0
do{
  let marca = prompt("Digite o nome da marca: ")
  nomeMarcas.unshift(marca) // o comando .push sempre adicionar mais um elemento ao final do array, já o unshift ele sempre adiciona no inicio do array
  i++ 
}while(i < 5)

console.log(nomeMarcas) */

//CRIAÇÃO DE OBJETO DETRO DO ARRAY E ESTRUTURA DE REPETIÇÃO FOR

/*const alunos = new Array();
for (let i = 0; i < 5; i++){
  let novoAluno = new Object() // assim criamos um objeto dentro de um array
  novoAluno.nome = prompt("Digite o nome do Aluno: ")
  novoAluno.nota = Number(prompt("Digite a nota do aluno: "))
  alunos[i] = novoAluno;
}

console.log("Listagem final de alunos: ", alunos)
console.log("Quantidade total de alunos: ", alunos.length)
console.log("Ultimo aluno: ", alunos[alunos.length - 1])*/




//ESTRUTURA DE REPEDIÇÃO FOR PARA ATRIBUIÇÃO DE ELEMENTOS DE FORMA DINAMICA

/*const alunos = new Array(); 
for(let i = 0; i < 5; i++){
let novoAluno = prompt("Digite o nome do aluno: ")
alunos[i] = novoAluno // aqui estamos utilizando o conceito de atribuição de elementos onde o usuario vai digitar o nome do aluno e vai acresentando esses nomes no array de forma dinamica
}

console.log(alunos)
console.log("Quantidade total de alunos: ", alunos.length) // alunos.length mostra o tamanho total do meu array
console.log("Ultimo Aluno: ", alunos[alunos.length - 1]) // vai pegar o tamanho total do arraw e procurar o aluno que fica na posição de total do array menos 1 no caso o ultimo aluno */
 

//DECLARAÇÃO DE ARRAY


//const alunos = ["João", "Lucas", "Ana", "Marcos", "Helena"] // podemos declarar um new array direto apenas colocando os dados entre colchetes 
//let primeiroAluno = alunos[0] // dessa forma chamamos um elemento dentro de um array

//alunos[0] = "Henrique" // Utilizamos esse techo de codigo para substituir elementos que estão dentro de um array

