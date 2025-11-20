import { 
    atualizarTodosIndicadores, 
    atualizarUltimaAtualizacao, 
    configurarBotaoAtualizar 
} from './ui.js';

// Função principal que atualiza todos os indicadores e a última atualização
function main() {
    atualizarTodosIndicadores();
    atualizarUltimaAtualizacao();
}

// Inicia a aplicação quando a página é carregada
window.onload = () => {
    // 1. Configura o botão usando a função 'main' como callback
    configurarBotaoAtualizar(main);
    
    // 2. Executa a primeira atualização
    main();
    
    // 3. Configura o loop de atualização automática (5 segundos)
    setInterval(main, 5000);
};