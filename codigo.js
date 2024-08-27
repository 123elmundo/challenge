function encriptarTexto(texto) {

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}


function manejarEncriptar() {

    const texto = document.getElementById("texto_L").value;
    const textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
}

function manejarDesencriptar() {

    const texto = document.getElementById("texto_L").value;
    const textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
}


function mostrarResultado(resultado) {

    const aside = document.querySelector("aside._R");
    const titulo = aside.querySelector(".titulo_R");
    const parrafo = aside.querySelector(".parrafo_R");
    const img = aside.querySelector(".img_R");

    
    titulo.textContent = "Resultado";
    parrafo.textContent = resultado;
    img.style.display = "none"; 
}


document.querySelector(".Encriptar").addEventListener("click", manejarEncriptar);

document.querySelector(".Desencriptar").addEventListener("click", manejarDesencriptar);

function mostrarResultado(resultado) {
    const aside = document.querySelector("aside._R");
    const titulo = aside.querySelector(".titulo_R");
    const parrafo = aside.querySelector(".parrafo_R");
    const img = aside.querySelector(".img_R");
    const botonCopiar = aside.querySelector("#copiar");

    titulo.textContent = "Resultado";
    parrafo.textContent = resultado;
    img.style.display = "none"; 
    botonCopiar.style.display = "block"; 
}

document.querySelector(".Encriptar").addEventListener("click", manejarEncriptar);
document.querySelector(".Desencriptar").addEventListener("click", manejarDesencriptar);

document.querySelector("#copiar").addEventListener("click", function() {
    const textoEncriptado = document.querySelector(".parrafo_R").textContent;
    navigator.clipboard.writeText(textoEncriptado).then(function() {
        alert("Texto copiado al portapapeles");
    }).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
});


