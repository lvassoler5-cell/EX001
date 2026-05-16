//!Uma variável não pode receber o valor de um object/array
//TODO: porém outra variável pode mudar o valor do object

const a = {nome: "Oi"}

const b = a  //não recebe o valor
b.nome = "Opa" //muda o valor
console.log(a)


let valor //não inicializada
console.log(valor) //?undefined
//*não atribuir undefined, sempre usar null caso queira zerar o valor de uma variável

valor = null //não tem nenhum valor dentro dela
console.log(valor) //?null
//console.log(valor.toString()) //?dará erro por ser null

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //TODO: evitar atribuir undefined
console.log(!!produto.preco)
//*delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)