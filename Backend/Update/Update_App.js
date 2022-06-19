const express = require('express');

const Update_App = express()


const port  = 3003
Update_App.listen(port, ()=>{
    console.log(`Aplicação Read esta rodando na porta: ${port}`);
})