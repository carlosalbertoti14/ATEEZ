
//******INÍCIO DA CONFIGURAÇÃO DO MOUSE MÁGICO****

// ============================
// CLIQUE MÁGICO (.GIF + SOM)
// ============================
document.addEventListener('click', function (event) {
    // Adiciona um ouvinte de evento para o evento de 'click' em toda a página.
    // A função anônima será executada sempre que um clique ocorrer.
    const cliqueX = event.pageX;
    // Obtém a coordenada X (horizontal) do ponto onde o clique ocorreu.
    const cliqueY = event.pageY;
    // Obtém a coordenada Y (vertical) do ponto onde o clique ocorreu.

    const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();
    // Define o caminho para o arquivo GIF que será exibido no clique.
    // Adiciona um parâmetro aleatório (`Date.now()`) para evitar o cache do navegador.

    const gifElement = document.createElement('img');
    // Cria um novo elemento de imagem (`<img>`) no DOM.
    gifElement.src = caminhoGif;
    // Define o atributo 'src' do elemento de imagem para o caminho do GIF.
    gifElement.style.position = 'absolute';
    // Define a posição do elemento como 'absolute' para que possa ser posicionado precisamente.
    gifElement.style.zIndex = '9999';
    // Define um 'zIndex' alto para garantir que o GIF apareça acima de outros elementos.
    gifElement.style.pointerEvents = 'none';
    // Impede que o GIF interaja com eventos do mouse (cliques, etc.).
    gifElement.style.width = '150px';   // Define a largura do GIF no clique.
    gifElement.style.height = '150px';  // Define a altura do GIF no clique.

    document.body.appendChild(gifElement);
    // Adiciona o elemento de imagem (o GIF) como um filho do elemento `<body>` do documento.

    gifElement.onload = function () {
        // Define uma função a ser executada quando o GIF terminar de carregar.
        const offsetX = gifElement.offsetWidth / 2;
        // Calcula o deslocamento horizontal para centralizar o GIF no ponto do clique.
        const offsetY = gifElement.offsetHeight / 2;
        // Calcula o deslocamento vertical para centralizar o GIF no ponto do clique.

        gifElement.style.left = `${cliqueX - offsetX}px`;
        // Define a posição 'left' do GIF para centralizá-lo horizontalmente no clique.
        gifElement.style.top = `${cliqueY - offsetY}px`;
        // Define a posição 'top' do GIF para centralizá-lo verticalmente no clique.

        setTimeout(() => gifElement.remove(), 800); //tempo em que o gif de clique é executado
        // Define um temporizador para remover o elemento GIF do DOM após 800 milissegundos.
    };

    gifElement.onerror = function () {
        // Define uma função a ser executada se houver um erro ao carregar o GIF.
        console.error("Erro ao carregar o GIF:", caminhoGif);
        // Exibe uma mensagem de erro no console com o caminho do GIF que falhou ao carregar.
    };

    // Verifica se a variável `somCliqueMuted` existe e é falsa (não está mutado)
    // Se a variável não for definida em outro lugar, considere inicializá-la como `false` no topo do script.
    if (typeof somCliqueMuted === 'undefined' || !somCliqueMuted) {
        const somClique = new Audio("sons/CLIQUE.mp3");
        // Cria um novo objeto de áudio com o arquivo de som do clique.
        somClique.play().catch((e) => {
            // Tenta reproduzir o som do clique e captura qualquer erro que possa ocorrer.
            console.warn("Erro ao tocar som de clique:", e);
            // Exibe um aviso no console se houver um erro ao tocar o som do clique.
        });
    }
});

// ============================
// ARRASTAR MÁGICO (DESKTOP) - UNIFICADO
// ============================
let ultimoSomArrastarDesktop = null;
// Variável para armazenar o último objeto de áudio de arrastar tocado no desktop.
let podeTocarSomArrastarDesktop = false;
// Variável de controle para permitir ou impedir a reprodução do som de arrastar no desktop.
// CORREÇÃO: Use clientX e clientY para detectar movimento real do cursor na tela
let ultimaPosicaoDesktopX = 0; // Armazena a última posição X do mouse na viewport
let ultimaPosicaoDesktopY = 0; // Armazena a última posição Y do mouse na viewport
const distanciaMinimaDesktop = 30; // Ajuste conforme necessário
// Define a distância mínima que o mouse deve se mover para ativar o efeito de arrastar no desktop.

document.addEventListener('click', () => { podeTocarSomArrastarDesktop = true; });
// Adiciona um ouvinte de evento de 'click' para habilitar a reprodução do som de arrastar no desktop após um clique.

