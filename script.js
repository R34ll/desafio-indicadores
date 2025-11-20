const Indicadores = {
    CPU: { id: "cpu-uso", tipo: "percentual", maximo: 100 },
    MEMORIA: { id: "memoria-uso", tipo: "absoluto", maximo: 16 },
    DISCO: { id: "disco-uso", tipo: "absoluto", maximo: 512 }
};

const Cores = {
    VERDE:  "#5CB85C", // < 60
    AMARELO:"#FFC107", // 60 - 79
    VERMELHO:"#D9534F" // >= 80
};

function gerarPorcentagem() {
    return Math.floor(Math.random() * 100);
}

function selecionarCor(percentual) {
    if (percentual < 60) return Cores.VERDE;
    if (percentual < 80) return Cores.AMARELO;
    return Cores.VERMELHO;
}

function atualizarElementoTexto(id, texto) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.innerText = texto;
}

function atualizarIndicador(indicador) {
    const percentual = gerarPorcentagem();
    const elemento = document.getElementById(indicador.id);

    if (!elemento) return;

    if (indicador.tipo === "percentual") {
        elemento.innerText = `${percentual}%`;
    } else {
        elemento.innerText = `${percentual} / ${indicador.maximo} GB`;
    }

    elemento.style.color = selecionarCor(percentual);
}

function atualizarTodosIndicadores() {
    Object.values(Indicadores).forEach(indicador => atualizarIndicador(indicador));
}

function atualizarUltimaAtualizacao() {
    const agora = new Date();
    
    const dataFormatada = agora.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    atualizarElementoTexto("ultima-atualizacao", `Última atualização: ${dataFormatada}`);
}

function configurarBotaoAtualizar() {
    const botao = document.getElementById("btn-atualizar");
    if (!botao) return;

    botao.addEventListener("click", () => {
        atualizarTodosIndicadores();
        atualizarUltimaAtualizacao();
    });
}

function main() {
    atualizarTodosIndicadores();
    atualizarUltimaAtualizacao();
}

window.onload = () => {
    configurarBotaoAtualizar();
    main();
    setInterval(main, 5000);
};
