const navbar = document.querySelector("navbar");

window.addEventListener("scroll" , () => {
   // console.log("scroll test !!");
   console.log(window.scrollY);
if (window.scrollY > 120) {
    navbar.style.top = 0;
    navbar.style.position = 'fixed';
    navbar.style.width = "100px";

} 


    
});

