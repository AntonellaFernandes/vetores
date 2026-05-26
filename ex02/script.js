let numeros = [];
let somaNumeros = 0;
let media = 0;
let acimaDaMedia = [];
let contador = 0;

for (let i = 0; i < 8; i++) {
    numeros[i] = Number(prompt(`Insira o ${i+1}º número:`));
    somaNumeros = somaNumeros + numeros[i];
}

media = somaNumeros / 8

for (i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        acimaDaMedia[contador] = numeros[i];
        contador++
    }
}

alert(`A média é: ${media}.
Os números que estão acima da média são: ${acimaDaMedia.join(", ")}.`)

