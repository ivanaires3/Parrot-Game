
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

while (contador < quantidadeCartas) {

    aleatorio.push(`<div class="carta">
    <div class="imagem-frente">
        <img src="images/back.png" alt="">
    </div>
    </div>
`)
    cartas.innerHTML = cartas.innerHTML + aleatorio[contador];

    contador++
}

aleatorio.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
    return Math.random() - 0.5;
}

comparador();
