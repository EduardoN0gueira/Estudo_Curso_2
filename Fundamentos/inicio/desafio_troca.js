let a = 7;
let b = 94;
//criamos uma variável temporário para que o valor de a seja armazenado
let temp = a
a = b
b = temp

// podemos trocar os valores dentro de uma variável também do seguinte modo
[a, b] = [b, a]

console.log(a);
console.log(b);