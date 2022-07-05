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



//Vamos a hacer CSR pera con una API de un externo, en este caso PokeApi. Usabdo un ENDPOINT de tipo GET q devuelve un archovp Json

//Primero realizamos una peticion de tipo GET con la funcion fecht es igual a poner                        -> https://pokeapi.co/api/v2/pokemon/pikachu devuelve una promesa-> (then) bien o mal (catch)

const pokeApiBaseUrl = 'https://pokeapi.co/api/v2/pokemon'
fetch(`${pokeApiBaseUrl}/pikachu`)
    .then((res)=>{ 
        //console.log({resuesta: res});
        //obtener el contenido de la respuesta  y convertirlo en json para volver a recivirlo con otro then ya como json en el primero no se puede ya que resivimos la respuesta y no el pokemon
        return res.json()
    })
    .then((pokemon) => {
        console.log({pokemon})
        //construir un html
        const html =  `

        <h3>${pokemon.name}</h3>
        <img src=${pokemon.sprites.front_default} alt="Esta es una imagen del Pokemon ${pokemon.name}">

        `
        const div = document.createElement('div')
        div.classList.add('poke-card')
        div.innerHTML= html

        document.querySelector('body').appendChild(div)
    })
    .catch()
 
