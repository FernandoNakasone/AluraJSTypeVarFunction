const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt("5");

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if(media >= 7){
    media += media * 0.1;
}

console.log(`A média é  , ${media.toFixed(2)}`);