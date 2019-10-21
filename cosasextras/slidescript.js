var control = 0;

function desplazarIzquierda(){
    if (control > -2){
        control--;
    }
    buenaImagen();
   
}

function desplazarDerecha(){
    if (control < 0){
        control++;
    }
    buenaImagen();
}

function buenaImagen(){
    if(control == 0){
        clickBoton1(); 
      } 
      
      if(control==-1){
        clickBoton2(); 
      }
      
      if(control==-2){
       clickBoton3();
      }

}

function clickBoton1(){
    wrapper.style.marginLeft="0%";
    control = 0;
     boton1.classList.add("active");
     boton2.classList.remove("active");
     boton3.classList.remove("active");
     flechaIzquierda.classList.add("inactive");
    flechaDerecha.classList.remove("inactive");
  }
  
  function clickBoton2(){
    wrapper.style.marginLeft= "100px";
  control = -1;
  boton1.classList.remove("active");
  boton2.classList.add("active");
  boton3.classList.remove("active");
  flechaIzquierda.classList.remove("inactive");
    flechaDerecha.classList.remove("inactive");
  }

  function clickBoton3(){
    wrapper.style.marginLeft="200px";
    control = -2;
  boton1.classList.remove("active");
  boton2.classList.remove("active");
  boton3.classList.add("active");
  flechaIzquierda.classList.remove("inactive");
  flechaDerecha.classList.add("inactive");
  
  }