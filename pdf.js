const { default: jsPDF } = require("jspdf");

 const btn = document.querySelector("#send");

 btn.addEventListener("click", function(e) {

    e.preventDefault();

    const vara = document.getElementById("nVara");

    const comarca = document.getElementById("comarca").value;

    const nomeparte = document.getElementById("nomeparte").value;

    const nacionalidade = document.getElementById("nacionalidade").value

    // const comarca = document.getElementById("comarca").value

    // const comarca = document.getElementById("comarca").value
    
    // const comarca = document.getElementById("comarca").value

    // const comarca = document.getElementById("comarca").value

    // const comarca = document.getElementById("comarca").value

    // const comarca = document.getElementById("comarca").value

    // const comarca = document.getElementById("comarca").value

    // const comarca = document.getElementById("comarca").value

var pdf = require("html-pdf");

  var conteudo = `
  <h1> MODELO DE PETIÇÃO INICIAL </h1> 
    <hr></hr>
    <p>EXMO. SR. JUIZ. DE DIREITO DA.${vara} DA COMARCA DE ${comarca}</p>
    <p></p>  
    <p></p> 
    <p></p> 
    <p></p> 
    <p></p> 
    <p></p> 
    <p></p> 
    <p></p> 
    <p></p> 
    <p></p> 
    <p>${NomeParte}, ${nacionalidade}, ${estadocivil}, ${profissão},portador da carteira de identidade de numero ${rg} expedida pelo ${exRG}, 
        inscrita no CPF/MF sob n°: ${cpf}, endereço eletrônico:  ${email},residente e domiciliado ${endereco}, 
        por seu advogado abaixo subscrito, com endereço profissional ${enderecoadvogado}, 
        para fins do artigo 106, I do Novo Código de Processo Civil, vem a este juízo propor a presente  </p>
    <p></p>
    <p>AÇÃO ${acao}</p>
    <p></p>
    <p>pelo rito comum, em face de ${nomere}, ${nacionalidadere}, ${estadocivilre}, 
        ${profissaore}, portador da carteira de identidade n° ${rgre},expedida pelo ${exre}, inscrita no CPF/MF sob n°${cpfre} , endereço eletrônico ${emailre} , 
        residente e domiciliado ${enderecore}, pelas razões de fato e de direito que passa a expor:</p>
    <p></p>
    <p></p>
    <p>DOS FATOS</p>
    <p>${relato}</p>
    <p></p>
    <p></p>
    <p>DOS FUNDAMENTOS</p>
    <p></p>
    <p>${fundamentos}</p>
    <p></p>
    <p></p>
    <p>DO PEDIDO</p>
    <p>diante do exposto requerer a V.Excelência: </p>
    <p></p>
    <p>1 – Que seja designada audiência de conciliação ou mediação na forma do previsto no artigo
334 do NCPC;</p>
    <p>2 – A citação do Réu para oferecer resposta no prazo legal sob pena de preclusão, revelia e
confissão.</p>
    <p>3 – que seja julgado procedente o pedido para ……….</p>
    <p>4 – que seja julgado procedente o pedido para condenar o réu ao pagamento das custas
judiciais e honorários advocatícios na ordem de 20% sobre o valor da causa.</p>
    <p></p>
    <p></p>
    <p>DAS PROVAS</p>
    <p>${provas}</p>
    <p></p>
    <p></p>
    <p>DO VALOR DA CAUSA</p>
    <p></p>
    <p></p>
    <p>Dá se a causa o valor de R$ ${valorcausa}</p>
    <p>Nesses termos,</p>
    <p></p>
    <p>Pede deferimento</p>
    <p>${local}, ${dia} de ${mes} de ${ano}</p>
    <p></p>
    <hr></hr>
    <p>${nomeadvogado}, OAB ${oab}, UF ${uf}</p>`

    
pdf.create(conteudo,{}).toFile("./PDFTESTE.pdf",(err,res) => {
    if(err){
        console.log("UM ERRO ACONTECEU! ")
    } 
    else 
    {
        console.log(res);
    }
})

 });
 



 
