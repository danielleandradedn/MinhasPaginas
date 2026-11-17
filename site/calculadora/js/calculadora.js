function limparTudo() {
    document.getElementById("display").value = "";
}

function limpar() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function adicionarNumeroZero(numero) {
    document.getElementById("display").value += numero;
}

function adicionarNumero(numero) {
    document.getElementById("display").value += numero;
}

function adicionarOperador(operador) {
    const display = document.getElementById("display");
    const ultimoCaractere = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(ultimoCaractere)) {
        display.value = display.value.slice(0, -1) + operador;
    } else {
        display.value += operador;
    }
}

function adicionarPonto(ponto) {
    const display = document.getElementById("display");
    const inicioNumero = Math.max(
        display.value.lastIndexOf("+"),
        display.value.lastIndexOf("-"),
        display.value.lastIndexOf("*"),
        display.value.lastIndexOf("/")
    );
    const numeroAtual = display.value.slice(inicioNumero + 1);
    if (!numeroAtual.includes(".")) {
        display.value += ponto;
    }
}

function calcular() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}