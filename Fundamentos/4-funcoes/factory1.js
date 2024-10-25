// função factory é uma função que retorna um objeto

const prod1 = {
    nome: '...',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco: 4115
}

// segue abaixo o exemplo de uma factory simples

function criarPessoa() {
    return {
        nome: 'Eduardo',
        sobrenome: 'Nogueira'
    }
}

console.log(criarPessoa())