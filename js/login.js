

function login(){
    var user, pass;

    user = document.getElementById("users").value;
    pass = document.getElementById("password").value;

   if(user == "admin23" && pass == "987654321"){
       window.location= "administracion.html"
   }

   else {
       alert("Datos incorrectos")
   }
}



button.addEventListener('click', (e) => {
     e.preventDefault()
     const data = {
        username: users.value,
        password: password.value

     }
} )