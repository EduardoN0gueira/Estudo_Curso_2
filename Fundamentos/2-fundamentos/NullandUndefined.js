const a = {nome: "Teste"}// a não é propriamente o objeto, é apenas o indicador
console.log(a)           // a apenas aponta o endereço de {nome: "Teste"}

const b = a// agora b aponta para o mesmo lugar que a, portanto, se mudarmos o que tem
console.log(b) // dentro de b, a mudança ocorrerá em a também

b.nome = "Teste 2"
console.log(a) // isso é chamado de atribuição por referência

// no seguinte exemple não ocorrerá isso por usarmos valores primitivos da linguagem

let c = 1
let d = c
d++
console.log(c)
console.log(d)// como visto ele 

let valor
console.log(valor)

valor = null// geralmente é usado para zerar o conteudo de uma variável
console.log(valor)

//exemplo de undefined abaixo.

const produto = {}
console.log(produto.preco)// preco ainda não foi definido
console.log(produto)

produto.preco = null
produto.preco = undefined