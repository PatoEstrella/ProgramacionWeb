function iniciar(){

    var
    imagenes=document.querySelectorAll('#cajaimagenes > img');
    for (var i=0; i<imagenes.length; i++) {
    
    imagenes[i].addEventListener('dragstart',
    
    arrastrado, false);
    }
    destino=document.getElementById('cajasoltar');
    destino.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    destino.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    destino.addEventListener('drop', soltado, false);
    }
    
    function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text',
    elemento.getAttribute('id'));
    }
    function soltado(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4") {
    var
    
    src=document.getElementById(id).src;
    destino.innerHTML='<img src="'+src+'">';}
    else {
    
    destino.innerHTML='la imagen no es admitida';
        }
    }
    window.addEventListener('load', iniciar,
    false);