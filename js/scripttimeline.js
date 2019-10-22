var wrapper = document.getElementById("wrappertimeline");
var slideWidth = document.getElementById("slider-nav-item").offsetWidth;
var currentSlide = 0;
var slides = document.getElementsByClassName("slider-slide");
var dots = document.getElementsByClassName("slider-nav-item");


function nextSlide(){
    currentSlide++;
    wrapperPosition();
      timelinePosition();
}


function prevSlide(){
    currentSlide--;
    wrapperPosition();
      timelinePosition();
}

function wrapperPosition(){
    wrapper.style.marginLeft = - ((slideWidth + 20 ) * currentSlide ) + "px";
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

    if(currentSlide == dots.length - 1){
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
    timelinePosition();
}

function timelinePosition(){
    var cardswrapper = document.getElementById("wrappercards");
    var slideWidth = document.getElementById("slidercards").offsetWidth;
 cardswrapper.style.marginLeft = - ((slideWidth ) * currentSlide ) + "px";
   
}


updateArrows();
