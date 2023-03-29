const token = sessionStorage.getItem('token');
const URL_BASE = "https://bootcamp-adviters.herokuapp.com";
if (token == null) {
    window.location.href = "../../views/login.html";
}

const groupId = JSON.parse(sessionStorage.getItem('groupId'));

const getMembers = (groupId) => {
    const token = sessionStorage.getItem('token');
    const options = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`
        }
    }

    // Peticion mas detalles
    fetch(`${URL_BASE}/grupos/${groupId}`, options)
        .then(response => response.json())
        .then(data => {
            addCards(data);
        })
        .catch(err => console.error(err))
}

const addCards = (data) => {
    let container = document.getElementById("members");
    if(data.length == 0) {
        container.innerHTML = `<p>No hay tarjetas</p>`
        return;
    }
    //Ubicamos el contenido en pantalla de la peticion
    data.forEach((card, index) => {
        container.innerHTML += 
        `<div class="container">
            <img src="../img/notfound.jpg" alt="Nombre del grupo">
                <div class="contenedor">
                    <label for="integranten1-id" class="categorias">Integrante N°: ${index + 1} 
                    <label for="integranten1-nombre">Nombre: <p> ${card.nombre} ${card.apellido} </p>
                    <label for "integranten1-email">Email: <p>${card.email}</p>
                </div>
            </div>`
    });
}

getMembers(groupId);