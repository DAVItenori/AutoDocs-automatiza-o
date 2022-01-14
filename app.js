const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { engine } = require ('express-handlebars');

//Start Server
app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});


//Body Parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// //Template engine
app.engine('handlebars', engine({defaultLayout:'main'}));
app.set("view engine", 'handlebars'); 



// //Routes and Templates 
app.get('/', function(req,res) {
    res.render('index')
});

app.get("/style",function(req, res){
    res.sendFile(__dirname+ '/public/css/style.css')

});


// app.get("/", function (req, res){
//     res.sendFile(__dirname + "/index.html");    

// });

// app.get("sobre", function(req,res){
//     res.send("Minha pagina sobre");

// })

// app.post('/add', function(req, res){
//     req.body.vara
//     res.send("Texto: "+req.body.titulo+"Conteúdo:"+ req.body.conteudo)

// })

