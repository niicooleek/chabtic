

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activo");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    var pregunta = document.getElementsByClassName("accordion");
    var icono = document.getElementsByClassName("iconoPreguntas");
    for(var i = 0; i<pregunta.length; i++){
      
      
   
    if(pregunta[i].classList.contains("activo")== true){
      icono[i].classList.add("fa-angle-down");
      icono[i].classList.remove("fa-angle-up");
    }else{
      icono[i].classList.remove("fa-angle-down");
      icono[i].classList.add("fa-angle-up");
    }
  
}
  });
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

var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 0
});

/*$("#inicio > div:gt(0)").hide();
setInterval(function() { 
  $('#inicio > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);*/

/*___________________*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imagenChabtic");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/*____________*/

var slideIndexC = 0;
showSlidesC();

function showSlidesC() {
  var i;
  var slides = document.getElementsByClassName("slideInicio");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexC++;
  if (slideIndexC > slides.length) {slideIndexC = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activ", "");
  }
  slides[slideIndexC-1].style.display = "block";  
  dots[slideIndexC-1].className += " activ";
  setTimeout(showSlidesC, 2000); // Change image every 2 seconds
}

/*_______*/

// When the user scrolls the page, execute myFunction
window.onscroll = function(){myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
