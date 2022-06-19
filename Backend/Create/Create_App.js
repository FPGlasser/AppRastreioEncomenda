const express = require('express')

const Create_App = express();



const port = 3001;
Create_App.listen(port, ()=>{
    console.log(`Create rodando da porta: ${port}`);
})