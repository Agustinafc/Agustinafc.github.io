let miImagen=document.querySelector('img');
miImagen.onclick=function(){
    let miSRC=miImagen.getAttribute('src');
    if(miSRC==='../Images/flor1.jfif'){
    miImagen.setAttribute('src','../Images/flor2.jfif');
    }

else if(miSRC==='../Images/flor2.jfif') {
    miImagen.setAttribute('src','../Images/flor3.jfif');
}else if(miSRC==='../Images/flor3.jfif') {

    miImagen.setAttribute('src','../Images/flor4.jfif');

}else{
miImagen.setAttribute('src','../Images/flor1.jfif');
}
}

let miBoton=document.querySelector('button');
let miTitulo=document.querySelector('h1');
function estableceNombreUsuario(){
    let miNombre=prompt('Por favor ingresa tu nombre.');
    
    if (!miNombre) {
        estableceNombreUsuario();
        
    }else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML='Bienvenid@ '+ miNombre;
    }
   
    }
    miBoton.onclick=function(){
        estableceNombreUsuario();}
