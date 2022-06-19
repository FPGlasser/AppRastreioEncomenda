const express = require('express');

const Auth_App = express()


const port  = 3000
Auth_App.listen(port, ()=>{
    console.log(`Aplicação Read esta rodando na porta: ${port}`);
})