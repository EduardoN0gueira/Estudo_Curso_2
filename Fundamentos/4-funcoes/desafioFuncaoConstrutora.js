function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}?`)
    }
}

const p1 = new Pessoa('Eduardo')
p1.falar()

// 

function Pessoa(nome) {
    
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa('Eduardo')
p2.falar()
console.log(p2.nome) // p2.nome não existe