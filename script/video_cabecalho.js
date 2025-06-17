
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.header-visual-container');
            const images = document.querySelectorAll('.slideshow-image');
            const totalAnimationDuration = 9000; // Duração total da animação em milissegundos (9 segundos)
            const imageSlotDuration = 3000; // Duração de cada slot de imagem no ciclo (3 segundos)

            function adjustContainerHeight() {
                const currentTime = Date.now() % totalAnimationDuration; // Tempo atual no ciclo da animação
                let currentImageIndex = Math.floor(currentTime / imageSlotDuration);

                // Garante que o índice não exceda o número de imagens
                if (currentImageIndex >= images.length) {
                    currentImageIndex = images.length - 1; // Ou 0 para recomeçar, dependendo do ponto exato do loop
                }

                // Ajusta a altura com base na imagem que deve estar visível
                const imageToAdjust = images[currentImageIndex];

                if (imageToAdjust && imageToAdjust.naturalHeight > 0) {
                    container.style.height = imageToAdjust.offsetHeight + 'px';
                } else if (imageToAdjust) {
                    // Caso a imagem ainda não tenha sido totalmente carregada
                    imageToAdjust.onload = () => {
                        container.style.height = imageToAdjust.offsetHeight + 'px';
                    };
                }
            }

            // Chama a função para ajustar a altura continuamente
            // Um intervalo menor (ex: 100ms) garante que a altura se ajuste suavemente
            setInterval(adjustContainerHeight, 100); 

            // Ajusta a altura na carga inicial da página
            adjustContainerHeight();

            // Adiciona um listener para redimensionamento da janela
            window.addEventListener('resize', adjustContainerHeight);
        });
