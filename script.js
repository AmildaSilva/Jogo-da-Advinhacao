

const numeroSecreto = Math.floor(Math.random() * 100) + 1; 

const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

const inputPalpite = document.getElementById('palpite');
const btnChutar = document.getElementById('btnChutar');

const tentativas = document.getElementById('tentativas');
tentativas.textContent = 'Tentativas restantes: ' + tentativasRestantes;



btnChutar.addEventListener('click', function () {
    const palpite = parseInt(inputPalpite.value, 10);

    if (!Number.isInteger(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Por favor, insira um número válido!'; 
        return;
    }
    tentativasRestantes--;

    if (palpite < numeroSecreto) {
        mensagem.textContent = 'O número é maior';

    } else if (palpite > numeroSecreto) { mensagem.textContent = 'O número é menor'; }
    else { mensagem.textContent = 'Parabéns, você acertou!'; }
    tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes <= 0) {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        inputPalpite.disabled = true;
        btnChutar.disabled = true;     
    } 
    
});


