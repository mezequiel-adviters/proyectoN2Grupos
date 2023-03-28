// console.log(localStorage.getItem('token'));

const URL_BASE = "https://bootcamp-adviters.herokuapp.com";

const getGroups = () => {
    const token = localStorage.getItem('token');
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`
        }
    }
    fetch(`${URL_BASE}/grupos`, options)
        .then(response => response.json())
        .then(data => {
            addCards(data);
        })
        .catch(err => console.error(err))
}
getGroups();

const addCards = (data) => {
    console.log(data)
    let container = document.getElementById("cards");
    if(data.length == 0) {
        container.innerHTML = `<p>No hay tarjetas</p>`
        return;
    }
    data.forEach(card => {
        container.innerHTML += 
        `<div class="container">
            <img src="../img/paisaje.jpg" alt="Nombre del grupo">
                <div class="contenedor">
                    <label for="nombre-grupo">Nombre de grupo: <br> ${card.descripcion} </label>
                    <button onclick="info(${card.id})">Mas detalles...</button>
                </div>
            </div>`
    });
}

const info = (id) => {
    console.log(id);
    const token = localStorage.getItem('token');
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`
        }
    }
    fetch(`${URL_BASE}/grupos/${id}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("groupData", JSON.stringify(data));
            window.location.href = "../../views/details.html";
            // addCards(data);
        })
        .catch(err => console.error(err))
}

// const header = { headers: {
//     'X-RapidAPI-Key': '2854cdd959msh129df35ff7f7cd4p10b966jsn3eac6a57da3b',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// }}

// let dataApi = [];

// fetch('https://moviesdatabase.p.rapidapi.com/titles', header)
//     .then(response => response.json())
//     .then(response => {
//         // hacerDespuesEjecucion(response.results)
//         dataApi = response.results;
//         hacerDespuesEjecucion(response.results)
//     })
//     .catch(err => console.error(err));


// const hacerDespuesEjecucion = ()=>{
//     let data = dataApi.results
// }

// //Constantes capturadas y variables

// const contenedor = document.getElementById('root')
// const input = document.getElementById('search')


// //Eventos

// /* input.addEventListener('input', superFiltro)
//  */
// /* Llamadas de funciones */

// /* function superFiltro(){
//     let arrayFiltrado1 = filtrarPorTexto( data, input.value)
//     pintarTarjetas(arrayFiltrado1)
// } */

// function pintarTarjetas(arrayDatos){
//     if(arrayDatos.lenght == 0) {
//     contenedor.innerHTML == "<h2>No hay coincidencias :(</h2>"
//     return
//     }

// let tarjetas = ''
// arrayDatos.forEach(elemento =>{
//     tarjetas += `<div class="container">
//     <label for="">Nombre:${elemento.titleType.text} </label>
//     <div class="contenedor">
//         <img src="${elemento.primaryImage.url}" alt="pelicula">
//     </div>
//     <a href="details.html">
//     <input type="button" value="Mas detalles" >
//     </a>
// </div>`
// })
// /*  const variable = innerHTML(data)
//  */ 
// contenedor.innerHTML = tarjetas
// }

// function filtrarPorTexto(arrayDatos, texto){
//     let arrayFiltrado1 = arrayDatos.filter(elemento => elemento.titleText.toLowerCase().includes(texto.toLowerCase()))
// }

