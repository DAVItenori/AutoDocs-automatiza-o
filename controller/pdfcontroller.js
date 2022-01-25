const req = require("express/lib/request");
const puppeteer = require('puppeteer'); 


async function  criarpdf(url) {

    let navegador = await puppeteer.launch(); 

    let pagina = await navegador.newPage();

    await pagina.goto(url);

    let pdf = await pagina.pdf();

    navegador.close(); 

    return pdf; 
}

module.exports = {

        // factura(req,res) {
        //     res.render('layouts/pdf'); 

        // },

        
        async add (req,res) { 
            let pdf = await criarpdf("http://localhost:8081/add");

            res.contentType('application/pdf');
            res.send('pdf');




        }

}