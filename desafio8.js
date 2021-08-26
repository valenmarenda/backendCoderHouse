//const moment = require ('moment');
/*const { query } = require('express');
const express = require ('express');
const fs = require('fs');
//const { json } = require('express');

const app = express()
const port = 8080;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{

	 res.send("prueba")
	 console.log("prueba")

    
})
//guardar productos con Id

class Archivo {
    constructor(nombre){
        this.nombre = nombre
    }
     async guardarAsync (producto){
         try{
        const data = await fs.promises.readFile(this.nombre);
        const json = JSON.parse(data.toString("utf-8"));
        json.push({...producto,id:json.length});
        try {
            await fs.promises.writeFile(this.nombre,JSON.stringify(json, null,"\t"))
            }catch(err){
                throw new Error (err)
            }
         }catch(err){
             console.log([])
             try
           {
                await fs.promises.writeFile(this.nombre, JSON.stringify([{...producto, id:0}]))
            }catch (err) {
                throw new Error (err)
            }
             
         }
     }
    
    
}


let myfile = new Archivo ('./productosD8.txt');
//(async () => {
//   await myfile.guardarAsync({ "title": "Napkin - Beverage 1 Ply", "price": 825, "thumbnail": "https://robohash.org/voluptatumetcorrupti.png?size=50x50&set=set1" });
//    await myfile.guardarAsync({ "title": "Ketchup - Tomato", "price": 980, "thumbnail": "https://robohash.org/saepevoluptasnulla.png?size=50x50&set=set1" })
//    await myfile.guardarAsync({ "title": "Cumin - Whole", "price": 499, "thumbnail": "https://robohash.org/fugiatdoloresse.png?size=50x50&set=set1" })
//  })();

 //a 
app.get("/api/productos/listar", (req, res)=>{
	fs.promises
	.readFile("./productosD8.txt")
	.then(data=>data.toString('utf-8'))
	.then(datos=>{ 
	 res.send(datos)
	 console.log(datos)
 })
    
})

//b 


app.get("/api/productos/listar/:id", async (req, res) => {
	const listaProductos = await fs.promises.readFile("./productosD8.txt");
	const producto = JSON.parse(listaProductos);

	//console.log(listaProductos)
	if (!isNaN(req.params.id) && producto.length > req.params.id) {
	  const search = producto.filter(
		(product) => product.id === parseInt(req.params.id, 10)
	  );
	  res.send(...search);
	} else {
	  res.send({ error: "producto no encontrado" });
	}
  });

 //c
 app.post("/api/productos/guardar", async (req, res) => {
	const { title, price, thumbnail } = req.body;
  
	await myfile.guardarAsync({ title, price, thumbnail });
	return res.json({ msg: "producto guardado" });
  });




 
const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))*/
