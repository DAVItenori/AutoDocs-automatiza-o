const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Body Parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");    

});

app.get("sobre", function(req,res){
    res.send("Minha pagina sobre");

})

app.post('/add', function(req, res){
    req.body.vara
    res.send("Texto: "+req.body.titulo+"Conteúdo:"+ req.body.conteudo)

})

app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});