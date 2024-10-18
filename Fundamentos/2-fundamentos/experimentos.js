let a = 3

global.b = 123
this.c = 456
this.d = "Eduardo"
this.e = true

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports)

module.exports

// ao criar uma variável em sem usar let e var ou até mesmo const, vocÊ está criando uma variável em escopo global: segue o exemplo abaixo

abc = 3

console.log(global.abc)

// não faça isso em casa!!!!