const nav= document.getElementById('nav');
nav.addEventListener('click',function(){
    nav.classList.toggle('active');
})

let animado=document.querySelectorAll('.entrada__efecto');
function mostrarScroll(){
    let scrollTop=document.documentElement.scrollTop;//mide alto de pantalla
    for(var i=0;i<animado.length;i++){
        let alturaAnimado=animado[i].offsetTop;//mide altura de pantalla hasta los elementos
        if(alturaAnimado - 300 < scrollTop){
            animado[i].style.opacity=1;
            animado[i].classList.add('animacion');
        }
    }
}
window.addEventListener('scroll',mostrarScroll);