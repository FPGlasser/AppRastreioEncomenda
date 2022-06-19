const express = require('express');

const Track_App = express()


const port  = 3004
Track_App.listen(port, ()=>{
    console.log(`Aplicação Read esta rodando na porta: ${port}`);
})