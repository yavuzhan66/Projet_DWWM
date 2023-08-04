

const btUp = document.querySelector('#bt-up');
btUp.style.display = 'none';
btUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,        
        behavior: 'smooth'
      });
})
window.addEventListener('scroll', () => {    
    if(window.scrollY > 150) {
        btUp.style.display = 'flex';
    } else {
        btUp.style.display = 'none';
    }
})








const slides = [
    {
        "img":"uiux.jpg",
        "tagLine":"Formation de <span>Dev Web</span>"
    },
    {
        "img":"seo.jpg",
        "tagLine":"Formation de seo"
    }
];

const numberOfImg = slides.length;
const arrowLeft = document.querySlelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");
const bannerElement = document.querySelector("#banner");

arrowLeft.addEventListener('click', () => {
    imageNumber--;
    if(imageNumber < 0) {
        imageNumber = numberOfImages - 1;
    }
    displayBanner(imageNumber);
});

arrowRight.addEventListener('click', () => {	
	imageNumber++;
	if(imageNumber >= numberOfImages) {
		imageNumber = 0;		
	} 
	displayBanner(imageNumber);	
});
