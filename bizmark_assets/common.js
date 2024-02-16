const carouselInner = document.querySelector('.carousel-inner');
const slideWidth = carouselInner.children[0].offsetWidth;
const slideCount = carouselInner.children.length;

let currentSlide = 0;
let deltaX = 0; // Declare deltaX outside the touchstart handler

// Start animation after page load
window.addEventListener('load', () => {
  carouselInner.classList.remove('paused'); // Start animation initially

  // Infinite loop with setInterval
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }, 2000); // Adjust animation duration as needed

  // Optional touch event handling for mobile scroll flow
  carouselInner.addEventListener('touchstart', (event) => {
    const initialX = event.touches[0].clientX;

    carouselInner.addEventListener('touchmove', handleTouchMove);

    carouselInner.addEventListener('touchend', () => {
      carouselInner.removeEventListener('touchmove', handleTouchMove);
      const threshold = slideWidth / 3; // Adjust threshold for swipe detection
      if (Math.abs(deltaX) > threshold) {
        currentSlide = deltaX > 0 ? currentSlide - 1 : currentSlide + 1;
        if (currentSlide < 0) currentSlide = slideCount - 1;
        if (currentSlide >= slideCount) currentSlide = 0;
        carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    });

    function handleTouchMove(event) {
      deltaX = event.touches[0].clientX - initialX;
      carouselInner.style.transform = `translateX(-${(currentSlide * slideWidth) + deltaX}px)`;
    }
  });
});
