alert("Seja bem vindo!")

let numeroMax = 10;
<<<<<<< HEAD
let numeroMin = 1;
=======
>>>>>>> 8d5907f7d22c229ee7d948d20bdac972ce39cbc6

alert(`Tente adivinhar o número secreto entre 1 e ${numeroMax}.`);

let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto);
<<<<<<< HEAD

let numeroEscolhido;
let numeroTentativas = 0;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = parseInt(prompt("Escolha um numero."));
    numeroTentativas++;
=======
let numeroEscolhido;
let numeroTentativas = 0;

while (numeroEscolhido != numeroSecreto) {
    numeroTentativas++;
    numeroEscolhido = prompt("Escolha um numero.");
>>>>>>> 8d5907f7d22c229ee7d948d20bdac972ce39cbc6

    if (numeroEscolhido < numeroSecreto) {
        alert("O número secreto é maior.");
    } else if (numeroEscolhido > numeroSecreto) {
        alert("O número secreto é menor.");
<<<<<<< HEAD
    } else if (numeroEscolhido == numeroSecreto){
=======
    } else if (numeroEscolhido == numeroSecreto) {
>>>>>>> 8d5907f7d22c229ee7d948d20bdac972ce39cbc6
        break;
    } else {
        alert("Isso nem é um número.");
    }
}

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${numeroTentativas} tentativa(s)`);
