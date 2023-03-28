const data = JSON.parse(localStorage.getItem('groupData'));
console.log(data);
const addCards = (data) => {
    let container = document.getElementById("members");
    if(data.length == 0) {
        container.innerHTML = `<p>No hay tarjetas</p>`
        return;
    }
    data.forEach((card, index) => {
        container.innerHTML += 
        `<div class="container">
            <img src="../img/paisaje.jpg" alt="Nombre del grupo">
                <div class="contenedor">
                    <label for="integranten1-id">Integrante N°: ${index + 1}
                    <label for="integranten1-nombre">Nombre: ${card.nombre} ${card.apellido}
                    <label for "integranten1-email">Email: ${card.email}
                </div>
            </div>`
    });
}

addCards(data);
