
/**
 * Método para sumar dos números
 * @param {number} a - primer numero a sumar
 * @param {number} b - segundo numero a sumar
 * @returns {number} - resultado de la suma
 * @example
 * import { sumar } from './....js'
 * sumar(1, 2) // 3
 */


const sumar = (a, b) => {
    return a + b;
}

sumar(1, 2) // 3

/**
 * Representa un usuario
 * @typedef {Object} Usuario
 * @property {string} [nombre] - Nombre del usuario
 * @property {number} edad - Edad del usuario
 */



/**
 * @type {Usuario}
 */
const usuario = {
    nombre: 'Juan',
    edad: 30
}

/* ------------------------------------ - ----------------------------------- */

/**
 * Obtiene datos de una API
 * @async
 * @function
 * @returns {Promise<Array>} - Lista de usuarios
 */
const getData = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
}