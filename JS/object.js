const prod1 = {} //object é definido por chaves
prod1.nome = "celular" //!pode definir valores para ele
prod1.preco = 3421.23
prod1['Desconto legal'] = 0.40 //mesma coisa dos outros, mas utilzei chaves para definir
//!evitar nomes/atributos com espaço

console.log(prod1)

//? Outra forma de criar um object

const prod2 = {
    nome: 'Camisa Polo',
    preco: 93.32,
    obj: {
        blabla: 1,
        obj: {
            PlayU: true  //criar infinitos objects
        }
    }
}

console.log(prod2)