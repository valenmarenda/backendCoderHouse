const express = require ('express');
const fs = require('fs');
const hanblebars = require("express-handlebars")
//const { json } = require('express');
//const products = require('./routes/routes')

const app = express()
const port = 8080;
app.use("/static", express.static(__dirname+"/public"))
/*app.engine("cte", function(fp, ops, callback){
    fs.readFile(fp, function(err,content){
        if(err)return callback (new Error(err))
        let rendered = content.toString().replace('^^title$$', ops.title).replace('^^name$$', ops.name);
        return callback(null, rendered)
    })
})*/

//handlebars 

app.engine("hbs", hanblebars(
    {
        extname:".hbs",
        defaultLayout:"indexClase10.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir:__dirname + "/views/partials"
    }
))
app.set("views", "./views");
app.set("view engine", "hbs");
app.use(express.static("public"));

//app.get('/cte1',(req, res)=>{
//    res.render('index', {title:'ejemplooooo', name:"coder"})
//})

/*app.get('/handle',(req, res)=>{
    let data = {
        saludo: "hola",
        nombre:"maria", 
        mail: "maria@gmail.com",
        tel:["0315821", "5259264"],
        ciudad:[
         {name:"la plata"},
         {name:"buenos aires"}, 
         {name:"cordoba"}
        ]
    }
    res.render("main", data)
})*/


const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))

