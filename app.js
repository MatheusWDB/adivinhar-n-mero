alert("Seja bem vindo!")

let numeroMax = 100;
let numeroMin = 1;

alert(`Tente adivinhar o número secreto entre 1 e ${numeroMax}.`);

let numeroSecreto = parseInt(Math.random() * numeroMax + 1) ;
let numeroEscolhido;
let numeroTentativas = 1;

do {
    numeroEscolhido = prompt("Escolha um numero.");

    if (numeroEscolhido < numeroSecreto) {
        numeroTentativas++;
        alert("O número secreto é maior.");
    } else if (numeroEscolhido > numeroSecreto) {
        numeroTentativas++;
        alert("O número secreto é menor.");
    } else {
        break;
    }
} while (numeroEscolhido != numeroSecreto)

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${numeroTentativas} tentativa(s)`);
