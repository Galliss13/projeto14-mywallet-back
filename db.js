import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log('conectado ao banco de dados')
}catch(err) {
    console.log(`não conectou ${err.message}`)
}

const db = mongoClient.db("mywallet");
export default db;