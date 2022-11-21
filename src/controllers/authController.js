import bcrypt from 'bcrypt';
import db from '../../db.js';
import { v4 as uuid } from 'uuid';


export async function register(req, res) {
  const user = req.body;
  if (user.password !== user.repeatPassword) {
    res.status(422).send('os campos de senha devem ser iguais')
    return
  }

  try {
    const userAlreadyExists = await db.collection('users').findOne({email: user.email})
    if (userAlreadyExists) {
      res.status(409).send('email já cadastrado')
      return
    }
  } catch (err) {
    res.sendStatus(500)
  }

  delete user.repeatPassword

  const passwordHash = bcrypt.hashSync(user.password, 10);
  await db.collection('users').insertOne({ ...user, password: passwordHash })
  res.sendStatus(201);
}


export async function login(req, res) {
  const {email, password} = req.body
  const user = await db.collection('users').findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    await db.collection('sessions').insertOne({ token, userId: user._id });
    res.send(token);
  } else {
    res.sendStatus(401);
  }
}