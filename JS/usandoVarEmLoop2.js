const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {  //push adiciona o loop no array, chamar o array para dentro do loop
        console.log(i)
    }) //adicionar o loop no array, chamar o array para dentro do loop
}

funcs[2]()
funcs[8]()

//por var não ter escopo de função, ele gerou o valor de 10