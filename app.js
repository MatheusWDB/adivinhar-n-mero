alert("Seja bem vindo!")

let numeroMax = 100;
let numeroMin = 1;

alert(`Tente adivinhar o número secreto entre 1 e ${numeroMax}.`);

let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
let numeroEscolhido;
let numeroTentativas = 1;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt("Escolha um numero.");

    if (numeroEscolhido < numeroSecreto) {
        numeroTentativas++;
        alert("O número secreto é maior.");
    } else if (numeroEscolhido > numeroSecreto) {
        numeroTentativas++;
        alert("O número secreto é menor.");
    } else if (numeroEscolhido == numeroSecreto){
        break;
    }
} 

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${numeroTentativas} tentativa(s)`);
