//armazenando funções dentro de uma variável
// nesse caso temos uma função anonima, onde não é atribuido nome
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(1, 1)

// armazenando funções arrow dentro de uma variável

const soma = (a, b) => {
    return a + b
}
console.log(soma(1, 2)) // veja que na arrow function é nescessário console

// retorno implícito(só pode ser usado quando existe apenas uma linha de código)
// nessas 2 expressões não são nescessários o return, por possuír apenas uma linha

const subtracao = (a, b) => a - b // aqui temos apenas uma linha, sem ser 1 bloco de código
const umaLinha = a => a + 20// aqui não é nescessário nem os parênteses

console.log(subtracao(10, 20))
console.log(umaLinha(10))