//CSR (client side rendering)
//Primiero seleccionamos el cuerpo osea el body del html
const body = document.querySelector('body')
//segundo creamos un DIV
const div = document.createElement('div')
//Construimos un template de HTML usando las comillas literales de JS. osea lo que se va renderizar en el sitio web
const html = `
    <h2>Este contenido lo agregamos a la web utilizando JavaScript</h2>
`
//ahora a este HTML lo queremos agregar al div, (meter adentro)

div.innerHTML= html //lo q quiere decir es q el contenido HTML del Div sera el contenido de la variable, es este caso Variable=html. Ahora todo eso OSEA el div lo tenemos q meter adentro del BODY

body.appendChild(div)
