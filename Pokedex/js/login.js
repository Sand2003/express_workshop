//va a tener la logica para que podamos hacer que los datos que ingresen y al momento de dar ingresar, se envien al appi como si estuvieramos usando un postman
window.onload = init;
// va a hacer que cuando una pestaña cargue los envie a init
function init(){
    if(!localStorage.getItem("token")) {
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "signin.html"
    });
    //cuando la  pagina cargue le asignamos al boton secundario(registro) una funcion que va a hacer que nos redirija a la pagina de registro.

    document.querySelector('.btn-primary').addEventListener('click', login);
    //document: objeto que existe en el nmavegador que muestra todo el arbol que deriba del html
    //queryselector: es una funcion en donde le das el nombre de una clase de estilo del html y la regresa.
    //addeventlistener: es para añadirle un elemento ('cuando te den una instruccion', vas a hacer esto)
    }
    else{
        window.location.href = "pokedex.html";
    }
}
function login(){
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_mail: mail, 
            user_password: pass
        }
    }).then(function(res) {
        if(res.data.code === 200){
            localStorage.setItem("token", res.data.message);
            window.location.href = "pokedex.html";
        }
        else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(err){
        console.log(err);
    })
}
