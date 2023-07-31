const slides = [
    {
        "image":"uiux.jpg",
        "tagLine":"Formation de <span>Dev Web</span"
    },
    {
        "image":"seo.jpg",
        "tagLine":"Formation de seo"
    },
];

const numberOfImages = slides.length;
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

