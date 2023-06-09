function entrar() {
    var login_usuario = document.getElementById("usuario").value;
    var login_senha = document.getElementById("senha").value;

    if(login_usuario === "usuario" && login_senha === "password") {
        window.location.href="coracao.html";
    } else {
        location.reload();
    }
}