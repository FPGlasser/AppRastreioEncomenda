const express = require('express');

const Read_App = express()


const port  = 3002
Read_App.listen(port, ()=>{
    console.log(`Aplicação Read esta rodando na porta: ${port}`);
})