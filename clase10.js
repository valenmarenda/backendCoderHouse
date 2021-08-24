let ul = document.querySelector('ul')
let template = Handlebars.compile(ul.innerHTML)
let datos ={
    nombre:"valen",
    edad: 30
}
ul.innerHTML = template(datos)
