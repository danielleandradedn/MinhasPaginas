//obtém o formulário de login pelo ID
document.getElementById("loginForm")
const loginForm = document.getElementById("loginForm");

//se o usuário e senha estiverem vazios, exibe uma mensagem de erro
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    //obtém os valores dos campos de usuário e senha
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username); //exibe o valor do usuário
    console.log("Password:", password); //exibe o valor da senha

    //se o usuário estiver vazio, mostrar uma mensagem abaixo do campo de usuário
    if (username.trim() === "") {
        document.getElementById("usernameVazio").textContent = "Por favor, insira seu usuário.";
    } else {
        document.getElementById("usernameVazio").textContent = "";
    }

    //se a senha estiver vazia, mostrar uma mensagem abaixo do campo de senha
    if (password.trim() === "") {
        document.getElementById("passwordVazio").textContent = "Por favor, insira sua senha.";
    } else {
        document.getElementById("passwordVazio").textContent = "";
    }
});





