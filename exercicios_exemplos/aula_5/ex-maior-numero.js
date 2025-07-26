function verificarMaiorNumero(numero1, numero2, numero3){
    if(numero1 === numero2 && numero1 === numero3) {
        return numero1
    } else if (numero1 > numero2 && numero1 > numero3){
        return numero1;
    } else if (numero2 > numero1 && numero2 > numero3){
        return numero2;
    } else {
        return numero3;
    }
}

console.log(verificarMaiorNumero(5,7,1));
