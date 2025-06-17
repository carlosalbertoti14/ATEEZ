        //FUNÇÃO PARA APARECER A LISTA

        document.querySelectorAll('ul > li > p').forEach(item => {
            item.addEventListener('click', function() {
           const subList = this.nextElementSibling;
           if (subList.style.display === 'block') {
               subList.style.display = 'none'; // Oculta se já está visível
           } else {
               subList.style.display = 'block'; // Exibe ao clicar
           }
           });
           });