document.addEventListener('DOMContentLoaded', () => { 
    const buttons = document.querySelectorAll('#botoes button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Pega os dados do botão
            const productName = this.getAttribute('data-product');
            const timeInMinutes = this.getAttribute('data-time');

            // 1. Salva as informações no Local Storage (Armazenamento local do navegador)
            localStorage.setItem('selectedProduct', productName);
            localStorage.setItem('timeInMinutes', timeInMinutes);

            // 2. Redireciona para a página do timer
            window.location.href = 'timer.html';
        });
    });
});