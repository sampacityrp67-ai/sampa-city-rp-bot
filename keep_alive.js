const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send('Bot Sampa City RP está rodando!');
});

function keepAlive() {
    server.listen(3000, () => {
        console.log('Servidor web ativo para manter o bot online.');
    });
}

module.exports = keepAlive;
