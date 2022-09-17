import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        {
            id: 1,
            name: 'Anúncio 1'
        },
        {
            id: 1,
            name: 'Anúncio 2'
        },
        {
            id: 1,
            name: 'Anúncio 3'
        }
    ]);
});
app.listen(3333, () => console.log('Server is Running!!!'));
