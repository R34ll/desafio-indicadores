# Desafio Indicadores
Projeto front-end que exibe indicadores do sistema (CPU, Memória e Disco) em cards com barras de progresso. Os valores são gerados de forma simulada e atualizados automaticamente para demonstrar o comportamento em tempo real.

- Este repositório contém uma página estática que apresenta os indicadores com:
- um valor exibido (por exemplo `42%` ou `8 / 16 GB`);
- uma barra de progresso sincronizada com o valor;
- mudança de cor conforme o nível (verde / amarelo / vermelho), seguindo regras de uso.

A implementação foi organizada em módulos ES para manter o código limpo e fácil de estender, com lógica separada para valores, interface e configuração. O layout utiliza Bootstrap para garantir responsividade(Desktop/Mobile), clareza visual e acessibilidade, além de permitir rápida adaptação para novos indicadores ou funcionalidades.


## Tecnologias utilizadas

- HTML5
- CSS (custom + Bootstrap 5)
- JavaScript (ES modules)

Estrutura relevante:

```
desafio-indicadores/
├─ index.html
├─ src/
│  ├─ js/
│  │  ├─ main.js       # entrypoint (module)
│  │  ├─ ui.js         # manipulação do DOM e render
│  │  ├─ utils.js      # funções utilitárias (gerar valor, selecionar cor)
│  │  └─ config.js     # constantes/indicadores/cores
│  └─ assets/
│     ├─ css/
│     │  └─ style.css  # estilos principais
│     └─ screenshot-01.png
```

## Como executar localmente

Requisitos: navegador moderno com suporte a ES modules.

Passos rápidos (porta 8000):

```bash
# a partir da raiz do repositório
python3 -m http.server 8000
# Depois abra: http://localhost:8000
```
## Versão online

Além da execução local, você pode visualizar a página funcionando em:
**[GitHub Pages](https://r34ll.github.io/desafio-indicadores/)**



## Screenshots

![screenshot-placeholder](src/assets/screenshot-01.png)

## Extras Implementados 
- Feedback visual acessível (cores neutras, contraste e animações suaves).
- Código modular (separação clara entre lógica, UI e config).
- Estrutura pensada para expansão (novos indicadores podem ser adicionados rapidamente).
- Padrão de commits seguindo lógica progressiva e organizada.
