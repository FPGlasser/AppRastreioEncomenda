const express = require('express');
//const authenticationTerminal = require('./modules/authTerminal.js')
const authenticationAdmin = require ('./modules/authAdmin.js')

const Auth_App = express()

console.log("odulo carregado com sucesso");
Auth_App.get('/authadmin', authenticationAdmin);
//Auth_App.get('/authterminal', authenticationTerminal);

const port  = 3000
Auth_App.listen(port, ()=>{
    console.log(`Aplicação Read esta rodando na porta: ${port}`);
})