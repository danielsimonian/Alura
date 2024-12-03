import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
app.use(express.static('uploads')); //servir arquivos estáticos
routes(app);


app.listen(3000, () => { 
// servidor do express ouça a porta 3000 (3000 é a porta de um servidor local)
    console.log('Servidor escutando...');
});