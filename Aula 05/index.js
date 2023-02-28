const prompt = require("prompt-sync")();

let nomeSelecao = prompt("Nome da seleção ")
switch(nomeSelecao){
  case 'brasil': {
    console.log("Maior campeão")
    break
  }
  case 'italia': {
    console.log("4 Titulos")
    break
  }
  case 'alemanha': {
    console.log("3 Titulos")
    break
  }
  case 'argentina': {
    console.log("La mano de Dios")
    break
  }
  default: {
    console.log("Seleção não encontrada")
  }
  
}
  

