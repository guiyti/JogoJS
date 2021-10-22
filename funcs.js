// gera número aleatório
const codigoCorreto = Math.round(10000*Math.random());
const codigoString = codigoCorreto.toString();

let tentativas = 0;


// função executada quando o evento click for executado
function avaliaChute() {
    tentativas++;
    
    // captura String
    let entradaString = campo2.value;
    // converte String para número
    let entradaNumero = parseInt(entradaString);
    // converte número para String
    let chuteString = entradaNumero.toString();

    // Valida entrada e executa bloco principal
    if (chuteString.length != 4) {
        alert("Não foi digitado um código válido")

    } else { 
        // Bloco principal

        // Função que compara cada dígito (compara caracteres)
        avaliaDigitos(chuteString,codigoString)

        // Avalia se é o chute está correto
        if (chuteString == codigoString) {
            btn.disabled = true;
            campo2.disabled = true;
            alert("PARABÉNS! Você precisou de " + tentativas + " tentativas");
        }

        // Imprime os chutes realizados 
        chutes.innerHTML = chuteString + "<br/>" + chutes.innerHTML;

    }
}



function avaliaDigitos(chuteString,codigoString) {
    
    let resp = "";
    for (let i = 0; i < codigoString.length; i++) {
        // com operador ternário
        resp += (chuteString[i] == codigoString[i]) ? "✔️" : "✘";

        // com if-else
        // if (chuteString[i] == codigoString[i]) {
        //     resp += "✔️";
        // } else {
        //     resp += "✘";
        // }        
    }
    campo1.value = resp;


    
}


function liberaEasymode() {

    // com o operador ternário
    chutes.style.display = (easyMode.checked) ? "" : "none";

    // com if-else
    // if (easyMode.checked) {
    //     chutes.style.display = ""
    // } else {
    //     chutes.style.display = "none"
    // }

}
