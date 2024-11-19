alert("Seja bem vindo!")

let numeroMax = 10;
let numeroMin = 1;

alert(`Tente adivinhar o número secreto entre 1 e ${numeroMax}.`);

let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log(numeroSecreto);

let numeroEscolhido;
let numeroTentativas = 0;

while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = parseInt(prompt("Escolha um numero."));
    numeroTentativas++;

    if (numeroEscolhido < numeroSecreto) {
        numeroTentativas++;
        alert("O número secreto é maior.");
    } else if (numeroEscolhido > numeroSecreto) {
        alert("O número secreto é menor.");
    } else if (numeroEscolhido == numeroSecreto){
        break;
    } else {
        alert("Isso nem é um número.");
    }
}

alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}, com ${numeroTentativas} tentativa(s)`);
