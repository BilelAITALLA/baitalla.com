const carouselImages = document.querySelector('.carousel__images');
const carouselButtons = document.querySelectorAll('.carousel__button');
rightbutton = document.getElementById('next')
leftbutton = document.getElementById('previous')
const numberOfImages = document.querySelectorAll('.carousel__images video').length - 1;
let imageIndex = 0;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 228;
        rightbutton.style.display = "block"
      } else {
        imageIndex--;
        translateX += 228;
        leftbutton.style.display = "none"
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 228;
        leftbutton.style.display = "block"
        if (imageIndex == numberOfImages) {
          rightbutton.style.display = "none"
        }
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});