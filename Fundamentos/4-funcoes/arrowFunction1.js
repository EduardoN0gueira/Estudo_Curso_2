let dobro = function(a) {
    return 2 * a
}


// arrow function são funções anonimas, portantos devem ser armazenadas em alguma variável
dobro = (a) => { 
    return 2 * a
}

dobro = a => 2 * a // aqui o return é chamado implícitamente

console.log(dobro(Math.PI))


let ola = function() {
    return 'Olá'
}
// refatorando a função de cima
ola = () => 'Olá'
