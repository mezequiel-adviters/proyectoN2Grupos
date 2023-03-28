
const URL_BASE = "https://bootcamp-adviters.herokuapp.com";

//Obtenemos el token

const getGroups = () => {
const token = localStorage.getItem('token');
const options = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`
    }
}

//Peticion para el endpoint grupos
fetch(`${URL_BASE}/grupos`, options)
    .then(response => response.json())
    .then(data => {
        addCards(data);
    })
    .catch(err => console.error(err))
}
getGroups();


    //Ubicamos en pantalla el contenido de la peticion
const addCards = (data) => {
    let container = document.getElementById("cards");
    if(data.length == 0) {
        container.innerHTML = `<p>No hay tarjetas</p>`
        return;
    }
    //Ubicamos en pantalla el contenido de la peticion
    data.forEach(card => {
        container.innerHTML += 
        `<div class="container">
            <img src="../img/notfound.jpg" alt="Nombre del grupo">
                <div class="contenedor">
                    <label for="nombre-grupo">Nombre de grupo: <br> <p>${card.descripcion} </p> </label>
                    <button onclick="info(${card.id})">Mas detalles...</button>
                </div>
            </div>`
    });
}
    //Accedemos a id de grupos
const info = (id) => {
    const token = localStorage.getItem('token');
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`
        }
    }

    //Peticion mas detalles
fetch(`${URL_BASE}/grupos/${id}`, options)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("groupData", JSON.stringify(data));
        window.location.href = "../../views/details.html";
    })
    .catch(err => console.error(err))
}

