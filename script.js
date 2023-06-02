function copiar_texto(){
    var content = document.getElementById("mensaje_output").innerText;
    navigator.clipboard.writeText(content);
}

function pegar_texto(texto){
    var myOutput = document.getElementById("mensaje_output");
    myOutput.innerHTML = texto;
}

function encriptar() {
    var texto = document.getElementById("mensaje_input").value;
    var texto_encriptado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            texto_encriptado = texto_encriptado.concat("ai");  
        } else if(texto[i] == "e"){
            texto_encriptado = texto_encriptado.concat("enter");
        } else if(texto[i] == "i"){
            texto_encriptado = texto_encriptado.concat("imes");
        } else if(texto[i] == "o"){
            texto_encriptado = texto_encriptado.concat("ober");
        } else if(texto[i] == "u"){
            texto_encriptado = texto_encriptado.concat("ufat");
        } else {
            texto_encriptado = texto_encriptado.concat(texto[i]);
        }
    }
    pegar_texto(texto_encriptado);
}

function desencriptar() {
    var texto = document.getElementById("mensaje_input").value;
    for (let i = 0; i < texto.length; i++) {
        texto = texto.replace("ai", "a");
        texto = texto.replace("enter", "e");
        texto = texto.replace("imes", "i");
        texto = texto.replace("ober", "o");
        texto = texto.replace("ufat", "u");
    }
    pegar_texto(texto);
}



