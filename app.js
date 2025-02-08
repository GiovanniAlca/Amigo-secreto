let listaAmigos = [];
let amigosSorteados = []; // Para almacenar los nombres que ya fueron sorteados

const lista = document.getElementById("listaAmigos");
const nombre = document.getElementById("amigo");

nombre.addEventListener("input", function (event) {
    console.log(event.target.value);
});

function agregarAmigo() {
    if (nombre.value.length > 0) {
        listaAmigos.push(nombre.value);
        actualizarLista();
        nombre.value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function actualizarLista() {
    lista.innerHTML = "";
    listaAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("data-nombre", amigo); 
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let amigosDisponibles = listaAmigos.filter((amigo) => !amigosSorteados.includes(amigo));

    if (amigosDisponibles.length === 0) {
        alert("¡Todos los amigos ya han sido sorteados!");
        return;
    }

    let resultado = document.getElementById("resultado");
    let tiempoSorteo = 2000; 
    let intervalo = 100;     
    let contador = 0;

    let intervaloSorteo = setInterval(() => {
        let nombreAleatorio = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];
        resultado.innerHTML = ` Sorteando... ${nombreAleatorio}`;
        contador += intervalo;

        if (contador >= tiempoSorteo) {
            clearInterval(intervaloSorteo);

            let ganador = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];
            resultado.innerHTML = `🎊 ¡El amigo secreto es: <strong>${ganador}</strong>! 🎊`;

            const listaItems = document.querySelectorAll("#listaAmigos li");
            listaItems.forEach((item) => {
                if (item.getAttribute("data-nombre") === ganador) {
                    item.classList.add("sorteado"); 
                }
            });


            amigosSorteados.push(ganador);
        }
    }, intervalo);
}
