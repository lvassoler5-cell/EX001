const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {  //push adiciona o loop no array, chamar o array para dentro do loop
        console.log(i)
    }) //adicionar o loop no array, chamar o array para dentro do loop
}

funcs[2]()
funcs[8]()

//let tem escopo de função, então ele vai dar o número exato na posição que eu pedir

// !função closure quer dizer que a função tem consciência do local que foi definida