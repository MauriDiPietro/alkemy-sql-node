const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const operacion = (a, b, cb) => {
    console.log(cb(a, b));
}

operacion(10, 5, suma);
operacion(10, 5, resta);

/* ------------------------------------ - ----------------------------------- */

setTimeout(()=>{
    console.log('se muestra este msj despues de 3 seg');
}, 3000)

/* ------------------------------------ - ----------------------------------- */

const saludo = (name) => `Hola ${name}`;

const funcionTest = (cb, name) => cb(name);

console.log(funcionTest(saludo, 'Juan'));

/* ------------------------------------ - ----------------------------------- */

array.find((e)=>e.id === id)

arrayBuffer.map((e)=>e.id === id)

array.filter((e)=>e.id === id)
