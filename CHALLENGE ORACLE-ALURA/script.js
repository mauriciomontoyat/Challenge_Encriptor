var boton_Encriptar=document.querySelector(".btn_encriptar");
var boton_Desencriptar=document.querySelector(".btn_desencriptar");
var Muneco=document.querySelector(".contenedor_muneco");
var Contenedor=document.querySelector(".contenedor_parrafo");
var Resultado=document.querySelector(".texto_resultado");

boton_Encriptar.onclick = encriptar;
boton_Desencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    Resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    Resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){    
    var cajatexto = document.querySelector(".caja_texto");
    return cajatexto.value
}

function ocultarAdelante(){    
    Muneco.classList.add("ocultar");
    Contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i=i+1;
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i=i+4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i=i+3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i=i+3;
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i=i+3;
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal
}

const btnCopiar = document.querySelector(".btn_copiar");
    btnCopiar.addEventListener("click", copiar =() =>{
        var contenido = document.querySelector(".texto_resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })