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


var wrapper = document.getElementById("wrapper");
var slideWidth = document.getElementById("slider").offsetWidth;
var currentSlide = 0;
var slides = document.getElementsByClassName("slider-slide");

function nextSlide(){
    currentSlide++;
    wrapperPosition();
}

function prevSlide(){
    currentSlide--;
    wrapperPosition();
}

function wrapperPosition(){
    wrapper.style.marginLeft = - (slideWidth * currentSlide) + "px";
    updateArrows();
    updateNav();
}

function updateArrows(){
    var leftArrow = document.getElementById("leftArrow");
    if(currentSlide === 0){
        leftArrow.style.visibility ="hidden";
    }else{
        leftArrow.style.visibility = "visible";
    }

    if(currentSlide == slides.length - 1){
        rightArrow.style.visibility ="hidden";
    }else{
        rightArrow.style.visibility = "visible";
    }
}

function updateNav(){
    var  navItems = document.getElementsByClassName("slider-nav-item");
Array.from(navItems).forEach(function (item){
    item.classList.remove("active");
});
navItems[currentSlide].classList.add("active");
}

function goToSlide(slide){
    currentSlide = slide;
    wrapperPosition();
}

function automateSlider(){
    setTimeout(function(){
        if(currentSlide === slides.length -1){
           goToSlide(0);
        }else{ 
         nextSlide();
        }
        automateSlider();
    }, 3000);
}

automateSlider();
updateNav();
updateArrows();