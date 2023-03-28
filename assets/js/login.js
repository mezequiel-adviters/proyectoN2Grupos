const URL_BASE = "https://bootcamp-adviters.herokuapp.com";

//Obtencion de datos con boton

const handleSubmit = (ev) => {
    ev.preventDefault();
    const email = ev.target.elements["email"].value;
    const password = ev.target.elements["pass"].value;
    loginUser(email, password);
}
    //Logueo
    
const loginUser = (email, pass) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify({
            "email": email, 
            "password": pass
        }) 
    }

    //Peticion acceso login

fetch(`${URL_BASE}/login`, options)
    .then(response => {if (response.status == 200) {
        return response.json();
    }else if (response.status == 400) {
        throw new Error();
    }
    })
    .then(data => {
            localStorage.setItem("token", data.accessToken?.stsTokenManager?.accessToken);
            window.location.href = "../../views/index.html";
    })
    .catch(err => {
        console.log(Error)
        alert("Error, credenciales incorrectas")
        
    })
}