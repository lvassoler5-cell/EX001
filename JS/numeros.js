//jeitos para declarar Numbers
const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)

console.log(Number.isInteger(peso2)) //verifica se o número é inteiro


const avaliacao1 = 9.871
const avaliacao2 = 9.321

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) //Calcula primeiro o parenteses e depois a divisão

console.log(media)

console.log(media.toFixed(2))  //quantas casas decimais quero imprimir, nesse caso seria de 9.492875 para 9.49
console.log(media.toString())  //transforma o valor em string

console.log(media.toString(2)) //colocando número no toString, ele passa o valor para binário
console.log(typeof media.toString)

//number com n minúsculo é o valor do dado
//Number com N maiúsculo é a função. Ex.: const num1 = Number("1.2")