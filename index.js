import express  from 'express';

import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 8080;

//compatibilidades
app.use(express.json());

//rotas
app.use('/register', userRoutes)

//servidor
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})