const screen = document.querySelector(".screen");
const janelas = document.querySelectorAll(".janelas");

janelas.forEach((janela) => {

    const topo = janela.querySelector(".topo");

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    topo.addEventListener("mousedown", (e) => {
        isDragging = true;

        offsetX = e.clientX - janela.offsetLeft;
        offsetY = e.clientY - janela.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        const screenWidth = screen.clientWidth;
        const screenHeight = screen.clientHeight;

        const janelaWidth = janela.offsetWidth;
        const janelaHeight = janela.offsetHeight;

        if (newLeft < 0) newLeft = 0;
        if (newLeft + janelaWidth > screenWidth)
            newLeft = screenWidth - janelaWidth;

        if (newTop < 0) newTop = 0;
        if (newTop + janelaHeight > screenHeight)
            newTop = screenHeight - janelaHeight;

        janela.style.left = newLeft + "px";
        janela.style.top = newTop + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

});


const bar = document.getElementById("winxp");

//abrir icones
const icons = document.querySelectorAll('.icons .icon');

icons.forEach(icon => {
    icon.addEventListener('click', function(){
        const winid = this.getAttribute('data-id');
        const barid = this.getAttribute('data-barid');
        const nameid = this.getAttribute('data-name')

       abrir(winid,barid,nameid)

    });
});
//descobri que eu não precisava fazer um data atributte para id mas vou deixar assim

//criar os icones na barra
function abrir(winid, barid, nameid) {
    const winele = document.getElementById(winid);
    winele.style.display = "block";

    winele.dataset.barid = barid;

    const existebarra = document.getElementById(barid)
    if (!existebarra) {
        const barraele = document.createElement("div");
        barraele.id = barid;
        barraele.classList.add('bar');
        barraele.textContent = (nameid);
        barraele.style.display = "block"
        bar.appendChild(barraele);
    }
};

//preciso fazer uma função que deixe a ultima janela que cliquei em prioridade em cima das outras e deixe a barra azul
let zindex = 1

janelas.forEach((janela) => {
    janela.addEventListener('click', function () {
        zindex = zindex + 1;
        janela.style.zIndex = zindex;

        // como faço pra deixar só a barra azul da janela com maior index >:

    });
});


function fechar(botao) {
    const janela = botao.closest(".janelas");
    const barid = janela.dataset.barid;
    const barra = document.getElementById(barid);

    janela.style.display = "none";

    if (barra) {
        barra.remove();
    }
}

function minimizar(botao) {
    const janela = botao.closest(".janelas");
    janela.style.display = "none";   
}