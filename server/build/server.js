import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.send('Deu certo');
});
app.listen(3333);
