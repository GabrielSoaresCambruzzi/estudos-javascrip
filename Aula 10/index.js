const prompt = require("prompt-sync")();










//INTERAÇÃO COM ARRAY UTILIZANDO SORT EM ARRAY COM OBJETOS

 /* const itens = [
 {
  nome: "Arroz",
  valor: 12.99,
 },
 {
  nome: "Feijão",
  valor: 5.2,
 },
  {
  nome: "Carne",
  valor: 90.80
 },
  {
  nome: "Sabão",
  valor: 7.99
 }
 ];

 const ordenado = itens.sort(function(e1, e2){ //assim conseguimos fazer o sort personalizado de acordo com a propriedade do objeto.
  return e1.valor - e2.valor
 })
console.log(ordenado) */




 //---------------------------------------------------

//INTERAÇÃO COM ARRAY UTILIZANDO SORT DE NÚMERO PARA FAZER FORMA DESCRECENTE E CRESCENTE 

/* const numero = [1, 5, 8, 2, 9, 29, 3]
numero.sort(function(n1, n2){ // podemos ordenar numero de forma cresente utlizando essa linha de codigo em um array simples. Se alterar n2 na frente do n1 ficaria em ordem decresente
  return n1 - n2
})
console.log(numero) */



//------------------------------------------------

// INTERAÇÃO COM ARRAY UTILIZANDO O FOREACH

 /*const itens = [
 {
  nome: "Arroz",
  valor: 12.99,
 },
 {
  nome: "Feijão",
  valor: 5.2,
 },
  {
  nome: "Carne",
  valor: 90.80
 },
  {
  nome: "Sabão",
  valor: 7.99
 }
 ];

 itens.forEach(function(elemento, index){ // o foreach nos permite a interação com cada elemento e index
  elemento.valor = elemento.valor - 2; // aqui vamos estar pegando o valor e descontando 2 reais
  console.log(itens)
 }) */




//----------------------------------------------

//INTERAÇÃO COM ARRAY UTILIZANDO O COMANDO FOR OFF

/* const nomes = [
  {
  nome: "Gabriel",
  sobrenome: "Soares"
  },
  {
    nome: "Laura",
    sobrenome: "Luchez",
  }
]

for (let pessoa of nomes){ // o for of realiza a interação para cada elemento do array
  const nomeCompleto = pessoa.nome + " " + pessoa.sobrenome
  console.log(nomeCompleto)
} */




//----------------------------------------------

// INTERAÇÃO COM ARRAY UTILIZANDO O COMANDO FOR

/* const nomes = [
  {
  nome: "Gabriel",
  sobrenome: "Soares"
  },
  {
    nome: "Laura",
    sobrenome: "Luchez",
  }
]
const notas = [7, 8, 9, 3, 4.6]
for(let i = 0; i < nomes.length; i++){ //Para mostrar todos os elementos de um OBJETO podemos utlizar o comando for e utiliza menor de .length
  let nomeCompleto = nomes[i].nome + " " + nomes[i].sobrenome // Assim conseguimos imprimir nome e sobrenomes que estão dentro de um objeto/array
  console.log(nomeCompleto)
}
*/
