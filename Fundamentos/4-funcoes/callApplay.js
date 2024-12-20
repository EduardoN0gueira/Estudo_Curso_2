function getPreco(imposto = 0, moeada = 'R$') {
    return `${moeada} ${this.preco * (1 - this.desc) * (1 + imposto)}`
   
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1

// aqui o resultado será um NaN porque o this não está em contexto global
console.log(getPreco())
console.log(produto.getPreco())


const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$ '))
console.log(getPreco.apply(carro, [0.17, '$ '])) // no apply os parâmetros precisam estar dentro de um array