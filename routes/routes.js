const express = require ('express');
const fs = require('fs');
const app = express()
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let productos = [];

class Producto {
  constructor(title, price, thumbnail) {
    this.id = productos.length + 1;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}

productos.push(new Producto("producto1", 120, "foto1.jpg"));
productos.push(new Producto("producto2", 3420, "foto2.jpg"));
productos.push(new Producto("producto2", 6165, "foto3.jpg"));

//Actualizar un producto 
router.put('/api/productos/actualizar/:id', (req, res)=>{
  try{
    const id = req.params.id;
    const changed = productos[id - 1]
    if(changed){
      const { title, price, thumbnail } = req.body
      productos[id].push(new Producto(title, price, thumbnail));
      return res.status(200).json(productos[id]);
      
    }else{
      res.status(404).json({msg:"error"})
    }    
  }catch (err){
    res.status(404).json(err)
  }
})

//borrar un producto listo
router.delete('/api/productos/delete/:id', async (req, res)=>{
    try{
      const id = req.params.id;
      const deleted = productos[id - 1]
      if(deleted){
        productos = productos.filter(prod => prod.id != id)
        res.status(200).json(deleted)
      }else{
        res.status(404).json({msg:"error"})
      }    
    }catch (err){
      res.status(404).json(err)
    }
})

// listar todos los productos   listo
router.get("/api/productos/listar", (req, res)=>{
        try {
          if (productos.length === 0) {
            res.status(404).json("No hay productos" );
          } else {
            res.status(200).json(productos);
          }
        } catch (err) {
          res.status(404).json(err);
        }
      
    
})

//listar un producto productos  listo
router.get("/api/productos/listar/:id", (req, res) => {
    const id = req.params.id
   try {
     if (id <= productos.length) {
       res.status(200).json(productos[id - 1]);
     } else {
       res.status(404).json("Producto no encontrado" );
     }
   } catch (err) {
     res.status(404).json(err);
   }
 });

  //Guardar productos con ID listo
  router.post("/api/productos/guardar", (req, res) => {
    const { title, price, thumbnail } = req.body;
  
    try {
      productos.push(new Producto(title, price, thumbnail));
      return res.status(200).json(productos[productos.length - 1]);
    } catch (err) {
      res.status(404).json(err);
    }
  });



  // Cargar productos
  app.post('api/productos/carga', (req, res) =>{
   console.log(req.body)
   res.status(200).json(req.body)
   const { title, price, thumbnail } = req.body;
    try {
      productos.push(new Producto(title, price, thumbnail));
     // return res.status(200).json(productos[productos.length - 1]);
       res.status(200).json(req.body)
    } catch (err) {
      res.status(404).json(err);
   }
});

module.exports = router