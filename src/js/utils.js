// Função utilitaria que gera um valor aleatório para o indicador baseado no tipo
// "percentual": 0-100%
// "absoluto": 0-maximo
import { Cores } from './config.js';

export function gerarValor(indicador) {
    if (indicador.tipo === "percentual") return Math.floor(Math.random() * 100);
    return Math.floor(Math.random() * (indicador.maximo + 1));
}

// Função utilitaria que seleciona a cor baseada no percentual de uso. É utilizada para selecionar a cor do texto e da barra de progresso.
export function selecionarCor(percentual) {
    if (percentual < 60) return Cores.VERDE;
    if (percentual < 80) return Cores.AMARELO;
    return Cores.VERMELHO;
}
