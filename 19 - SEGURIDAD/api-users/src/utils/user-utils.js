import bcrypt from 'bcrypt';

/**
 * Realiza el hash de la contraseña
 * @param {String} password 
 * @returns {String}
 */
export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

/**
 * Realiza la comparación de password plana con password hasheada
 * @param {String} passwordPlain 
 * @param {String} passwordHash 
 * @returns {Boolean}
 */
export const isValidPassword = (passwordPlain, passwordHash) => {
    return bcrypt.compareSync(passwordPlain, passwordHash)
}

// console.log(createHash('1234'))
//$2b$10$aN/NjiluqrfQbbldSGy.uOqXOkrh4E.7mIwY9IcWqdy9cAKh817UO

// console.log(isValidPassword('1234', '$2b$10$aN/NjiluqrfQbbldSGy.uOqXOkrh4E.7mIwY9IcWqdy9cAKh817UO'));
