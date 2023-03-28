
const api = "https://bootcamp-adviters.herokuapp.com";

const login = () => {
  const items = {
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
          "email": "capacitaciones10@adviters.com",
          "password": "capacitaciones10"
      })
  };
  fetch(`${api}/login`, items)
.then(response => response.json())
.then(response =>{localStorage.setItem("Atoken" , response?.accessToken?.stsTokenManager?.accessToken );
       console.log("jenni");
       getGrupos();
      })
.catch(err => console.error(err));
}
const getGrupos = ()=> {
const token = localStorage.getItem("Atoken");
   console.log(token)
const items = {
  headers:
  { Authorization: `bearer ${token}` , 
 'Content-Type': 'application/json',
}
};

const contenedor = document.getElementById("container");

fetch(`${api}/grupos`, items)
.then(response => response.json())
.then(response => { 
  console.log(response)
  let tarjetasHTML = '';
   response.forEach(element => {
    const tarjeta = `
    <label for="">Nombre: ${element.created_at}</label>
    <div class="contenedor">
        <img src="" alt="pelicula">
        <p>${element.descripcion}</p>
        <p>${element.update_at}</p>

    </div>
    <a href="details.html?_id=${element.id}">
    <input type="button" value="Mas detalles" >
    </a>
    `;
    // agregar la tarjeta al contenedor
    tarjetasHTML += tarjeta;
    
  });
     // agregar las tarjetas al contenedor
     contenedor.innerHTML = tarjetasHTML;
})
.catch(err => console.error(err))
  
}

login();