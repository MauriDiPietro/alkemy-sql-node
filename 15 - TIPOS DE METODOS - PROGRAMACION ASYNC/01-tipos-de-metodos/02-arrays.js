const numeros = [10, 20, 30, 40, 50]
const letras = ['a', 'b', 'c', 'd', 'e']

numeros.push(60)
// console.log(numeros);

numeros.pop()
// console.log(numeros);

letras.unshift('z')
// console.log(letras);

letras.shift()

// console.log(letras);

const combinados = numeros.concat(letras)
// console.log(combinados)

console.log(letras.join('-'));

console.log(numeros.slice(1, 3));   //no modifica el array original
numeros.splice(1, 2); //modifica el array original

console.log(numeros);

console.log(letras.indexOf('b'));

console.log(numeros.includes(100)); 

const dobles = numeros.map(n => n * 2)
console.log(dobles);

const mayores = numeros.filter(n => n > 30)
console.log(mayores)

const total = numeros.reduce((acc, n) => acc + n, 0)
console.log(total);

numeros.forEach(n => console.log(n))

console.log(numeros.find(n => n > 10))




