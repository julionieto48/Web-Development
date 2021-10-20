let button1 = document.getElementById("boton1")
let texto = document.getElementById("bienvenida")

function obtenerTexto(){

    texto.innerText = "Hola de nuevo!!!"
}

button1.addEventListener("click",obtenerTexto)