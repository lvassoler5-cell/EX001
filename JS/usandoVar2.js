//! Fuja do escopo global

var numero = 1

{
    var numero = 2
    console.log(`dentro = ${numero}`)
}
console.log(`fora = ${numero}`)

//? Se declarada fora da variável e mudar de parâmetro dentro de uma, vai sobrescrever o parêmetro da declarada fora