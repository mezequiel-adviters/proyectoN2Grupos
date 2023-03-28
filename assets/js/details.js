const data = JSON.parse(localStorage.getItem('groupData'));
console.log(data);
const addCards = (data) => {
    let container = document.getElementById("members");
    if(data.length == 0) {
        container.innerHTML = `<p>No hay tarjetas</p>`
        return;
    }
    data.forEach(card => {
        container.innerHTML += `<div class="container">
             <p>${card.nombre}</p>
             <p>${card.apellido}</p>
             <p>${card.email}</p>
        </div>`
    });
}

addCards(data);
