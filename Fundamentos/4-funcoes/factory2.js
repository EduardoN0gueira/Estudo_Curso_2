function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1 
    }
}
// lembrete, você tambem pode retornar funções, não só dados
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

