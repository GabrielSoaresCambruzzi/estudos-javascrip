const prompt = require("prompt-sync")()

const funcionarios = [
{
  nome: "Marcos",
  salario: 2000,
},
{
  nome: "Maria",
  salario: 5000,
},
{
  nome: "Gabriel",
  salario: 20000,
},
]




//INTERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO FIND

/*
const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },
]

const alunoNota8 = alunos.find(function(item){ // o comando find acha o elemento que condiz com a solicitação 
  return item.nota ===8
})

console.log(alunoNota8) */




//-----------------------------------------------------------

//INTERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO INDEXOF

/*
const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },
]

const notas = alunos.map(function(item){ // separamos as notas em um novo array
  return item.nota
})

const nota8 = notas.indexOf(8) // indexOf mostra a posição onde a confição que foi citada. Como separamos o array de notas anteriormente podemos fazer ele de mandeira simplificada. Para não fazer de forma simplificada podemos utilizar o findIndex

console.log(nota8) */





//-----------------------------------------------------------

//INTERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO SOME 

/*
const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },
]

const mediaBaixa = alunos.some(function(item){ //some verifica se algum item condiz com a condição e retorna verdadeiro ou falso
  return item.nota < 7
})

console.log(mediaBaixa)*/




//----------------------------------------------------------------

//INTERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO EVERY

/*
const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },
]

const NotasMaioresQueMedia = alunos.every(function(item){ //o every percorre todos os elementos e verifica se todos são verdadeiros ou não(boolean)
  return item.nota >= 7
}, 0)

console.log(NotasMaioresQueMedia) */




//---------------------------------------------------------------------------

// ITERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO REDUCE

/*
const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },

const soma = alunos.reduce(function(total, item){ // o reduce criar um novo array passando por cada elemento e reduzindo todos os valores para um unico valor. Muito utilizado para operações matematicas.
  return total + item.nota
}, 0) // sempre que estamos fazendo um array com objeto que são numero e queremos fazer alguma interação com esses numero exemplo a soma, precisamos declar no final a onde que ele vai começar

console.log(soma) */

//----------------------------------------------------------------------------

// INTERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO FILTER

/*
const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },
]

const novosAlunos = alunos.filter(function(item){ //Cria um novo array filtrando itens de acordo com a condição que estabelecemos 
  return item.nota >= 8;
})

console.log(novosAlunos) */



//---------------------------------------------------------------------

// INTERAÇÃO COM ARRAYS UTILIZANDO A FUNÇÃO MAP

/* const alunos = [
  {
    nome: "Gabriel",
    sobrenome: "Cambruzzi",
    nota: 7,
  },
    {
    nome: "Andre",
    sobrenome: "Souza",
    nota: 8,
  },
    {
    nome: "Alan",
    sobrenome: "Campos",
    nota: 9,
  },
]


const novosAlunos = alunos.map(function(item) { // cria um novo array, realizando função em cada elemento do array
  return {
    ...item, //copia todas as propriedade do item para o novo objeto
    nomeCompleto: item.nome + " " + item.sobrenome
  }
})

console.log(novosAlunos) */