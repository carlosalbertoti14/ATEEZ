// CONFIGURA CAIXA DE EXPLICAÇÃO

document.addEventListener('DOMContentLoaded', function() {
    const infoBoxShows = document.querySelectorAll('.infoboxshow');

    infoBoxShows.forEach(function(showSpan) {
        showSpan.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede a propagação do clique

            const hiddenSpan = this.querySelector('.infoboxhiden'); // Encontra o span escondido dentro do clicado

            if (hiddenSpan) {
                const isVisible = hiddenSpan.style.display === 'block';

                // Mostra ou esconde o atual
                hiddenSpan.style.display = isVisible ? 'none' : 'block';

                // Aplica estilo para garantir que fique por cima
                if (!isVisible) {
                    hiddenSpan.style.position = 'absolute'; // ou 'fixed' se quiser fixo na tela
                    hiddenSpan.style.zIndex = '9999';
                }
            }

            // Esconde outros spans escondidos abertos
            infoBoxShows.forEach(function(otherShowSpan) {
                if (otherShowSpan !== showSpan) {
                    const otherHiddenSpan = otherShowSpan.querySelector('.infoboxhiden');
                    if (otherHiddenSpan && otherHiddenSpan.style.display === 'block') {
                        otherHiddenSpan.style.display = 'none';
                    }
                }
            });
        });
    });

    // Esconde os spans escondidos ao clicar fora de qualquer .infoboxshow
    document.addEventListener('click', function(event) {
        infoBoxShows.forEach(function(showSpan) {
            if (!showSpan.contains(event.target)) {
                const hiddenSpan = showSpan.querySelector('.infoboxhiden');
                if (hiddenSpan && hiddenSpan.style.display === 'block') {
                    hiddenSpan.style.display = 'none';
                }
            }
        });
    });

    // Esconde os spans escondidos ao rolar a página
    window.addEventListener('scroll', function() {
        infoBoxShows.forEach(function(showSpan) {
            const hiddenSpan = showSpan.querySelector('.infoboxhiden');
            if (hiddenSpan && hiddenSpan.style.display === 'block') {
                hiddenSpan.style.display = 'none';
            }
        });
    });
});

// FIM DA CAIXA DE EXPLICAÇÃO
