// Mapeamento dos produtos para os nomes dos arquivos de imagem
const imageMap = {
    "Pão de ló": "pao_de_lo.jpg", 
    "Bolo": "bolo.jpg",           
    "Cupcakes": "cupcakes.jpg",   
    "Cookies": "cookies.jpg"      
};

// Seleciona os elementos da página do timer
const productTitle = document.getElementById('product-title');
const productImage = document.getElementById('product-image');
const timerDisplay = document.getElementById('timer-display');

let countdownInterval; // O principal motivo para a variável countdownInterval estar declarada fora de qualquer função é o escopo. O JavaScript precisa que a variável exista em um local que seja acessível por duas funções diferentes: A função startTimer(), que usa o setInterval() e grava o ID do cronômetro nela. A mesma função startTimer(), que usa o clearInterval() para parar o cronômetro anterior.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Recupera as informações do Local Storage
    const productName = localStorage.getItem('selectedProduct');
    const timeInMinutes = localStorage.getItem('timeInMinutes');

    if (!productName || !timeInMinutes) {
        // Caso não encontre as informações, volta para a página inicial
        productTitle.textContent = "Erro: Produto não selecionado.";
        timerDisplay.textContent = "00:00";
        return; 
    }

    // 2. Atualiza o título e a imagem
    productTitle.textContent = `${productName} | Contagem Regressiva`;

    const imageFile = imageMap[productName];
    if (imageFile) {
        productImage.src = imageFile;
        productImage.alt = productName;
    } else {
        productImage.style.display = 'none';
    }

    // 3. Inicia o Timer
    startTimer(parseInt(timeInMinutes));
});

// Função que inicia o cronômetro
function startTimer(minutes) {
    let totalSeconds = minutes * 60;

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    timerDisplay.textContent = formatTime(totalSeconds);

    countdownInterval = setInterval(() => {
        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "PRONTO!";
            productTitle.textContent = `${productTitle.textContent.split(' | ')[0]} | PRONTO!`;
            alert("O seu " + productTitle.textContent.split(' | ')[0].toLowerCase() + " está pronto!");
            return;
        }

        timerDisplay.textContent = formatTime(totalSeconds);
    }, 1000); 
}