let quantidadeCartas = prompt("Com quantas cartas você deseja jogar");

let numero = Number(quantidadeCartas);
let impar = numero % 2;

while (quantidadeCartas < 4 || impar !== 0 || quantidadeCartas > 14) {
    alert("Número invalido, digite um número par entre 4 e 14!");
    quantidadeCartas = prompt("Com quantas cartas você deseja jogar");
    numero = Number(quantidadeCartas);
    impar = numero % 2;
}

const imagesParrots = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];

const cartas = document.querySelector(".cartas");

let card = [];

for (let contador = 0; contador < quantidadeCartas; contador = contador + 2) {

    card.push(`
    <div class='carta' data-parrot=${imagesParrots[contador]} onclick='virarCarta(this);'>
        <div class="imagem face">
            <img src="images/${imagesParrots[contador]}.gif" alt="">
        </div>
        <div class="imagem back">
            <img src="images/back.png" alt="">
        </div>
    </div>`);

    card.push(`
    <div class='carta' data-parrot=${imagesParrots[contador]} onclick='virarCarta(this);'>
        <div class="imagem face">
            <img src="images/${imagesParrots[contador]}.gif" alt="">
        </div>
        <div class="imagem back">
            <img src="images/back.png" alt="">
        </div>
    </div>`);

}

card.sort(comparador)

for (let i = 0; i < quantidadeCartas; i++) {
    cartas.innerHTML = cartas.innerHTML + card[i];
}

let cartaVirada1;
let cartaVirada2;

function virarCarta(cartaVirada) {
    const esconder = cartaVirada.querySelector(".back");
    const revelar = cartaVirada.querySelector(".face");

    if (revelar.classList.contains("mostrarFace") || esconder.classList.contains("esconderCosta")) {
        return;
    }

    if (cartaVirada1 === undefined) {
        esconder.classList.add("esconderCosta");
        revelar.classList.add("mostrarFace");
        cartaVirada1 = cartaVirada;
    } else if (cartaVirada2 === undefined) {
        esconder.classList.add("esconderCosta");
        revelar.classList.add("mostrarFace");
        cartaVirada2 = cartaVirada;
    }

    setTimeout(compararCartas, 1000)
}

function compararCartas() {
    const primeiraCarta = cartaVirada1.getAttribute("data-parrot");
    const segundaCarta = cartaVirada2.getAttribute("data-parrot");

    if (primeiraCarta === segundaCarta) {

        cartaVirada1 = undefined;
        cartaVirada2 = undefined;

    } else {
        esconder();
        function esconder() {
            cartaVirada1.querySelector('.mostrarFace').classList.remove('mostrarFace')
            cartaVirada1.querySelector('.esconderCosta').classList.remove("esconderCosta")
            cartaVirada2.querySelector('.mostrarFace').classList.remove('mostrarFace')
            cartaVirada2.querySelector('.esconderCosta').classList.remove("esconderCosta")

            cartaVirada1 = undefined;
            cartaVirada2 = undefined;
        }
    }
}

function comparador() {
    return Math.random() - 0.5;
}