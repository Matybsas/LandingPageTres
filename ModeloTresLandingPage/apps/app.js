//BOTON PARA SCROLL UP QUE SE OCULTA AL LLEGAR ARRIBA Y SE MUESTRA AL BAJAR

btnUp= document.getElementById('scroll__up');


window.onscroll = function(){
    let scrollUp = document.documentElement.scrollTop;
    if(scrollUp > 200){
        btnUp.style.visibility ='visible';
    }
    else{
        document.getElementById('scroll__up').style.visibility ='hidden';
    }

}