var imputMensaje = document.querySelector(".imput-mensaje");
var outputMensaje = document.querySelector(".mensaje");
imputMensaje.value = "";
document.getElementById("aviso-copiar").classList.add("desaparecer-aviso-copiar");
aparecer()

function botonEncriptar(){
    if(imputMensaje.value!= ""){
        const mensajeEncriptado = encriptar(imputMensaje.value);
        outputMensaje.value = mensajeEncriptado;
        imputMensaje.value = "";
        desaparecer();
    }
    else {
        alert("Debe ingresar el texto a encriptar")
    }
}
function botonDesencriptar(){
    if(imputMensaje.value!= ""){
        const mensajeDesencriptado = desencriptar(imputMensaje.value);
        outputMensaje.value = mensajeDesencriptado;
        imputMensaje.value = "";
        desaparecer();
    }
    else {
        alert("Debe ingresar el texto a desencriptar")
    }
    
}
function botonCopiar(){
    var content = document.getElementById("mensaje");
    content.select();
    document.execCommand('copy');
    outputMensaje.value = "";
    document.getElementById("aviso-copiar").classList.remove("desaparecer-aviso-copiar");
    setTimeout(function(){
        document.getElementById("aviso-copiar").classList.add("desaparecer-aviso-copiar");
    },1300)
    aparecer()
}
function encriptar(mensajeEncriptar) {
    let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensajeParaEncriptar = mensajeEncriptar.toLowerCase();
    for(let i = 0; i < codigo.length; i++) {
        if (mensajeParaEncriptar.includes(codigo[i][0])) {
            mensajeParaEncriptar = mensajeParaEncriptar.replaceAll(codigo[i][0],codigo[i][1])
        }
    }     
    return mensajeParaEncriptar;
}

function desencriptar(mensajeDesencriptar) {
    let codigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    mensajeParaDesencriptar = mensajeDesencriptar.toLowerCase();
    for(let i = 0; i < codigo.length; i++) {
        if (mensajeParaDesencriptar.includes(codigo[i][0])) {
            mensajeParaDesencriptar = mensajeParaDesencriptar.replaceAll(codigo[i][0],codigo[i][1])
        }
    }     
    return mensajeParaDesencriptar;
}
function desaparecer() {
    document.getElementById("btcopiar").classList.remove("desaparecer");
    document.getElementById("mensaje").classList.remove("desaparecer");
    document.getElementById("img-persona").classList.add("desaparecer");
    document.getElementById("no-texto-1").classList.add("desaparecer");
    document.getElementById("no-texto-2").classList.add("desaparecer");
}
function aparecer() {
    document.getElementById("btcopiar").classList.add("desaparecer");
    document.getElementById("mensaje").classList.add("desaparecer");
    document.getElementById("img-persona").classList.remove("desaparecer");
    document.getElementById("no-texto-1").classList.remove("desaparecer");
    document.getElementById("no-texto-2").classList.remove("desaparecer");
}