function abrir(elemento) {
    const idJanela = elemento.dataset.id;
    const idBarra = elemento.dataset.barid;
    const nomeJanela = elemento.dataset.name;

    const janela = document.getElementById(idJanela);
    janela.style.display = "block"; // abre a janela
    janela.dataset.barid = idBarra;

    // cria barra na taskbar se ainda não existir
    if (!document.getElementById(idBarra)) {
        const barra = document.createElement("div");
        barra.id = idBarra;
        barra.classList.add("bar"); // adiciona CSS
        barra.textContent = nomeJanela;
        barra.style.display = "block"; 

        let zindex = 1
        
        janela.addEventListener('click', function () {
            zindex = zindex + 1;
            janela.style.zIndex = zindex;
            // como faço pra deixar azul só a barra com maior index >:
        });
        
        
        document.getElementById("winxp").appendChild(barra);
        let aberta = true;
        barra.style.background = 'blue';

        barra.addEventListener ("click", function() {
            if (aberta === true) {
                janela.style.display = 'none';
                aberta = false;
                barra.style.background = '';
            } else {
                janela.style.display = 'block';
                aberta = true;
                barra.style.background = 'blue';
            };
        });
    };
    
    
}

function minimizar(botao) {
    const janela = botao.closest(".janelas");
    janela.style.display = "none";
    const barra = document.getElementById(janela.dataset.barid);
    barra.style.background = '';
}

function fechar(botao) {
    const janela = botao.closest(".janelas");
    const barra = document.getElementById(janela.dataset.barid);
    janela.style.display = "none";
    if (barra) barra.remove();
}



