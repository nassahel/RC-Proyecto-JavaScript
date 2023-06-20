

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


const $user = document.getElementById("users")
      $pass = document.getElementById("password")
      $visible = document.getElementById("visible")

document.addEventListener("change", (e)=> {
     if (e.target === $visible){
           if($visible.checked === false) $password.type = "password";
           else $password.type = text;
     }
})      

document.addEventListener("click", (e)=> {
     if (e.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location.href = "administracion.html"
        }
     }
})

//button.addEventListener('click', (e) => {
 //    e.preventDefault()
 //    const data = {
  //      username: users.value,
 //       password: password.value
//
 //    }
//} )