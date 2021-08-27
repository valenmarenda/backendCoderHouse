const app = express()
const port = 8080;
//app.use("/static", express.static("./public"))
const express = require("express");
const hanblebars = require("express-handlebars");
const productos = require("./routes/productos.routes");
​
const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.listen("8080", () => {
  console.log("escuchando en el puerto 8080...");
});
// handlebars
app.engine(
  "hbs",
  hanblebars({
    extname: ".hbs",
    defaultLayout: "indexClase10.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("views", "./views");
app.set("view engine", "hbs");
app.use("/", express.static("/public"));
app.use("/api/productos", productos);


const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))

