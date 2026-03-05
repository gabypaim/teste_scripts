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