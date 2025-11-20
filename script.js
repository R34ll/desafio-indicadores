
const Indicadores = {
    CPU: "cpu-uso",
    MEMORIA: "memoria-uso",
    DISCO: "disco-uso"
}

/*** 
 * Funções para gerar aleatóriamente o uso de CPU, Memória e Disco
 * 
***/
function porcentagemAleatoria() {
    return Math.floor(Math.random() * 100);
}

function atualizarIndicadores() {
    atualizarIndicador(Indicadores.CPU, porcentagemAleatoria() + "%");
    atualizarIndicador(Indicadores.MEMORIA, porcentagemAleatoria() + " / 16 GB");
    atualizarIndicador(Indicadores.DISCO, porcentagemAleatoria() + " / 512 GB");
}

function atualizarIndicador(id, valor){
    document.getElementById(id).innerText = valor;
    atualizarCorIndicador(id, valor);
}


function atualizarCorIndicador(id, valor) {
    let elemento = document.getElementById(id);
    let porcentagem = parseInt(valor);

    if (porcentagem < 60) {
        elemento.style.color = "#5CB85C"; 
    } else if (porcentagem < 80) {
        elemento.style.color = "#FFC107";
    } else {
        elemento.style.color = "#D9534F";
    }
}


setInterval(atualizarIndicadores, 5000);
atualizarIndicadores();

