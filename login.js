var users = [
    { username: "example@icloud.com", password: "password1" },
    { username: "example@gmail.com", password: "password2" },
    { username: "example@outlook.com", password: "password3" },
    { username: "example@hotmail.com", password: "password4" },
    { username: "example@yahoo.com", password: "password5" }
  ];
  
  function validateLoginForm(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var validUser = false;
  
    for (var i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        validUser = true;
        break;
      }
    }
  
    if (validUser) {
      var saldo = Math.floor(Math.random() * 10000) + 1;
  
      window.location.href = "dashboard.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
  
  function validateRegisterForm(event) {
    event.preventDefault();
  
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    users.push({ username: newUsername, password: newPassword });
  
    alert("Cuenta creada exitosamente. Por favor, inicia sesión.");
    window.location.href = "login.html";
  }
  
