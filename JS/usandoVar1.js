{
    {
        {
            {
                var sera = 'Sera??'
                console.log(sera)
            }
        }
    }
}

console.log(sera) //var pode ser usada fora mesmo sendo declarada dentro de um bloco de código


//! Ela só não pode ser utilizada quando criada dentro de uma função
function teste() {
var local = 123
}

teste()
console.log(local)