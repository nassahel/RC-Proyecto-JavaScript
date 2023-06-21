const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => login(e));

function login(e) {
  e.preventDefault();
  const user = document.getElementById("users").value;
  const pass = document.getElementById("password").value;
  const visible = document.getElementById("visible").value;

  console.log(user);
  console.log(pass);

  if (user == "admin23" && pass == "123456") {
    window.location.href = "administracion.html";
  } else {
    alert("Datos incorrectos");
  }
}

function mostrar() {
     var tipo = document.getElementById("password");

     if(tipo.type == 'password') {
      tipo.type = 'text';
     }
     else {
        tipo.type = 'password' ;
     }
}
