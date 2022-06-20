const authenticationTerminal = require('./modules/authTerminal.js');
const authenticationAdmin = require('./modules/authAdmin.js');
const express = require('express');

const Auth_App = express();

Auth_App.get('/authadmin', authenticationAdmin);
Auth_App.get('/authterminal', authenticationTerminal);

Auth_App.all('/*',(req, res)=>{
    res.status(404).send('404');
})

const port  = 3000;
Auth_App.listen(port, ()=>{
    console.log(`Aplicação Auth esta rodando na porta: ${port}`);
})