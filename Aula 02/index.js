const prompt = require("prompt-sync")();

//let n1 = Number(prompt("Primeiro Numero: ")); //o comando number passa a string para numeros 
//console.log("Ação do decremento: ", n1--)
//console.log("Apos o decremento: ", n1)
//console.log("Decremento Imediato: ", --n1)

//let nome = prompt("Nome: ")
//let sobrenome = prompt("Sobrenome: ")

//console.log("Seu nome completo é:", nome + " " + sobrenome)

let velocidade = Number(prompt("Velocidade: "));
let tempo = Number(prompt("Tempo em horas: "));
let distancia = velocidade * tempo;

console.log("Distancia percorrida: ", distancia)


