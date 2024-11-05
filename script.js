let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Ocultar todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    // Reiniciar o índice quando ultrapassar o número de slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Exibir o slide atual
    slides[slideIndex - 1].style.display = "block";
    
    // Mudar slide a cada 3 segundos
    setTimeout(showSlides, 3000);
}

// Iniciar a apresentação de slides
showSlides();
