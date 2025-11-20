import { gerarValor, selecionarCor } from './utils.js';
import { Indicadores } from './config.js';

// Atualiza o valor do indicador, a cor do texto e a barra de progresso associada
export function atualizarIndicador(indicador) {
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

export function atualizarTodosIndicadores() {
    Object.values(Indicadores).forEach(indicador => atualizarIndicador(indicador));
}

// Atualiza o texto da última atualização para informar ao usuário quando os dados foram atualizados pela última vez
export function atualizarUltimaAtualizacao() {
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
// Configura o botão de atualizar para permitir atualização manual dos indicadores
// aceita um callback opcional (ex: main) para executar quando o botão for clicado
export function configurarBotaoAtualizar(callback) {
    const botao = document.getElementById("btn-atualizar");
    if (!botao) return;
    botao.addEventListener("click", () => {
        if (typeof callback === 'function') {
            callback();
        } else {
            atualizarTodosIndicadores();
            atualizarUltimaAtualizacao();
        }
    });
}
