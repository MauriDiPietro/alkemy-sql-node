import { db } from "../config/db-connection.js";
import { StudentModel } from "../models/student-model.js";

const test = async() => {
    console.time('consulta')
    const results = await db.query("EXPLAIN SELECT * FROM test.students WHERE email = 'Adan87@hotmail.com'")
    console.timeEnd('consulta')
    // console.log(results);
     //consulta-indexada: 99.354ms / 128.161ms
     //consulta sin index: 253.345ms

    /*
     {
      id: 1,
      select_type: 'SIMPLE',
      table: 'students',
      type: 'const',
      possible_keys: 'email',
      key: 'email',
      key_len: '257',
      ref: 'const',
      rows: '1',
      Extra: ''
    }
    */
    
    
    const results2 = await db.query("EXPLAIN SELECT * FROM test.students WHERE firstName = 'Juan'")
    // console.log(results2);
    
    

    /*
     {
      id: 1,
      select_type: 'SIMPLE',
      table: 'students',
      type: 'ALL',
      possible_keys: null,
      key: null,
      key_len: null,
      ref: null,
      rows: '100',
      Extra: 'Using where'
    }
    */

    // console.time('consulta2')
    const results3 = await db.query("EXPLAIN SELECT * FROM test.students WHERE id = '1'")
    // console.log(results3);
    // console.timeEnd('consulta2')

    /*
     {
      id: 1,
      select_type: 'SIMPLE',
      table: 'students',
      type: 'const',
      possible_keys: 'PRIMARY',
      key: 'PRIMARY',
      key_len: '4',
      ref: 'const',
      rows: '1',
      Extra: ''
    }
    */

    // await StudentModel.count({
    //     where: { email: 'Pilar26@hotmail.com' }
    // })
}
test()