function criarTrilhaMagicaDesktop(x, y) {
    // Função para criar o efeito visual (GIF) da trilha mágica no desktop.
    const caminhoGif = "midia/clique_magico2.gif?rand=" + Date.now();
    // Define o caminho para o arquivo GIF, evitando o cache.
    const gifElement = document.createElement('img');
    // Cria um novo elemento de imagem para o GIF.
    gifElement.src = caminhoGif;
    // Define o 'src' do GIF.
    gifElement.style.position = 'fixed'; // Alterado para 'fixed' para que o GIF siga o mouse na viewport
    // Define a posição como 'fixed'.
    gifElement.style.zIndex = '9999';
    // Garante que o GIF fique acima de outros elementos.
    gifElement.style.pointerEvents = 'none';
    // Impede a interação do GIF com eventos do mouse.
    gifElement.style.width = '90px';    // Define a largura do GIF ao arrastar (desktop).
    gifElement.style.height = '90px';   // Define a altura do GIF ao arrastar (desktop).
    
    document.body.appendChild(gifElement);
    // Adiciona o GIF ao corpo do documento.

    // Verifica se a variável `somArrastarMuted` existe e é falsa (não está mutado)
    if (podeTocarSomArrastarDesktop && (!ultimoSomArrastarDesktop || ultimoSomArrastarDesktop.ended)) {
        if (typeof somArrastarMuted === 'undefined' || !somArrastarMuted) {
            // Cria um novo objeto de áudio para o som de arrastar.
            ultimoSomArrastarDesktop = new Audio("sons/ARRASTAR.mp3");
            ultimoSomArrastarDesktop.play().catch((e) => {
                // Tenta reproduzir o som e captura erros.
                console.warn("Erro ao tocar som de arrastar (desktop):", e);
                // Exibe um aviso se houver erro ao tocar o som.
            });
        }
    }

    gifElement.onload = function () {
        // Função a ser executada quando o GIF carregar.
        const offsetX = gifElement.offsetWidth / 2;
        // Calcula o deslocamento horizontal para centralizar.
        const offsetY = gifElement.offsetHeight / 2;
        // Calcula o deslocamento vertical para centralizar.
        gifElement.style.left = `${x - offsetX}px`;
        // Define a posição 'left' do GIF.
        gifElement.style.top = `${y - offsetY}px`;
        // Define a posição 'top' do GIF.
        setTimeout(() => gifElement.remove(), 1000);
        // Remove o GIF após 1000 milissegundos (1 segundo).
    };

    gifElement.onerror = function () {
        // Função a ser executada em caso de erro ao carregar o GIF.
        console.error("Erro ao carregar o GIF (desktop):", caminhoGif);
        // Exibe um erro no console.
    };
}

if (!('ontouchstart' in window)) {
    // Verifica se o dispositivo NÃO suporta eventos de toque (indicando que é um desktop).
    document.addEventListener('mousemove', function (e) {
        // CORREÇÃO: Usar clientX e clientY para movimento real do mouse
        const currentX = e.clientX;
        const currentY = e.clientY;

        // Calcula a distância euclidiana para um movimento mais preciso
        const distanceMoved = Math.sqrt(
            Math.pow(currentX - ultimaPosicaoDesktopX, 2) +
            Math.pow(currentY - ultimaPosicaoDesktopY, 2)
        );

        if (distanceMoved > distanciaMinimaDesktop) {
            ultimaPosicaoDesktopX = currentX; // Atualiza a última posição X na viewport
            ultimaPosicaoDesktopY = currentY; // Atualiza a última posição Y na viewport
            criarTrilhaMagicaDesktop(currentX, currentY); // Passa clientX e clientY para o posicionamento
        }
    });
}

// ============================
// ARRASTAR MÁGICO NO MOBILE
// (com GIFs fixos que acompanham o conteúdo da tela)
// ============================

let ultimoSomArrastarMobile = null;
// Variável para armazenar o último objeto de áudio de arrastar tocado no mobile.
let podeTocarSomArrastarMobile = false;
// Variável de controle para permitir ou impedir a reprodução do som de arrastar no mobile.
let primeiroToque = null;
// Variável para armazenar as coordenadas do primeiro toque para calcular o movimento.
const distanciaMinimaMobile = 30; // Distância mínima para ativar o efeito
// Define a distância mínima que o dedo deve se mover para ativar o efeito de arrastar no mobile.
let podeCriarGifMobile = true; // Variável de controle para limitar a criação de GIFs no mobile.
const intervaloMinimoGifMobile = 50; // Intervalo mínimo em milissegundos
// Define o intervalo mínimo entre a criação de GIFs no mobile para otimizar o desempenho.
let ultimoTempoCriacaoGifMobile = 0; // Variável para armazenar o timestamp da última vez que um GIF foi criado no mobile.

// Ativa o som de arrastar após qualquer toque e guarda a posição inicial
document.addEventListener('touchstart', (e) => {
    // Adiciona um ouvinte de evento para o início de um toque na tela.
    podeTocarSomArrastarMobile = true;
    // Permite a reprodução do som de arrastar.
    if (e.touches.length > 0) {
        // Verifica se há pelo menos um toque.
        primeiroToque = {
            // Armazena as coordenadas do primeiro toque.
            clientX: e.touches[0].clientX,
            // Coordenada X do toque.
            clientY: e.touches[0].clientY
            // Coordenada Y do toque.
        };
    }
});

