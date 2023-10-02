window.onload=inicio;

//codigo javascripts del ejercicio numero 01

/* function inicio(){

    boton[0].onclick=accion1;
    boton[1].onclick=accion2;
    boton[2].onclick=accion3;
    boton[3].onclick=accion4;
}

function accion1(){
    
    document.querySelector(".caja").innerHTML="Hola Mundo";

}
function accion2(){
    
    document.querySelector(".caja").innerHTML="<img src='../img/imgHtml.png'>";

}
function accion3(){
    
    document.querySelector(".caja").innerHTML="<button>Boton Imp</button>";

}
function accion4(){
    
    document.querySelector(".caja").innerHTML="";
} */
    
function inicio(){

    var imagen, cajaImagen, boton;

    document.querySelector("body").insertAdjacentHTML("beforeend",`
    <button  class="boton">Boton 1</button>
    <button  class="boton">Boton 2</button>
    <button  class="boton">Boton 3</button>
    <div id="imagen"><img src="img/ImgHtml.png" alt="imagen de html"></div>`);

    imagen=document.querySelector("img");
    cajaImagen=document.querySelector("#imagen");
    boton=document.querySelectorAll(".boton");

    boton[0].onclick=accion1;
    boton[1].onclick=accion2;
    boton[2].onclick=accion3;
    resaltar()
}

function accion1(){

    imagen.style.backgroundColor="#0040ff";
    cajaImagen.style.borderRadius="50%";
    cajaImagen.style.transform="rotate(10deg)";
    boton[0].style.visibility="hidden";

}

function accion2(){

        if(cajaImagen.style.display=="none"){
                //ocultar imagen
           cajaImagen.style.display="block";
           resaltar()

        }else{
                //mostrar imagen
            cajaImagen.style.display="none";
            boton[1].style.background=null;
            boton[1].style.borderColor=null;

            }
        
}
function accion3(){

    imagen.style=null; 
    cajaImagen.style=null;
    boton[0].style=null;
    boton[2].style=null;
    resaltar()
}

function resaltar(){

    boton[1].style.background="#e44d26";
    boton[1].style.borderColor="#e44d26";

}
    


     
   


    





  
