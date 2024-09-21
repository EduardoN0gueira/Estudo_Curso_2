const valores = [1, 2, 3, 6, 13]
// arrays declarado de forma literal

console.log(valores)
console.log(valores[0], valores[3])
// assim conseguimos selecionar os valores de cada indice
valores[4] = 10807124
valores[15] = 1.8
// trocando valores dentro do array
console.log(valores[4])
console.log(valores)
// o javaScript vai adcionar itens e avisar
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)
//push adciona itens no array
console.log(valores.pop([0, 1, 2]))
//pop remove valores dentro do array
delete valores[0]
console.log(valores)