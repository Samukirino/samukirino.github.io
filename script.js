// script.js

// Função para alternar a classe 'active' no menu responsivo
const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
};

// Event listener para o botão de menu responsivo

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
// script.js

function handleMouseOver(element) {
    element.querySelector('.image-title').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
}

function handleMouseOut(element) {
    element.querySelector('.image-title').style.backgroundColor = 'transparent';
}

function toggleMensagem() {
    const mensagemBox = document.getElementById('mensagem');
    mensagemBox.style.display = mensagemBox.style.display === 'none' ? 'block' : 'none';
}