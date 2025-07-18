const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

//Qual é o valor de resultado após a execução da expressão?
console.log(resultado.toFixed(2));
