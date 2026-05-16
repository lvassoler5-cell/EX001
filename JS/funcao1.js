//Basicamente, função recebe o comando e realiza ele, podendo ser chamado em qualquer lugar para realizar aquilo que tem nele
//Existem funções anônimas mas será mais para frente
//Como uma receita de bolo, ele recebe as instruções e a função realiza ela
//Função é a coisa mais importante de um código JavaScript, então colocar nomes objetivos é essencial

//Estrutura
//! function [nome da função](Parâmetros/variáveis) {
//! }

//Função sem retorno
function imprimirSoma(a, b) { //criei as variáveis a e b
    console.log(a + b)
}

imprimirSoma() //chamando a função
imprimirSoma(2, 3) //definindo valores para as variáveis para que ele consiga fazer a conta
imprimirSoma(2) //NaN pois só tem um número
imprimirSoma(2, 10, 3, 4, 5, 6, 7, 8) //vai pegar apenas os dois primeiros

//?Função com retorno
function soma(a, b = 0) { //defini o valor de b = 0, caso ele não seja definido depois
    return a + b
} //!Retornei a função, ou seja, volto o resultado dela para outro lugar

console.log(soma(2,5)) //!Retornei para cá
console.log(soma(2)) //vai dar certo, pois defini b = 0, então a = 2
