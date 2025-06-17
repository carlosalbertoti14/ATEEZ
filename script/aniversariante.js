document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('#DIVniver img');
    const mesAtual = new Date().getMonth() + 1;
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const diamesHoje = `${diaAtual}/${mesAtual}`;
    let encontrouAniversariante = false;
    let encontrouAniversarianteDoDia = false;

    const nivernome = [
        { nome: "NAYEON", url: "url('midia/twice_PERFIL_BG_Nayeon.jpg')" },
        { nome: "JEONGYEON", url: "url('midia/twice_PERFIL_BG_Jeongyeon.jpg')" },
        { nome: "MOMO", url: "url('midia/twice_PERFIL_BG_Momo.jpg')" },
        { nome: "SANA", url: "url('midia/twice_PERFIL_BG_Sana.jpg')" },
        { nome: "JIHYO", url: "url('midia/twice_PERFIL_BG_Jihyo.jpg')" },
        { nome: "MINA", url: "url('midia/twice_PERFIL_BG_Mina.jpg')" },
        { nome: "DAHYUN", url: "url('midia/twice_PERFIL_BG_Dahyun.jpg')" },
        { nome: "CHAEYOUNG", url: "url('midia/twice_PERFIL_BG_Chaeyoung.jpg')" },
        { nome: "TZUYU", url: "url('midia/twice_PERFIL_BG_Tzuyu.jpg')" }
    ];

    const secNiver = document.getElementById("SECniver");
    const divNiver = document.getElementById("DIVniver");
    const mensagemAniversarioDiv = document.getElementById("felizniver");
    const fogosVideo = document.getElementById("fogosVideo");

    imagens.forEach(img => {
        const alt = img.alt.trim(); // Ex: "NAYEON 22/9"
        const partes = alt.split(" ");
        if (partes.length === 2) {
            const nomeAniversariante = partes[0];
            const dataAniversario = partes[1];

            if (dataAniversario === diamesHoje) {
                const aniversarianteDoDia = nivernome.find(item => item.nome.toLowerCase() === nomeAniversariante.toLowerCase());
                if (aniversarianteDoDia && secNiver && divNiver) {
                    secNiver.style.backgroundImage = aniversarianteDoDia.url;
                    if (mensagemAniversarioDiv) {
                        mensagemAniversarioDiv.innerHTML = `<h4 id="felizniver"> Feliz aniversário, ${nomeAniversariante}! Hoje é o seu dia mais FELIZ!!!</h4>`;
                        mensagemAniversarioDiv.style.display = "block";
                    }
                    if (fogosVideo) {
                        fogosVideo.style.display = "block"; // Mostra o vídeo de fogos
                    }
                    img.style.display = "block";
                    encontrouAniversarianteDoDia = true;
                }
            }
        }
    });

    // Exibe os aniversariantes do mês se não houver um aniversariante do dia
    imagens.forEach(img => {
        const alt = img.alt.trim();
        const partes = alt.split(" ");
        if (partes.length === 2) {
            const mesAniversario = parseInt(partes[1].split("/")[1]);
            if (mesAniversario === mesAtual && !encontrouAniversarianteDoDia) {
                img.style.display = "inline-block";
                encontrouAniversariante = true;
            } else if (!encontrouAniversarianteDoDia) {
                img.style.display = "none";
            }
        } else {
            if (!encontrouAniversarianteDoDia) {
                img.style.display = "none";
            }
        }
    });

    if (encontrouAniversariante || encontrouAniversarianteDoDia) {
        secNiver.style.display = "block";
    }
});