const prompt = require("prompt-sync")();

let jogador01 = prompt("Escreva o nome do primeiro jogador: ")
let jogador02 = prompt("Escreva o nome do segundo jogador: ")
let clube01 = prompt("Digite o atual clube onde o primerio jogador trabalha: ")
let clube02 = prompt("Digite o atual clube onde o segundo jogador trabalha: ")

console.log("DADOS DE JOGADORES")
console.log("Jogador", jogador01, "atualmente jogando no", clube01)
console.log("Jogador", jogador02, "atualmente jogando no", clube02)