import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log('conectado ao banco de dados')
}catch(err) {
    res.status(500).send(err.message)
    return
}

const db = mongoClient.db("mywallet");
export default db;