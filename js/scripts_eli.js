/*var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} */

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

    if(window.pageYOffset >= 320){
      alert("hola");
      document.getElementById("menuprincipal").style.padding ="0%";
    }else{
      document.getElementById("menuprincipal").style.padding = "4% 0%";
    }
  }


function abrirMenu(){
  var menuIcono = document.getElementById("hamMenu");
  var menu = document.getElementById("menuHamburguesa");
  menuIcono.classList.toggle("active");
 if(menuIcono.classList.contains("active")== true){
   menu.classList.add("movilMenu");
   menu.classList.remove("inactive");
 }else{
  menu.classList.remove("movilMenu");
  menu.classList.add("inactive");
 }
}
