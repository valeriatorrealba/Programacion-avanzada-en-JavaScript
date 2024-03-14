import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animales.js";

(async () => {
    try {
        const response = await fetch("animales.json");
        const datos = await response.json();
        seleccionOption(datos);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Carga Completa");
    }
})();

   // const audioPlayer = document.getElementById('player');

    const btnRegistrar = document.getElementById("btnRegistrar");

    btnRegistrar.addEventListener("click", async () => {
        const animalOption = document.getElementById("animal").value;
        const edadOption = document.getElementById("edad").value;
        const comentarios = document.getElementById("comentarios").value;
        const comentariosGuardados = comentarios;

        let animal;

        switch(animalOption) {
            case "Leon":
                animal = new Leon("León", edadOption, "leon.png", comentariosGuardados, "Rugido.mp3");
                break;
            case "Lobo":
                animal = new Lobo("Lobo", edadOption, "lobo.jpg", comentariosGuardados, "Aullido.mp3");
                break;
            case "Oso":
                animal = new Oso("Oso", edadOption, "oso.jpg", comentariosGuardados, "Grunido.mp3");
                break;
            case "Serpiente":
                animal = new Serpiente("Serpiente", edadOption, "serpiente.jpg", comentariosGuardados, "Siseo.mp3");
                break;
            case "Aguila":
                animal = new Aguila("Águila", edadOption, "aguila.png", comentariosGuardados, "Chillido.mp3");
                break;
            default:
                alert("Seleccione un animal válido");
                return;
        }

        console.log(animal);

        const tablaAnimales = document.getElementById("Animales");
        const newFila = document.createElement("div");
        newFila.classList.add("card");
        newFila.style.width = "15rem";
        newFila.innerHTML = `
            <img src="assets/imgs/${animal.img}">            
                <div class="modal-body bg-secondary">
                    <img class="img-fluid" src="assets/imgs/audio.svg" alt="Reproducir audio" style="max-width: 15%;">
                    <audio src="assets/sounds/${animal.sonido}"></audio>
                </div>
            `;
        tablaAnimales.appendChild(newFila);
    });


function reproducirSonido(sonido) {
    audioPlayer.src = `assets/sounds/${sonido}`;
    audioPlayer.play();
}

window.reproducirSonido = reproducirSonido;