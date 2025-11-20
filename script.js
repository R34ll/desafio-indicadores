const Indicadores = {
    CPU: { id: "cpu-uso", tipo: "percentual", maximo: 100 },
    MEMORIA: { id: "memoria-uso", tipo: "absoluto", maximo: 16 },
    DISCO: { id: "disco-uso", tipo: "absoluto", maximo: 512 },
    // Facil para adicionar novos indicadores no futuro
};

// Cores para diferentes níveis de uso. Feedback Visual que ajuda na interpretação rápida dos dados.
const Cores = {
    VERDE:  "#5CB85C", // < 60
    AMARELO:"#FFC107", // 60 - 79
    VERMELHO:"#D9534F" // >= 80
};

// Função utilitaria que gera um valor aleatório para o indicador baseado no tipo
// "percentual": 0-100%
// "absoluto": 0-maximo
function gerarValor(indicador) {
    if (indicador.tipo === "percentual") return Math.floor(Math.random() * 100);
    return Math.floor(Math.random() * (indicador.maximo + 1));
}

// Função utilitaria que seleciona a cor baseada no percentual de uso. É utilizada para selecionar a cor do texto e da barra de progresso.
function selecionarCor(percentual) {
    if (percentual < 60) return Cores.VERDE;
    if (percentual < 80) return Cores.AMARELO;
    return Cores.VERMELHO;
}

// Atualiza o valor do indicador, a cor do texto e a barra de progresso associada
function atualizarIndicador(indicador) {
    const valor = gerarValor(indicador);
    const elemento = document.getElementById(indicador.id); // Card/Indicador
    if (!elemento) return;

    let percentualBarra = 0;
    if (indicador.tipo === "percentual") {
        elemento.innerText = `${valor}%`;
        percentualBarra = valor;
    } else {
        elemento.innerText = `${valor} / ${indicador.maximo} GB`;
        percentualBarra = Math.round((valor / indicador.maximo) * 100); // Calcular percentual para barra de progresso
    }

    elemento.style.color = selecionarCor(percentualBarra); // Cor do texto

    // Barra de Progresso
    const barId = indicador.id.replace('uso', 'bar'); // Ex: cpu-uso -> cpu-bar
    const barra = document.getElementById(barId); // Barra de progresso
    if (!barra) return;
    barra.style.width = `${percentualBarra}%`;
    barra.style.backgroundColor = selecionarCor(percentualBarra); // Cor da barra de progresso
    barra.setAttribute('aria-valuenow', String(percentualBarra));
}

function atualizarTodosIndicadores() {
    Object.values(Indicadores).forEach(indicador => atualizarIndicador(indicador));
}

// Atualiza o texto da última atualização para informar ao usuário quando os dados foram atualizados pela última vez
function atualizarUltimaAtualizacao() {
    const agora = new Date();
    const dataFormatada = agora.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    const elemento = document.getElementById("ultima-atualizacao");
    if (elemento) elemento.innerText = `Última atualização: ${dataFormatada}`;
}

// Configura o botão de atualizar para permitir atualização manual dos indicadores
function configurarBotaoAtualizar() {
    const botao = document.getElementById("btn-atualizar");
    if (!botao) return;
    botao.addEventListener("click", () => {
        atualizarTodosIndicadores();
        atualizarUltimaAtualizacao();
    });
}

// Função principal que atualiza todos os indicadores e a última atualização
// A função main é chamada na carga da página e a cada 5 segundos para manter os dados atualizados automaticamente.
function main() {
    atualizarTodosIndicadores();
    atualizarUltimaAtualizacao();
}

// Inicia a aplicação quando a página é carregadas
window.onload = () => {
    configurarBotaoAtualizar();
    main();
    setInterval(main, 5000);
};
