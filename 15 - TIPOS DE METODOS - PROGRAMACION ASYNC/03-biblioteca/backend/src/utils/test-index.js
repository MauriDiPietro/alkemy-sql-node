import { db } from "../config/db-connection.js";

const test = async() =>{
    const [results] = await db.query("EXPLAIN SELECT * FROM Students WHERE email = 'Emilio43@hotmail.com'");
    console.log(results);

    /*
    [
  {
    id: 1,
    select_type: 'SIMPLE',
    table: 'Students',
    type: 'const',              !--> significa que Solo hay una fila que coincide, y el optimizador 
                                            puede tratarla como una constante"
                                            Es el mejor tipo de acceso posible
    possible_keys: 'email',
    key: 'email',
    key_len: '257',
    ref: 'const',
    rows: '1',
    Extra: ''
  }
]
    */

    const [results2] = await db.query("EXPLAIN SELECT * FROM Students WHERE firstName = 'Lilia'");
    console.log(results2);
    /*
    [
  {
    id: 1,
    select_type: 'SIMPLE',
    table: 'Students',
    type: 'ALL',            !---> HACE LA LECTURA DE TODA LA TABLA
    possible_keys: null,
    key: null,
    key_len: null,
    ref: null,
    rows: '100',
    Extra: 'Using where'
  }
]
    */
}

test()

//! ---> --DIAP 83-- ODT