
const campo1 = document.getElementById("avaliaCodigo");
const campo2 = document.getElementById("codigoEscolhido");
const btn = document.getElementById("btn");

const easyMode = document.getElementById("easyMode");
const chutes = document.getElementById("chutesJaRealizados");


// Após carregar página
campo1.disabled = true;
campo1.value = "- - - -"
chutes.style.display = "none";


// Ação do Botão
btn.addEventListener("click",avaliaChute)

// Ação do Checkbox
easyMode.addEventListener("click",liberaEasymode)