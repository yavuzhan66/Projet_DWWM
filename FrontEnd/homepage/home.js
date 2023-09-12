const navbar = document.querySelector("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY) > 80
    navbar.classList.remove = ("navbar");
}
});








const btUp = document.querySelector('#bt-up');
btUp.style.display = 'none';
btUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        btUp.style.display = 'flex';
    } else {
        btUp.style.display = 'none';
    }
})

