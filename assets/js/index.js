const header = { headers: {
    'X-RapidAPI-Key': '2854cdd959msh129df35ff7f7cd4p10b966jsn3eac6a57da3b',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
}}

let dataApi = [];

fetch('https://moviesdatabase.p.rapidapi.com/titles', header)
    .then(response => response.json())
    .then(response => {
        // hacerDespuesEjecucion(response.results)
        dataApi = response.results;
        hacerDespuesEjecucion(response.results)
    })
    .catch(err => console.error(err));


const hacerDespuesEjecucion = ()=>{
    let data = dataApi.results
}

//Constantes capturadas y variables

const contenedor = document.getElementById('root')
const input = document.getElementById('search')


//Eventos

/* input.addEventListener('input', superFiltro)
 */
/* Llamadas de funciones */

/* function superFiltro(){
    let arrayFiltrado1 = filtrarPorTexto( data, input.value)
    pintarTarjetas(arrayFiltrado1)
} */

function pintarTarjetas(arrayDatos){
    if(arrayDatos.lenght == 0) {
    contenedor.innerHTML == "<h2>No hay coincidencias :(</h2>"
    return
    }

let tarjetas = ''
arrayDatos.forEach(elemento =>{
    tarjetas += `<div class="container">
    <label for="">Nombre:${elemento.titleType.text} </label>
    <div class="contenedor">
        <img src="${elemento.primaryImage.url}" alt="pelicula">
    </div>
    <a href="details.html">
    <input type="button" value="Mas detalles" >
    </a>
</div>`
})
/*  const variable = innerHTML(data)
 */ 
contenedor.innerHTML = tarjetas
}

function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado1 = arrayDatos.filter(elemento => elemento.titleText.toLowerCase().includes(texto.toLowerCase()))
}

