window.onload=inicio;


    function inicio(){



    document.querySelector("body").insertAdjacentHTML("beforeend",`
    <button  class="boton">Boton 1</button>
    <button  class="boton">Boton 2</button>
    <button  class="boton">Boton 3</button>
    <div id="imagen"><img src="img/ImgHtml.png" alt="imagen de html"></div>`);

    document.querySelectorAll(".boton")[1].onclick=accion2;
    document.querySelectorAll(".boton")[0].onclick=accion1;
    document.querySelectorAll(".boton")[2].onclick=accion3;
    document.querySelectorAll(".boton")[1].style.background="#e44d26";
    document.querySelectorAll(".boton")[1].style.borderColor="#e44d26";

} 

function accion1(){

    document.querySelector("img").style.backgroundColor="#1162ac";
    document.querySelector("#imagen").style.borderRadius="50%";
    document.querySelector("#imagen").style.transform="rotate(10deg)";
    document.querySelectorAll(".boton")[0].style.visibility="hidden";

}

function accion2(){

        if(document.querySelector("#imagen").style.display=="none"){
                //ocultar imagen
            document.querySelector("#imagen").style.display="block";
            document.querySelectorAll(".boton")[1].style.background="#e44d26";
            document.querySelectorAll(".boton")[1].style.borderColor="#e44d26";
        

        }else{
                //mostrar imagen
            document.querySelector("#imagen").style.display="none";
            document.querySelectorAll(".boton")[1].style.background=null;
            document.querySelectorAll(".boton")[1].style.borderColor=null;

            }
        
}
function accion3(){

    document.querySelector("img").style=null; 
    document.querySelector("#imagen").style=null;
    document.querySelectorAll(".boton")[0].style=null;
    document.querySelectorAll(".boton")[2].style=null;
    document.querySelectorAll(".boton")[1].style.background="#e44d26";
    document.querySelectorAll(".boton")[1].style.borderColor="#e44d26";

}

  


     
   


    





  
