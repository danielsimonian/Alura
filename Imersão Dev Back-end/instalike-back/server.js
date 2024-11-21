import express from 'express';

const app = express();
app.listen(3000, () => { 
// servidor do express ouça a porta 3000 (3000 é a porta de um servidor local)
    console.log('Servidor escutando...');
});

app.get('/api', (req, res) => {
    res.status(200).send('Boas vinda à imersão');
}); //No navegador digitar -> localhost:3000/api