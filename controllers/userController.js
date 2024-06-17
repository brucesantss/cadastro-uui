import pool from '../db/database.js';
import { uuid } from 'uuidv4';

export const addUser = async (req, res) => {
    const { name, email, pass } = req.body;

    const query = 'INSERT INTO users (id, name, email, pass) VALUES (?,?,?,?)';
    const id = uuid();

    const values = [id, name, email, pass];

    try{
        const [result] = await pool.execute(query, values);
        res.status(201).json({ message: 'usuário criado!', userId: id });
    }catch(err){
        res.status(500).json( {error: 'não foi possível cadastrar usuário.', err} );
    }
}