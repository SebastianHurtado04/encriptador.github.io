/*  Desarrollando la funcion encriptar  */

function encriptar(){
    var texto = document.getElementById("texto").value;
    var encriptado=texto.replace(/e/igm,"enter");
    var encriptado=encriptado.replace(/i/igm,"imes");
    var encriptado=encriptado.replace(/a/igm,"ai");
    var encriptado=encriptado.replace(/o/igm,"ober");
    var encriptado=encriptado.replace(/u/igm,"ufat");
    document.getElementById("textoEncriptado").innerHTML=encriptado;
    document.getElementById("img").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textoEncriptado").style.width="215px";
    document.getElementById("textoEncriptado").style.height = "410px";

}

/*  Agregando evento encriptar al boton  */

var btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.addEventListener("click",encriptar);

/*  Desarrollando la funcion desencriptar  */

function desEncriptar(){
    var texto = document.getElementById("texto").value;
    var encriptado=texto.replace(/enter/igm,"e");
    var encriptado=encriptado.replace(/imes/igm,"i");
    var encriptado=encriptado.replace(/ai/igm,"a");
    var encriptado=encriptado.replace(/ober/igm,"o");
    var encriptado=encriptado.replace(/ufat/igm,"u");
    document.getElementById("textoEncriptado").innerHTML=encriptado;
    document.getElementById("img").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

/*  Agregando evento desencriptar al boton  */

var btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.addEventListener("click",desEncriptar);

/*  Desarrollando la funcion copiar  */

function copiar(){

    var devolverEncriptado = document.getElementById("textoEncriptado");
    devolverEncriptado.select();
    devolverEncriptado.setSelectionRange(0,99999);
    document.execCommand("copy");
}

/*  Agregando evento copiar al boton  */

var btnCopiar = document.getElementById("copiar");
btnCopiar.addEventListener("click",copiar);

/*  Desarrollando la funcion Limpiar  */

function limpiar(){
    document.getElementById("img").style.display = "";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("textoEncriptado").style.width="200px";
    document.getElementById("textoEncriptado").style.height = "100px";

}

/*  Agregando evento limpiar al boton  */

var btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click",limpiar);

