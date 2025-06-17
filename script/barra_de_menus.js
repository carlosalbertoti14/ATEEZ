//INICIO DA CONFIGURAÇÃO DA BARRA DE MENUS

// Função para segurar a barra de menus no topo.
window.addEventListener("scroll", function () {
    const menu = document.getElementById("fixo");
    const container = document.querySelector(".header-visual-container");

    // --- MENSAGENS DE DEPURACÃO ---
    console.log("--- Evento de Scroll ---");
    console.log("Elemento 'menu' (#fixo):", menu);
    console.log("Elemento 'container' (.header-visual-container):", container);

    if (menu && container) { // Garante que ambos os elementos foram encontrados
        const containerOffsetTop = container.offsetTop;
        const containerOffsetHeight = container.offsetHeight;
        const containerBottom = containerOffsetTop + containerOffsetHeight;
        const currentScrollY = window.scrollY;

        console.log("container.offsetTop:", containerOffsetTop);
        console.log("container.offsetHeight:", containerOffsetHeight);
        console.log("containerBottom (offsetTop + offsetHeight):", containerBottom);
        console.log("window.scrollY (quanto você rolou):", currentScrollY);

        if (currentScrollY >= containerBottom) {
            console.log("Condição ATINGIDA: window.scrollY (", currentScrollY, ") >= containerBottom (", containerBottom, ")");
            menu.style.position = "fixed";
            menu.style.top = "0"; // Fixa no topo
            console.log("Menu: position set to 'fixed'.");
        } else {
            console.log("Condição NÃO ATINGIDA: window.scrollY (", currentScrollY, ") < containerBottom (", containerBottom, ")");
            menu.style.position = "relative";
            menu.style.top = "auto"; // Volta à posição inicial
            console.log("Menu: position set to 'relative'.");
        }
    } else {
        console.log("ERRO: Elemento '#fixo' ou '.header-visual-container' não foi encontrado!");
    }
});

// Função para alternar o menu dropdown
function toggleMenu() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("active");
}

// Fecha o menu se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}

// Evento para o link "PRODUTOS" (seu código original)
document.addEventListener('DOMContentLoaded', function() {
    var produtosLink = document.getElementById('produtos');
    if (produtosLink) { 
        produtosLink.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o link de navegar
            alert('OS PRODUTOS AINDA NÃO ESTÃO DISPONÍVEIS!');
        });
    }
});