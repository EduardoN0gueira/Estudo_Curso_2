

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const nome1 = pessoa.nome  //forma padrão de tirar algo de dentro de um objeto
console.log(nome1)

const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa// aqui trocamos até o nome de uma variável
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // aqui, por padrão será atribuído o boolean true
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep = 7349349 }} = pessoa
console.log(logradouro, numero, cep)