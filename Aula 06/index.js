const prompt = require("prompt-sync")()

function entrarLibero(altura, defesa, pulo){
  if (altura >= 180 && defesa == "otima" && pulo >= 270)
  {
    return true
  }
  return false
}

console.log("Cadastre-se para vaga de libero")
let altura = Number(prompt("Qual sua Altura: "))
let defesa = prompt("Classifique sua defesa em: Bom, Otimo e Ruim: ")
let pulo = Number(prompt("Qual altura do seu pulo: "))

let resultado = entrarLibero(altura, defesa, pulo)
console.log("Você conseguiria entrar como libero: ", resultado)




