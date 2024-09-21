const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 1.11111111

console.log(peso1, peso2)
console.log(Number.isInteger(peso3))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso1))
console.log(peso3.toFixed(2))
console.log(peso3.toString(2))
console.log(typeof(peso3))

//isInteger retorna true or false para inteiro
//toFixed deixa apenas o numero selecionado de casas decimais após a virgula
//toString(2) tranforma em binário