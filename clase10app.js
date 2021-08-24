const express = require ('express');
const fs = require('fs');
//const { json } = require('express');
//const products = require('./routes/routes')

const app = express()
const port = 8080;
app.engine("ntl", function(fp, ops, callback){
    fs.readFile(fp, function(err,content){
        if(err)return callback (new Error(err))
        let rendered = content.toString().replace('^^title$$', ops.title);
        return callback(null, rendered)
    })
})

app.set("views", "./views");
app.set("view engine", "ntl")

app.get('/cte1',(req, res)=>{
    res.render('index', {title:'ejemplo'})
})


const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))