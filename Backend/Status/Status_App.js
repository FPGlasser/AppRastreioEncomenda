const express = require('express');

const Status_App = express()

const port  = 3005
Status_App.listen(port, ()=>{
    console.log(`Aplicação Read esta rodando na porta: ${port}`);
})