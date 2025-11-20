

/*** 
 * Funções para gerar aleatóriamente o uso de CPU, Memória e Disco
 * ***/
function porcentagemAleatoria() {
    return Math.floor(Math.random() * 100);
}

function atualizarIndicadores() {
    document.getElementById('cpu-uso').innerText = porcentagemAleatoria() + "%";
    document.getElementById('memoria-uso').innerText = porcentagemAleatoria() + " / 16 GB";
    document.getElementById('disco-uso').innerText = porcentagemAleatoria() + " / 512 GB";
}

setInterval(atualizarIndicadores, 5000);
atualizarIndicadores();

