const carousel = document.querySelector('.carousel');
let position = 0;

function slideNext() {
    position -= 1024; // Largura da imagem
    if (position < -5120) {
        position = 0;
    }
    carousel.style.transform = `translateX(${position}px)`;
}

setInterval(slideNext, 3000); // Altera a imagem a cada 3 segundos