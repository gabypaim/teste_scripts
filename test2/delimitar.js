const janelas = document.querySelectorAll(".janelas");
const topo = document.querySelector(".topo")
const screen = document.querySelector(".screen")

let isarrastando = false;
let offsetX = 0; //Esses guardam a distância entre: o clique do mouse e o canto da janela (deslocamento x; deslocamento y)
let offsetY = 0;

//mousedown Dispara quando você aperta o botão do mouse.
topo.addEventListener("mousedown", (e) => {
    isarrastando = true;
    offsetX = e.clientX - janelas.offsetLeft 
    offsetY = e.clientY - janelas.offsetTop //todo htmlelement possuio offsettop,ofsetleft, ofsetwidth...
    // clientx, client y posição do mouse no navegador
    
    // cliquei no clientX(tela) 150 e minha janela começa no 100 = 150 - 100 = 50 (meu mouse esta a 50px da janela)
    
});

document.addEventListener("mousemove", (e) => {
    if (!isarrastando) return;

    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    // será pocisionada onde esta meu mouse - 50px de distancia da janela

    const screenRect = screen.getBoundingClientRect();
    const janelaRect = janelas.getBoundingClientRect();
    //retorna: largura, altura, posição etc
    
    if (newLeft < 0) newLeft = 0;
    if(newLeft + janelaRect.width > screenRect.width)
        newLeft = screenRect.width - janelaRect.width; 

    if (newTop < 0) newTop = 0;
    if(newTop + janelaRect.height > screenRect.height)
        newTop = screenRect.height - janelaRect.height;  


    janelas.style.left = newLeft + "px";
    janelas.style.top = newTop + "px";

    
});

document.addEventListener("mouseup", () => {
    isarrastando = false;
})