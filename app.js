let souris = prompt("Avez-vous une souris ?");
let clavier = prompt("Avez-vous un clavier ?");
let ordi = prompt("Avez-vous un ordinateur ?");
let tapis = prompt("Avez-vous un tapis ?");
let imprimante = prompt("Avez-vous une imprimante ?");
let ondulateur = prompt("Avez-vous un ondulateur ?");

switch (souris) {
    case 'oui':
        alert("J'ai une souris");
    default:
        alert("Accessoire Inconnu")
}

switch (clavier) {
    case 'oui':
        alert("J'ai un clavier");
    default:
        alert("Accessoire Inconnu")
}

switch (ordi) {
    case 'oui':
        alert("J'ai un ordi");
    default:
        alert("Accessoire Inconnu")
}

switch (tapis) {
    case 'oui':
        alert("J'ai un tapis");
    default:
        alert("Accessoire Inconnu")
}

switch (imprimante) {
    case 'oui':
        alert("J'ai une imprimante");
    default:
        alert("Accessoire Inconnu")
}

switch (ondulateur) {
    case 'oui':
        alert("J'ai un ondulateur");
    default:
        alert("Accessoire Inconnu")
}
