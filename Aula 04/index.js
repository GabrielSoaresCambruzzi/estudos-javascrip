const prompt = require("prompt-sync")();

let nome = prompt("Qual seu nome: ")
let pontuação = prompt("Digite a pontuação da temporada: ")
let anos = prompt("Quantos anos de carreira: ")
let ass = prompt("Quantas asssistencias na temporada: ")
let qualifacado = pontuação >= 50 && anos > "3" && ass >= 30 

console.log("Jogador ", nome)
console.log("Sua pontuação da temporada foi de ", pontuação)
console.log("Você tem ", anos, "anos de carreira")
console.log("Seu total de assistencias na temporada foi de ", ass)
console.log("Qualificado para melhor jogador: ", qualifacado)
