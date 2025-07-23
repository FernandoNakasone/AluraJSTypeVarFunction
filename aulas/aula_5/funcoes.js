function exibeNomeEstudante(nome){
    console.log(nome);
}

exibeNomeEstudante("Fernando");
exibeNomeEstudante("Ana");

function exibeInfosEstudante(nome, nota){
    console.log(`o nome é ${nome} e a nota é ${nota}`);
}

exibeInfosEstudante("Fernando", 10);
exibeInfosEstudante("Ana", 6);

function exibeInfosEstudante2(nome, nota){
    return `o nome é ${nome} e a nota é ${nota}`;
}

exibeInfosEstudante2("Fernando", 10);
exibeInfosEstudante2("Ana", 6);