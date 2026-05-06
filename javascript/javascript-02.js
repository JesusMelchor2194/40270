let botones = document.getElementsByTagName("button");
let resultado = document.getElementById("resultado");

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        boton.addEventListener("click", pintar);
    }
}

function pintar(e) {
    let dato = e.target.innerText;

    if (dato == "=") {
        resultado.value = eval(resultado.value);
    } else {
        resultado.value += dato;
    }
}