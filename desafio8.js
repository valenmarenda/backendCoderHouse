//const moment = require ('moment');
const { query } = require('express');
const express = require ('express');
const fs = require('fs');
//const { json } = require('express');

const app = express()
const port = 8080;

const productos = [
	{
		"title": "Napkin - Beverage 1 Ply",
		"price": 825,
		"thumbnail": "https://robohash.org/voluptatumetcorrupti.png?size=50x50&set=set1",
	},
	{
		"title": "Ketchup - Tomato",
		"price": 980,
		"thumbnail": "https://robohash.org/saepevoluptasnulla.png?size=50x50&set=set1",
	},
	{
		"title": "Cumin - Whole",
		"price": 499,
		"thumbnail": "https://robohash.org/fugiatdoloresse.png?size=50x50&set=set1",
	},
	{
		"title": "Napkin - Beverage 1 Ply",
		"price": 825,
		"thumbnail": "https://robohash.org/voluptatumetcorrupti.png?size=50x50&set=set1",
	},
	{
		"title": "Ketchup - Tomato",
		"price": 980,
		"thumbnail": "https://robohash.org/saepevoluptasnulla.png?size=50x50&set=set1",
	}
]

 //a 
app.get("/api/productos/listar", (req, res)=>{
     const products = productos.forEach((element, index )=> {
         console.log(element, index)
         res.send(element)  
     });
    
})

//b 
app.get('/api/productos/listar/:id', (req, res) => {
    if(!isNaN(req.params.id) && products.length > req.params.id){
        const search = productos.filter( product => product .id === parseInt(req.params.id,10))
        res.send(...search ) 
    }else{
        res.send({error: 'producto no encontrado'})
    }
})

 //c
 app.post("api/productos/guardar", (req, res)=>{
   

})




 
app.listen(port, ()=>{
    console.log(`escuchando ${port} `)
})