const prompt = require("prompt-sync")();

const aluno = new Object()

aluno.nome = prompt("Nome do Aluno: ")
aluno.matricula = Number(prompt("Número da Matricula"))
aluno.n1 = Number(prompt("Primeira Nota: "))
aluno.n2 = Number(prompt("Segunda Nota: "))
aluno.n3 = Number(prompt("Terceira Nota: "))
aluno.media = function(n1, n2, n3){
  return (this.n1 + this.n2 + this.n2) / 3;
}


console.log("Nome: ", aluno.nome)
console.log("Matricula: ", aluno.matricula)
console.log("Notas: ", aluno.n1, " ", aluno.n2, " ", aluno.n3)
console.log("Media: ", aluno.media(aluno.n1, aluno.n2, aluno.n3))
