import Redis from 'ioredis'
import { StudentModel } from '../models/student-model.js'
import { db } from '../config/db-connection.js'

const redis = new Redis();

const getStudentsFromDB = async() =>{
    return await StudentModel.findAll()
};

const getStudentsWithRedis = async() =>{
    const cacheKey = 'students:all';

    const cached = await redis.get(cacheKey);

    if(cached) {
        console.time('consulta con redis (desde cache)')
        const parsed = JSON.parse(cached);
        console.timeEnd('consulta con redis (desde cache)')
        return parsed
    }

    const students = await getStudentsFromDB();

    await redis.set(cacheKey, JSON.stringify(students), 'EX', 60)
    return students
}

const getStudentsWithoutCache = async() => {
    console.time('consulta sin cache')
    const students = await getStudentsFromDB();
    console.timeEnd('consulta sin cache')
    return students
}

const test = async()=>{
    await db.authenticate()

    await getStudentsWithoutCache()
    await getStudentsWithRedis()
    await getStudentsWithRedis()
}

test()


/*
consulta sin cache: 20.504ms
consulta con redis (desde cache): 0.222ms
*/