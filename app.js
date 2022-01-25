
const express = require('express');
const app = express();
const path = require('path');
const Handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const { engine } = require ('express-handlebars');
const pdf = require('html-pdf'); 
const { response, Router } = require('express');
const { render } = require('express/lib/response');
const fs = require('fs');
const puppeteer = require('puppeteer');
const fetch = require('node-fetch'); 
const pdfcontroller = require('./controller/pdfcontroller');
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const router = express.Router();





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
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    });


    navegador.close(); 

    return pdf; 


    
}



//Body Parser 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// //Template engine HandleBars
app.engine('Handlebars', engine({defaultLayout:'main'}));
app.set("view engine", 'Handlebars'); 

// //Routes and Templates 
// router.post('/pdf', pdfcontroller.factura); 


//Tela inicial
// app.get('/', function(req,res) {
//     res.render('index');
// });


//Formulário Inserir
app.get('/',function(req, res) {
    res.render("inserir"); 
});

//Puxar Variaveis e Armazenar no Pdf.Handlebars
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
                     res.render('pdf', {dados: peticao});
                    
                
                                                      
                //     var html = template(Dados);  

                //     var milis = new Date(); 
                //     milis = milis.getTime(); 

                //     var pdfPath = path.join('pdf', 'Vara.pdf');

                //     var options = {
                //         width: '1230px',
                //         headerTemplate: "<p></p>",
                //         footerTemplate: "<p></p>",
                //         displayHeaderFooter: false,
                //         margin: {
                //             top: "10px",
                //             bottom: "30px"
                //         },
                //         printBackground: true,
                //         path: pdfPath
                //     }

                //     const browser = await puppeteer.launch({
                //         headless:true
                //     }
                //     );

                //     var page = await browser.newPage();

                //     await page.goto('localhost:8081' , {
                //         waitUntil: 'networkidle0'
                //     });

                //     const pdf = await page.pdf(options);

                //     response.contentType("application/pdf"); 
                //     await browser.close(); 
                    
                //     return res.send(pdf);           
});

var paginaAnterior = document.referrer;
app.get('/gerarpdf', async(req,res) => { 
       
        let pdf = await criarpdf(paginaAnterior);

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

//Start Server
app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});


