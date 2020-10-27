
    function iniciar()
    {varimagenes=document.querySelectorAll('#cajaimagenes> img');
    for(var i=0; i<imagenes.length; i++) 
    {imagenes[i].addEventListener('dragstart', arrastrado, false);}
    origen1=document.getElementById('imagen');
    origen1.addEventListener('dragstart', arrastrado, false);
    origen1.addEventListener('dragend', finalizado,
    false);
    destino=document.getElementById('cajasoltar');
    //nueva parte del archivo//
    destino.addEventListener('dragenter', entrando, false);
    destino.addEventListener('dragleave', saliendo,false);
    destino.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    destino.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    destino.addEventListener('drop', soltado, false);
    }
    //2da parte del archivo nuevo//
    function arrastrado(e)
    {elemento=e.target;e.dataTransfer.setData('Text', elemento.getAttribute('id'));}
    function soltado(e)
    {e.preventDefault();varid=e.dataTransfer.getData('Text');
    if(id!="imagen4")
     {
        var src=document.getElementById(id).src;
        destino.innerHTML='<imgsrc="{src}">';
    }
    else
        {
         destino.innerHTML='la imagen no es admitida';
         }
    }
    window.addEventListener('load', iniciar, false);


      