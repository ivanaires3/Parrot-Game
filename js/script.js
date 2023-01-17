


let quantidadeCartas = prompt("Com quantas cartas você deseja jogar");
const minimo = 4;

let numero = Number(quantidadeCartas);
let impar = numero % 2;

const cartas = document.querySelector('.cartas')



while (quantidadeCartas < minimo || impar !== 0 || quantidadeCartas > 14) {
    alert("Número invalido, digite um número par entre 4 e 14!");
    quantidadeCartas = prompt("Com quantas cartas você deseja jogar");
    numero = Number(quantidadeCartas);
    impar = numero % 2;
}

const aleatorio = [];

let contador = 0;

cartas.innerHTML = '';

const imagesAleatorias = [];
imagesAleatorias.push(`<div class="imagem-costa">
<img src="images/bobrossparrot.gif" alt="">
</div>`)
imagesAleatorias.push(`<div class="imagem-costa">
<img src="images/explodyparrot.gif" alt="">
</div>`)
imagesAleatorias.push(`<div class="imagem-costa">
    <img src="images/fiestaparrot.gif" alt="">
</div>`)
imagesAleatorias.push(`<div class="imagem-costa">
    <img src="images/revertitparrot.gif" alt="">
</div>`)
imagesAleatorias.push(`<div class="imagem-costa">
    <img src="images/tripletsparrot.gif" alt="">
</div>`)

imagesAleatorias.push(`<div class="imagem-costa">
    <img src="images/unicornparrot.gif" alt="">
</div>`);

imagesAleatorias.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}


while (contador < quantidadeCartas) {

    const numeroqualquer = [0, 1, 2, 3, 4, 5]

    numeroqualquer.sort(comparador);

    function comparador() {
        return Math.random() - 0.5;
    }

    aleatorio.push(`<div class="carta">
    <div class="imagem-frente">
        <img src="images/back.png" alt="">
    </div>
    ${imagesAleatorias[numeroqualquer[0]]}
    
    </div>`)


    cartas.innerHTML = cartas.innerHTML + aleatorio[contador];

    contador++
}

