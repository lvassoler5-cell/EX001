let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //verificaria se 1 é true or false, ! é negação, e !! é negação duas vezes, então é concordância

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //!sem espaço no meio significa Number
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //!sem espaço no meio significa String
console.log(!!null)
console.log(!!NaN) //NaN = Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' ')) //? || significa OU // e esta sentença é true por ' ' com espaços

console.log(('' || null || 0 || 'epa')) //retornará o unico valor verdadeiro que ele encontrou


let nome = ''
console.log(nome || 'Desconhecido') //caso a variável esteja vazia, ele vai imprimir Desconhecido