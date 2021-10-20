
const campo1 = document.getElementById("avaliaCodigo");
const campo2 = document.getElementById("codigoEscolhido");
const btn = document.getElementById("btn");

const easyMode = document.getElementById("easyMode");
const chutes = document.getElementById("chutesJaRealizados");
chutes.style.display = "none";

// Após carregar conteúdo
window.addEventListener("load",bloqueiaCampo1);


// Ação do Botão
btn.addEventListener("click",avaliaChute)


// Ação do Checkbox
easyMode.addEventListener("click",liberaEasymode)