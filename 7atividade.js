function verificarParOuImpar(numero) {
    if (numero === 0) {
        return "Neutro";
    } else if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarParOuImpar(4));
console.log(verificarParOuImpar(7));
console.log(verificarParOuImpar(0));