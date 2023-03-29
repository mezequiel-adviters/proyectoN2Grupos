
const URL_BASE = "https://bootcamp-adviters.herokuapp.com";
const token = sessionStorage.getItem('token');

if (token == null) {
    window.location.href = "../../views/login.html";
}

//Obtenemos el token

const getGroups = () => {
const token = sessionStorage.getItem('token');
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
                    <button onclick="saveId(${card.id})">Mas detalles...</button>
                </div>
            </div>`
    });
}

    //Guardamos el id del grupo
const saveId = (id) => {
    sessionStorage.setItem("groupId", id);
    window.location.href = "../../views/details.html";
}

