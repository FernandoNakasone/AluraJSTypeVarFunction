let idade = 20;
let matriculaAtiva = true;

function verificaDesconto(idade,matriculaAtiva){
    return idade > 60 || idade < 7 || matriculaAtiva ? 'O cliente pode receber o desconto' : 'O cliente não pode receber o desconto';
}

console.log(verificaDesconto(idade, matriculaAtiva));

idade = 70;
matriculaAtiva = false;

console.log(verificaDesconto(idade, matriculaAtiva));

idade = 19;
matriculaAtiva = false;

console.log(verificaDesconto(idade, matriculaAtiva));