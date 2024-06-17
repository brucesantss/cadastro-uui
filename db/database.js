import mysql2 from 'mysql2/promise';

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users_db',
    queueLimit: 10,
    waitForConnections: true
})

export default pool;