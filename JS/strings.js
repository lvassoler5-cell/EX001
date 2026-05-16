const escola = "Cod3r"

console.log(escola.charAt(2))  //descobrir qual letra está em tal posição, neste caso, 2. A primeira letra é 0
console.log(escola.charCodeAt(3)) //valor da letra em tal posição na tabela UNICODE, neste caso, é 51   
console.log(escola.indexOf('3')) //vai dar a posição do 3 na frase, ou de qualquer letra que colocar alí

console.log(escola.substring(1)) //vai imprimir toda a constante escola a partir da posição 1, ficaria od3r
console.log(escola.substring(0, 3))  //vai imprimir toda a constante escola a partir da posição 0, até a posição 3, então ficaria Cod

console.log('Escola '.concat(escola).concat("!")) //criar a frase utilizando dois tipos de aspas
console.log(escola.replace(3, 'e')) //troquei o número 3 por e na frase

console.log('Ana, Maria, Pedro'.split(','))//cria um array com as informações strings