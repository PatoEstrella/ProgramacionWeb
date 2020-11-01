//verifica por lo menos uno de los campos//

/*function iniciar(){
	nombre1=document.getElementById("nombre");
	nombre2=document.getElementById("apellido");
	nombre1.addEventListener("input", validacion, false);
	nombre2.addEventListener("input", validacion, false);
	validacion();
}
function validacion(){
	if(nombre1.value=='' && nombre2.value==''){
	nombre1.setCustomValidity('inserte al menos un nombre');
	nombre1.style.background='#FFDDDD';
	nombre2.style.background='#FFDDDD';
}
	else{
	nombre1.setCustomValidity('');
	nombre1.style.background='#FFFFFF';
	nombre2.style.background='#FFFFFF';
}
}
window.addEventListener("load", iniciar, false);*/



function iniciar() {
edad=document.getElementById("miedad");
edad.addEventListener("change", cambiarrango, false);
document.informacion.addEventListener("invalid", validacion, true);
document.getElementById("enviar").addEventListener("click", enviar, false);
document.informacion.addEventListener("input", controlar, false);
}

function controlar(e) {
var elemento=e.target;
if(elemento.validity.valid) {
elemento.style.background='#FFFFFF';
} else {
elemento.style.background='#FFDDDD';
}
}

function cambiarrango() {
var salida=document.getElementById("rango");
var calc=edad.value-20;
if (calc<20) {
calc=0;
edad.value=20;
}
salida.innerHTML=calc+' a '+edad.value;
}

function validacion(e) {
var elemento=e.target;
elemento.style.background='#FFDDDD';
}

function enviar() {
var elemento=document.getElementById("usuario");
var valido=document.informacion.checkValidity();
if (valido) {
document.informacion.submit();
} else 
	if(elemento.validity.patternMismatch || elemento.validity.valueMissing){
alert('el nombre de usuario debe tener minimo 3 caracteres y estar conformado solo por letras');
}else 
	if(elemento.validity.tooLong){
		alert('el nombre de usuario es demasiado largo')
}



var elemento2=document.getElementById("miemail");
var valido2=document.informacion.checkValidity();
if (valido2){
document.informacion.submit();
}else
	if(elemento2.validity.typeMismatch){
		alert('La direccion de mail tiene que ser valida')
	}
}


window.addEventListener("load", iniciar, false);


//a partir de aca es objeto windows

function alertacerrado(){
	alert(window.closed)
}


function mframes(){
	window.frames[0].location="C:\Users\Usuario\Desktop\CUVL\ApiForms\FormularioApi.html";
}

function historial(){
	alert(history.length);
}

window.history.back();
alert(window.innerHeight);
alert(window.innerWidth);
alert(window.length);
//window.location.assign("https://www.google.com.ar/?gws_rd=ssl");
//window.location.reload();
alert(navigator.appVersion);
alert(navigator.cookieEnabled);
alert(navigator.platform);
alert(navigator.userAgent);
alert(navigator.javaEnabled());
alert(outerHeight)
alert(screen);
alert(screen.availHeight);
alert(screen.availWidth);
alert(screen.height);
alert(screen.width);
alert(screen.pixelDepth);
alert(screen.colorDepth);
alert(self);
alert(top);
alert(location.protocol);
prompt('todo bien?');
confirm('todo bien');
open("https://www.youtube.com/?gl=AR&hl=es-419");

function scrolld(){
window.scrollBy(100,0);
}
function scrollpx(){
window.scrollTo(500,0);
}

function imprimir(){
window.print();
}

function cerrar(){
	window.close(open);
}