function criarTrilhaMagicaMobile(clientX, clientY) {
    // Função para criar o efeito visual (GIF) da trilha mágica no mobile.
    const agora = Date.now();
    // Obtém o timestamp atual.
    if (!podeCriarGifMobile || (agora - ultimoTempoCriacaoGifMobile < intervaloMinimoGifMobile)) {
        // Verifica se pode criar um GIF e se o intervalo mínimo desde a última criação não foi atingido.
        return; // Impede a criação se as condições não forem atendidas.
    }
    podeCriarGifMobile = false;
    // Impede a criação de mais GIFs até que o intervalo seja atingido.
    ultimoTempoCriacaoGifMobile = agora;
    // Atualiza o timestamp da última criação do GIF.
    setTimeout(() => { podeCriarGifMobile = true; }, intervaloMinimoGifMobile);
    // Reabilita a criação de GIFs após o intervalo mínimo.

    const caminhoGif = "midia/clique_magico2.gif?rand=" + agora;
    // Define o caminho do GIF, evitando o cache.

    const gifElement = document.createElement('img');
    // Cria um novo elemento de imagem para o GIF.
    gifElement.src = caminhoGif;
    // Define o 'src' do GIF.
    gifElement.style.position = 'fixed';
    // Define a posição como 'fixed' para que o GIF acompanhe a tela durante o scroll.
    gifElement.style.zIndex = '9999';
    // Garante que o GIF fique acima de outros elementos.
    gifElement.style.pointerEvents = 'none';
    // Impede a interação do GIF com eventos de toque.
    gifElement.style.width = '80px';    // Define a largura do GIF ao arrastar (mobile).
    gifElement.style.height = '80px';   // Define a altura do GIF ao arrastar (mobile).

    document.body.appendChild(gifElement);
    // Adiciona o GIF ao corpo do documento.

    // Toca o som apenas se permitido e se o som anterior terminou
    // Verifica se a variável `somArrastarMuted` existe e é falsa (não está mutado)
    if (podeTocarSomArrastarMobile && (!ultimoSomArrastarMobile || ultimoSomArrastarMobile.ended)) {
        if (typeof somArrastarMuted === 'undefined' || !somArrastarMuted) {
            // Cria um novo objeto de áudio para o som de arrastar.
            ultimoSomArrastarMobile = new Audio("sons/ARRASTAR.mp3");
            ultimoSomArrastarMobile.play().catch((e) => {
                // Tenta reproduzir o som e captura erros.
                console.warn("Erro ao tocar som de arrastar (mobile):", e);
                // Exibe um aviso se houver erro ao tocar o som.
            });
        }
    }

    gifElement.onload = function () {
        // Função a ser executada quando o GIF carregar.
        const offsetX = gifElement.offsetWidth / 2;
        // Calcula o deslocamento horizontal para centralizar.
        const offsetY = gifElement.offsetHeight / 2;
        // Calcula o deslocamento vertical para centralizar.

        gifElement.style.left = `${clientX - offsetX}px`;
        // Define a posição 'left' do GIF.
        gifElement.style.top = `${clientY - offsetY}px`;
        // Define a posição 'top' do GIF.

        setTimeout(() => gifElement.remove(), 1000);
        // Remove o GIF após 1000 milissegundos (1 segundo).
    };

    gifElement.onerror = function () {
        // Função a ser executada em caso de erro ao carregar o GIF.
        console.error("Erro ao carregar o GIF (mobile):", caminhoGif);
        // Exibe um erro no console.
    };
}

// Touch
document.addEventListener('touchmove', function (e) {
    // Adiciona um ouvinte de evento para o movimento do toque na tela.
    if (e.touches.length > 0 && primeiroToque) {
        // Verifica se há pelo menos um toque e se a posição inicial do toque foi registrada.
        const touch = e.touches[0];
        // Obtém as informações do primeiro toque.
        const deltaX = Math.abs(touch.clientX - primeiroToque.clientX);
        // Calcula a diferença absoluta na coordenada X entre o toque atual e o inicial.
        const deltaY = Math.abs(touch.clientY - primeiroToque.clientY);
        // Calcula a diferença absoluta na coordenada Y entre o toque atual e o inicial.

        if (deltaX > distanciaMinimaMobile || deltaY > distanciaMinimaMobile) {
            // Verifica se o movimento horizontal OU vertical excedeu a distância mínima definida.
            criarTrilhaMagicaMobile(touch.clientX, touch.clientY);
            // Chama a função para criar a trilha mágica na posição atual do toque.
            primeiroToque = { clientX: touch.clientX, clientY: touch.clientY };
            // Atualiza a posição inicial do toque para o próximo cálculo de movimento.
        }
    }
});

// Reseta a posição inicial quando o toque termina
document.addEventListener('touchend', () => {
    // Adiciona um ouvinte de evento para quando um toque termina (o dedo é levantado).
    primeiroToque = null;
    // Reseta a variável que armazena a posição inicial do toque.
});

document.addEventListener('touchcancel', () => {
    // Adiciona um ouvinte de evento para quando um toque é interrompido (cancelado pelo sistema).
    primeiroToque = null;
    // Reseta a variável que armazena a posição inicial do toque.
});

//******FIM DA CONFIGURAÇÃO DO MOUSE MÁGICO (MOBILE)****

//******FIM DA CONFIGURAÇÃO DO MOUSE MÁGICO***