const codigoCorreto = Math.round(10000*Math.random());
const correto = segmentaValor(codigoCorreto);


function bloqueiaCampo1(){
    campo1.disabled = "true"
    campo1.value = "- - - -"
}

let digitos;
let tentativas = 0;
function avaliaChute() {
    // 1) Verifica quantidade de dígitos
    tentativas++;

    let codigoDigitado = parseInt(campo2.value);
    let qntDigitos = codigoDigitado.toString().length;
    let tudoOk = true;
 
    if (qntDigitos != 4) {
        // Não foi digitado um número correto
        alert("Não foi digitado um código válido")
        tudoOk = false;
    } 
    if (tudoOk) {
        // 2) Avalia cada dígito para imprimir correção
        chutes.innerHTML = codigoDigitado + "<br/>" + chutes.innerHTML;
        digitos = segmentaValor(codigoDigitado)
        avaliaDigitos(digitos,correto)

        // 3) Avalia se é o mesmo código sorteado
        if (codigoDigitado == codigoCorreto) {
            alert("PARABÉNS! Você recisou de "+tentativas+" tentativas");
            btn.disabled = "true";
            campo2.disabled = "true";
        }
    }
    


    


}

function segmentaValor(codigo) {
    codigo = codigo.toString();

    let numSeg = [];
    for (let i = 0; i < codigo.length; i++) {
        numSeg[i] = parseInt(codigo[i]);
    }
    return numSeg;
}

function avaliaDigitos(chute,correto) {
    let resp = "";
    for (let i = 0; i < chute.length; i++) {
        if (chute[i] == correto[i]) {
            resp += "✔️";
        } else {
            resp += "✘";
        }
    }
    campo1.value = resp;
}


function liberaEasymode() {
    if (easyMode.checked) {
        chutes.style.display = ""
    } else {
        chutes.style.display = "none"
    }
}
