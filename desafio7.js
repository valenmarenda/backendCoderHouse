//const moment = require ('moment');
const express = require ('express');
const fs = require('fs');
//const { json } = require('express');

const app = express()
const port = 8080;

const server = app.listen(port, ()=>{
    console.log(`escuchando ${port} `)
})

app.get("/", (req, res)=>{
    res.json({msg:'test'})
    
})
let contadorItems = 0
app.get("/items", (req, res)=>{
    fs.promises
       .readFile("./productos.txt")
       .then(data=>data.toString('utf-8'))
       .then(datos=>{ 
        contadorItems++
        fs.writeFileSync("./visitasItems.txt", (contadorItems+" ").toString())
        res.send(datos)
    })
})

let contadorRandom = 0
app.get("/items-random", (req, res)=>{
    fs.promises.readFile("./productos.txt")
    .then(( data)=>{
    const json = data.toString('utf-8')
    const datos = JSON.parse(json)
    let randomItem = datos[Math.random() * datos.length | 0]
    contadorRandom++
        fs.writeFileSync("./randomItems.txt", (contadorRandom+" ").toString())
    res.send(randomItem)

})

})

app.get("/visitas", async (req, res) => {
  let visitaItems = await fs.promises
    .readFile("./visitasItems.txt")
    .then((data) => data.toString("utf-8"))
    .then((datosVisitas) => {
      return datosVisitas;
    })
    .catch((err) => {
      console.log("error", err);
    });
  let randomItems = await fs.promises
    .readFile("./randomItems.txt")
    .then((data) => data.toString("utf-8"))
    .then((datosVisitas) => {
      return datosVisitas;
    })
    .catch((err) => {
      console.log("error", err);
    });
  console.log(visitaItems);
  console.log(randomItems);

  res.send(
    `el número de visitas a /items es ${visitaItems} y a /items-random ${randomItems}`
  );
});