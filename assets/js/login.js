const URL_BASE = "https://bootcamp-adviters.herokuapp.com";

const handleSubmit = (ev) => {
    ev.preventDefault();
    const email = ev.target.elements["email"].value;
    const password = ev.target.elements["pass"].value;
    loginUser(email, password);
}

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
    fetch(`${URL_BASE}/login`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("token", data.accessToken?.stsTokenManager?.accessToken);
            window.location.href = "../../views/index.html";
        })
        .catch(err => console.error(err))
}