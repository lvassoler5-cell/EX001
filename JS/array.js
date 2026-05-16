const valores = [7.7, 6.6, 3.6, 8.4] //virgula é o separador dos elementos
console.log(valores[0]) //pegar o valor na posição 0 (primeira posição)
console.log(valores[1], valores[3]) //pegar valores de duas posições
console.log(valores[4]) //vai dar undefined pois não tem um elemento na posição 4

valores[4] = 10 //define o valor para uma nova posição
console.log(valores) //adiciona o position 4 no final do array

valores[10] = 20
console.log(valores) //falaria que estaria faltando 5 elementos e citaria o 20 (decima posição) ao final
console.log(valores.length)  //vai falar quantos elementos tem no array

//valores.push() //!adicionar objeto no array
valores.push({id: 3}, false, null, 'teste')

console.log(valores.pop()) //tira e cita o ultimo valor do array
delete valores[0] //deletar valor de tal posição do array

console.log(typeof valores) //array é tipo object