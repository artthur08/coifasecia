let slides = document.querySelectorAll(".hero .slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
}

// troca a cada 5 segundos
setInterval(nextSlide, 5000);
