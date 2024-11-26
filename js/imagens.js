let currentIndex = 0; 
const images = document.querySelectorAll('.banner-img'); 

function changeImage() {
    
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
	
}

images[currentIndex].classList.add('active');
setInterval(changeImage, 3000);

