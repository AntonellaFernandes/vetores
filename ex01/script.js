let nomes = [];

for (let i = 0; i < 7; i++) {
    let nomeInformado = prompt("Digite o " + (i + 1) + "º nome:");
    nomes[i] = nomeInformado;
}

alert("Listagem na ordem inversa:");

for (let i = 6; i >= 0; i--) {
    alert(nomes[i]);
}