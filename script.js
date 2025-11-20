


/*** 
 * Funções para gerar aleatóriamente o uso de CPU, Memória e Disco
 * 
***/
function porcentagemAleatoria() {
    return Math.floor(Math.random() * 100);
}

function atualizarIndicadores() {
    atualizarIndicador('cpu-uso', porcentagemAleatoria() + "%");
    atualizarIndicador('memoria-uso', porcentagemAleatoria() + " / 16 GB");
    atualizarIndicador('disco-uso', porcentagemAleatoria() + " / 512 GB");
}

function atualizarIndicador(id, valor){
    document.getElementById(id).innerText = valor;
    atualizarCorIndicador(id, valor);
}


function atualizarCorIndicador(id, valor) {
    let elemento = document.getElementById(id);
    let porcentagem = parseInt(valor);

    if (porcentagem < 50) {
        elemento.style.color = "green";
    } else if (porcentagem < 80) {
        elemento.style.color = "orange";
    } else {
        elemento.style.color = "red";
    }
}


setInterval(atualizarIndicadores, 5000);
atualizarIndicadores();

