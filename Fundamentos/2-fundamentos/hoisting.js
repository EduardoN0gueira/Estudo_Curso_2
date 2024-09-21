console.log('a = ', a)
var a = 10
console.log('a = ', a)


function teste(){
    console.log('a = ', a)
    var a = 10
    console.log('a = ', a)
}

teste()
// isso ocorre dentro da função tbm, portanto ao criar variáveis dentro de funções ficar ligado na ordem!!

console.log("b = ", b)
let b = 10
console.log("b = ", b)
// hoisting não funciona quando usamos let