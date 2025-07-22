let idade = 20;
let idadeMin = 18;

function verificaIdade(idade, idadeMin){
    if(idade >= idadeMin){
        return 'O úsuario pode efetuar a compra do ingresso';
    } else {
        return 'O úsuario não pode efetuar a compra do ingresso'
    }
}

console.log(verificaIdade(idade, idadeMin));

idade = 17;
idadeMin = 25;

console.log(verificaIdade(idade, idadeMin));

idade = 20;
idadeMin = 20;

console.log(verificaIdade(idade, idadeMin));

idade = 7;
idadeMin = 80;

console.log(verificaIdade(idade, idadeMin));