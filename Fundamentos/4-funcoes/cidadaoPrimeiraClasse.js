//Função em JS é First-Class Object (citizens)
//higher-order function

// isso significa que as funções podem ser usadas como dados, uma função pode chamar outra função 

//criar funções de forma literal

function fun1(){}

// armazenar em uma variável

const fun2 = function(){ } 

// armazenar uma função dentro de um array

const array = [function (a, b){ return a + b}, fun1, fun2]
 
console.log(array[0](2, 3))

// armazenar funções dentro de atributos de objetos

const obj = {}
obj.falar = function (){ return 'Opa'}
console.log(obj.falar())

// Passar função como parametro


function run(fun){
    fun() // e aqui a própria função se chama
}

run(function(){ console.log('Executando...')})//aqui não executamos a ação, apenas criamos

// uma função pode retornar/ conter uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
//  OU
const cincoMais = soma(2, 3)
cincoMais(4)