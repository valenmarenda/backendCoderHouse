//const moment = require ('moment');
//const { query } = require('express');
const express = require ('express');
const fs = require('fs');
//const { json } = require('express');
const products = require('./routes/routes')

const app = express()
const port = 8080;
const router = express.Router();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

router.get('/test', (req, res)=>{
   res.send("test")
})

//archivo estático público
app.use("/static", express.static(__dirname+"/public"))

// las routas se encuentran en la carpeta routes
app.use(router)
app.use( products) 
const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))