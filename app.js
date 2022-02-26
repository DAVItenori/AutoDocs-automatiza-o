
const express = require('express');
const app = express();
const path = require('path');
const Handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { engine } = require ('express-handlebars');
const { response, Router } = require('express');
const { render } = require('express/lib/response');
const fs = require('fs');
const puppeteer = require('puppeteer');
const fetch = require('node-fetch'); 
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const router = express.Router();

//Função do puppeteers PDF;
async function  criarpdf(url) {
    let navegador = await puppeteer.launch(); 

    let pagina = await navegador.newPage();

    await pagina.goto(url, {
        waitUntil: "networkidle0"
    }) ;

    const pdf = await pagina.pdf({
        printBackground: true,
        format: "Letter",
        margin: {
            top: "80px",
            bottom: "100px",
            left: "100px",
            right: "100px"
        }
    });
 navegador.close(); 
 return pdf; 
    
}

//Body Parser; 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// //Template engine HandleBars;
app.engine('Handlebars', engine({defaultLayout:'main'}));
app.set("view engine", 'Handlebars'); 

//Tela inicial;
app.get('/', function(req,res) {
    res.render('index');
});

//Página do Formulário;
app.get('/documentos',function(req, res) {
    res.render("inserir"); 
});

app.get('/contato',function(req, res) {
    res.render("contato"); 
});

app.get('/quemsomos',function(req, res) {
    res.render("quemsomos"); 
});

//Trazer Variaveis e Armazenar no Pdf.Handlebars e na URL;
app.get('/add', function(req, res){

                let peticao = [{
                    
                        Vara: req.query.nVara,
                        Comarca: req.query.comarca, 
                        NomeParte: req.query.nomeparte,
                        Nacionalidade: req.query.nacionalidade,
                        EstadoCivil: req.query.estadocivil,
                        Profissao: req.query.profissao,
                        Rg: req.query.rg, 
                        OExp: req.query.orgaoexpedidor,
                        Cpf: req.query.cpf,
                        Email: req.query.email, 
                        Endereco: req.query.endereco,
                        EndAdv: req.query.enderecoadvogado, 
                        Acao: req.query.acao, 
                
                        NomeReu: req.query.nomereu,
                        NacReu: req.body.nacionalidadereu, 
                        EstReu: req.query.estadocivilreu,
                        ProReu: req.query.profissaoreu,
                        RgReu: req.query.rgreu, 
                        OExpReu: req.query.orgaoexpedidorreu, 
                        CpfReu: req.query.cpfreu,
                        EmailReu: req.query.emailreu,
                        EndReu: req.query.enderecoreu,
                        Relato: req.query.relato, 
                        Fundamentos: req.query.fundamentos,
                        Provas: req.query.provas, 
                        Valor: req.query.valor,
                        Local: req.query.local,
                        Dia: req.query.dia, 
                        Mes: req.query.mes,
                        Ano: req.query.ano, 
                        Advogado: req.query.advogado, 
                        Oab: req.query.oab, 
                        Uf: req.query.uf
                
                }] 
                        res.render('peticaoinicial', {dados: peticao})
                        
                        
                        url = `http://localhost:8081/add?nVara=${req.query.nVara}&comarca=${req.query.comarca}
                        &nomeparte=${req.query.nomeparte}&nacionalidade=${req.query.nacionalidade}
                        &estadocivil=${req.query.estadocivil}&profissao=${req.query.profissao}&rg=${req.query.rg}
                        &orgaoexpedidor=${req.query.orgaoexpedidor}&cpf=${req.query.cpf}&email=${req.query.email}
                        &endereco=${req.query.endereco}&enderecoadvogado=${req.query.enderecoadvogado}
                        &acao=${req.query.acao}&nomereu=${req.query.nomereu}&nacionalidadereu=${req.query.nacionalidadereu}
                        &estadocivilreu=${req.query.estadocivilreu}&profissaoreu=${req.query.profissaoreu}
                        &rgreu=${req.query.rgreu}&orgaoexpedidorreu=${req.query.orgaoexpedidorreu}
                        &cpfreu=${req.query.cpfreu}&emailreu=${req.query.emailreu}&enderecoreu=${req.query.enderecoreu}
                        &relato=${req.query.relato}&fundamentos=${req.query.fundamentos}&provas=${req.query.provas}
                        &valor=${req.query.valor}&local=${req.query.local}&dia=${req.query.dia}&mes=${req.query.mes}
                        &ano=${req.query.ano}&advogado=${req.query.advogado}&oab=${req.query.oab}&uf=${req.query.uf}`


});

// Rota do Botão de gerar o PDF               
app.get('/gerarpdf', async function(req,res){ 
        let pdf = await criarpdf(url); 
        res.contentType('application/pdf');
        res.send(pdf); 
});
        
//Estilos
app.get("/style",function(req, res){
    res.sendFile(__dirname+ '/public/css/style.css');

});
app.get("/javascript",function(req, res){
    res.sendFile(__dirname+ '/public/js/javascript.js');

});

// Start Server
app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});


