const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world am here!");
})
app.listen(3000);