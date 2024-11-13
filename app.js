alert("Seja bem vindo!")

let numeroMax = 10;

alert(`Tente adivinhar o número secreto entre 1 e ${numeroMax}.`);

let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto);
let numeroEscolhido;
let numeroTentativas = 0;

while (numeroEscolhido != numeroSecreto) {
    numeroTentativas++;
    numeroEscolhido = prompt("Escolha um numero.");

    if (numeroEscolhido < numeroSecreto) {
        alert("O número secreto é maior.");
    } else if (numeroEscolhido > numeroSecreto) {
        alert("O número secreto é menor.");
    } else if (numeroEscolhido == numeroSecreto) {
        break;
    }
}

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${numeroTentativas} tentativa(s)`);
