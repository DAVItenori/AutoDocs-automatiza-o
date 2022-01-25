const express = require('express');
const app = express(); 
const port = 8081

// Rotas
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log("Servidor Rodando na url http://localhost:8081");
})