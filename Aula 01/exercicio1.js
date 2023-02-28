const prompt = require("prompt-sync")();

let nome = prompt("Escreva o nome do Aluno: ");
let idade = prompt("Idade do Anulo: ");
let matricula = prompt("Digite a Matricula do Aluno: ");

console.log("DADOS DO ALUNO");
console.log("Aluno: ", nome);
console.log("Idade: ", idade);
console.log("Número da Matricula: ", matricula);