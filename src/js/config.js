export const Indicadores = {
    CPU: { id: "cpu-uso", tipo: "percentual", maximo: 100 },
    MEMORIA: { id: "memoria-uso", tipo: "absoluto", maximo: 16 },
    DISCO: { id: "disco-uso", tipo: "absoluto", maximo: 512 },
    // Facil para adicionar novos indicadores no futuro
};

// Cores para diferentes níveis de uso. Feedback Visual que ajuda na interpretação rápida dos dados.
export const Cores = {
    VERDE:  "#5CB85C", // < 60
    AMARELO:"#FFC107", // 60 - 79
    VERMELHO:"#D9534F" // >= 80
};