const prompt = require('prompt-sync')(); // instalação da biblioteca

let nome = prompt('Qual é o seu nome? '); // let é uma declaração de variavel que pode ser editada, prompt vai ser o dado de entrada onde permite que o usuario entre com um dado e salve na veriavel que foi declarada
let idade = prompt("Digite sua idade: ");
let contrato = true; // true e false serve para a gente dizer se uma cituaçõa é verdadeira ou falsa
let pagamento = null; // null serve para a gente falar que algo é vazio
let cargo; // Uma variavel vazia é = a indefinido

console.log("-----------------------------------");
console.log("Dados do ficha: ");
console.log("-----------------------------------");
console.log("Nome do funcionário:", nome); // console.log é o comando de saída para escrever na tela
console.log("Idade: ", idade);
console.log("Já foi contratado: ", contrato);
console.log("Pagamento a receber: ", pagamento)
console.log("Cargo: ", cargo)


