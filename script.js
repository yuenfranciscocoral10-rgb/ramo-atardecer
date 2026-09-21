const botonSorpresa = document.getElementById("botonSorpresa");
const carta = document.getElementById("carta");
const cerrarCarta = document.getElementById("cerrarCarta");
const mensajeCarta = document.getElementById("mensajeCarta");
const petalosCaidos = document.getElementById("petalosCaidos");

const mensaje = `
Quería regalarte algo diferente...

No puedo entregarte estas flores en persona,
pero sí podía intentar crear un pequeño rincón
que te recordara lo bonito que puede ser
un detalle hecho con cariño.

Así que hice este pequeño ramo para ti. 🌻💛

Espero que cuando lo veas,
aunque sea por unos segundos,
te saque una sonrisa.
`;


// ================================
// ABRIR LA CARTA
// ================================

botonSorpresa.addEventListener("click", () => {

    carta.classList.add("abierta");

    crearPetalos();

    escribirMensaje();
});


// ================================
// CERRAR LA CARTA
// ================================

cerrarCarta.addEventListener("click", () => {

    carta.classList.remove("abierta");

    mensajeCarta.textContent = "";
});


// También permite cerrar haciendo clic
// fuera de la carta

carta.addEventListener("click", (evento) => {

    if (evento.target === carta) {

        carta.classList.remove("abierta");

        mensajeCarta.textContent = "";
    }
});


// ================================
// ESCRIBIR EL MENSAJE
// ================================

function escribirMensaje() {

    mensajeCarta.textContent = "";

    let indice = 0;

    const velocidad = 35;

    function escribir() {

        if (indice < mensaje.length) {

            mensajeCarta.textContent += mensaje.charAt(indice);

            indice++;

            setTimeout(escribir, velocidad);
        }
    }

    escribir();
}


// ================================
// CREAR PÉTALOS
// ================================

function crearPetalos() {

    for (let i = 0; i < 35; i++) {

        const petalo = document.createElement("div");

        petalo.classList.add("petalo-caido");

        petalo.style.left =
            Math.random() * 100 + "vw";

        petalo.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        petalo.style.animationDelay =
            Math.random() * 2 + "s";

        petalo.style.width =
            (10 + Math.random() * 8) + "px";

        petalo.style.height =
            (15 + Math.random() * 10) + "px";

        petalo.style.opacity =
            0.5 + Math.random() * 0.5;

        petalosCaidos.appendChild(petalo);

        setTimeout(() => {

            petalo.remove();

        }, 10000);
    }
}
// ================================
// CREAR LUCIÉRNAGAS
// ================================

function crearLuciernagas() {

    const contenedor = document.querySelector(".luciernagas");

    for (let i = 0; i < 14; i++) {

        const luciernaga = document.createElement("div");

        luciernaga.classList.add("luciernaga-extra");

        luciernaga.style.left =
            (5 + Math.random() * 90) + "vw";

        luciernaga.style.top =
            (20 + Math.random() * 60) + "vh";

        luciernaga.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        luciernaga.style.animationDelay =
            Math.random() * 4 + "s";

        const tamaño =
            3 + Math.random() * 4;

        luciernaga.style.width =
            tamaño + "px";

        luciernaga.style.height =
            tamaño + "px";

        contenedor.appendChild(luciernaga);
    }
}

crearLuciernagas();