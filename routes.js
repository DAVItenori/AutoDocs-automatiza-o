const express = require('express');
const router = express.Router(); 

//Formulário Inserir
router.get('/',(req, res) => {
    res.render("inserir"); 
});

module.exports = router; 