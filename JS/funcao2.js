//!Armazenando uma função em uma variável
const imprimirSoma = function (a, b) { //função anônima, ou seja, não possui nome, a variável passa a ser o nome de referência dela
    console.log(a + b)
}

imprimirSoma(2, 3)

//!Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    //console.log(a + b)
    //ou
    return a + b
}

//soma(4, 2)
console.log(soma(4, 2))

//! Retorno implícito
const subtracao = (a, b) => a - b //esta função só pode ter uma linha e semre retorna o resultado
console.log(subtracao(2, 3))

//! No retorno implícito, não precisa de parenteses para os parâmetros
const imprimir2 = a => console.log(a)
imprimir2('legal')