let listaAmigos = [];

const lista = document.getElementById("listaAmigos")

const nombre = document.getElementById("amigo");
nombre.addEventListener("input", function(event) {
    console.log(event.target.value)
})

function agregarAmigo() {
    if (nombre.value.length > 0) {
        listaAmigos.push(nombre.value);
        actualizarLista();
        nombre.value ="";
    } else {
        alert("Por favor, inserte un nombre.")
    }
}

function actualizarLista(){
    lista.innerHTML = "";
    listaAmigos.forEach ( amigo =>{
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let resultado = document.getElementById("resultado");
        let tiempoSorteo = 1000; 
        let intervalo = 100; 

        let contador = 0;
        let intervaloSorteo = setInterval(() => {
            let nombreAleatorio = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
            resultado.innerHTML = `Sorteando... ${nombreAleatorio}`;
            contador += intervalo;

            if (contador >= tiempoSorteo) {
                clearInterval(intervaloSorteo); // Detenemos la animación
                let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
                resultado.innerHTML = ` ¡El amigo secreto es: <strong>${ganador}</strong>! `;
            }
        }, intervalo);
    } else {
        alert("No hay ningún participante aún");
    }
}
