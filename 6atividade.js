function verificarNumero(numero) {
    if (numero > 0) {
        console.log("positiva");
    } else if (numero < 0) {
        console.log("negativa");
    } else {
        console.log("zero");
    }
}
verificarNumero(10);
verificarNumero(-5);
verificarNumero(0);