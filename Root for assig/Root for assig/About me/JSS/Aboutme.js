let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let autoPlayInterval;
 
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
 
  slides[n].style.display = "block";
  dots[n].classList.add("active");
  slideIndex = n;
}
 
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
 
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
 
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}
 
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}
 
// New button click events
document.querySelector(".next-button").addEventListener("click", () => {
  stopAutoPlay();
  nextSlide();
  startAutoPlay();
});
 
document.querySelector(".prev-button").addEventListener("click", () => {
  stopAutoPlay();
  prevSlide();
  startAutoPlay();
});
 
// Start slideshow
showSlide(slideIndex);
startAutoPlay();