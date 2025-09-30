document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector('.carrossel-track');
  const slides = Array.from(document.querySelectorAll('.carrossel-slide'));
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  // Atualiza o carrossel com as imagens e os botões
  function updateCarrossel() {
    track.style.transform = `translate(-${currentIndex * 100}vw)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // Quando clicar em cada botão ele atualiza pro anterior ou pro próximo
  prevBtn.addEventListener('click', () => {
    if (currentIndex == 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex -= 1;
    }
    
    updateCarrossel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrossel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarrossel();
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarrossel();
  }, 4000);
});