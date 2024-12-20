// construtor usando class

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Eduardo')
p1.falar()


// factory usando function
const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('João')
p2.falar()