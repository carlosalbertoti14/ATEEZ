function calcularIdade(dataNascimentoTexto) {
    const [dia, mes, ano] = dataNascimentoTexto.split('/').map(Number);
    const dataNascimento = new Date(ano, mes - 1, dia); // Mês é base 0 no JavaScript
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    // Ajusta a idade se o aniversário ainda não ocorreu este ano
    if (mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
        idade--;
    }
    return idade;
}

function atualizarIdadeMembro(idMembro) {
    const dataNascimentoElement = document.getElementById(`${idMembro}-dataNascimento`);
    const idadeElement = document.getElementById(`${idMembro}-idade`);

    if (dataNascimentoElement && idadeElement) {
        const dataNascimentoTexto = dataNascimentoElement.textContent;
        const idadeCalculada = calcularIdade(dataNascimentoTexto);
        idadeElement.textContent = idadeCalculada;
    }
}

function calcularEAtualizarIdades() {
    // ATUALIZADO: Lista com os IDs dos membros do ATEEZ
    const membros = [
        'hongjoong', 'mingi', 'san', 'seonghwa', 'wooyoung', 'yeosang', 'yunho', 'jongho'
    ];
    membros.forEach(atualizarIdadeMembro);
}

// Executa a função principal quando a janela é totalmente carregada
window.onload = calcularEAtualizarIdades;