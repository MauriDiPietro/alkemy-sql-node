import Redis from 'ioredis';
import { StudentModel } from '../models/student-model.js';
import { db } from '../config/db-connection.js';

const redis = new Redis(); 

async function getStudentsFromDB() {
  return await StudentModel.findAll();
}

// Función que usa Redis como caché
async function getStudentsWithRedis() {
  const cacheKey = 'students:all';

  const cached = await redis.get(cacheKey);

  if (cached) {
    console.time('⏱️ Con Redis (desde caché)');
    const parsed = JSON.parse(cached);
    console.timeEnd('⏱️ Con Redis (desde caché)');
    return parsed;
  }

  console.time('⏱️ Con Redis (consultando BD)');
  const students = await getStudentsFromDB();
  await redis.set(cacheKey, JSON.stringify(students), 'EX', 60); // "Expiración en segundos" (EX = expire). 60 seg 
  console.timeEnd('⏱️ Con Redis (consultando BD)');
  return students;
}

// Consulta sin caché
async function getStudentsWithoutCache() {
  console.time('⏱️ Sin caché');
  const students = await getStudentsFromDB();
  console.timeEnd('⏱️ Sin caché');
  return students;
}

async function run() {
  await db.authenticate();
  await db.sync();

  console.log('🚀 Consultas con y sin Redis\n');

  await getStudentsWithoutCache();   // Consulta directa
  await getStudentsWithRedis();      // Primer acceso con Redis (consulta + cachea)
  await getStudentsWithRedis();      // Segundo acceso con Redis (usa cache)

  await db.close();
  redis.quit();
}

run();

//! --> --DIAP 91-- ODT
