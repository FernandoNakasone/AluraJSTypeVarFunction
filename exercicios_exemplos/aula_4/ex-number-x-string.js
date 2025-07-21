let valor1 = '5';
let valor2 = 5;

let resultado1 = valor1 + valor2;
let resultado2;

if (valor1 === valor2) {
 resultado2 = 'Os valores são iguais.';
} else {
 resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado1);
console.log('Resultado 2:', resultado2);

//O que ocorre com os valores e resultados quando o código é executado?
//A variavel resultado1 mostra o valor 55 porque o valor1 é uma string então ele só junta os dois valores e não adicionam, o resultado2 mostra a frase "os valores são diferentes porque no if está usando === que compara se ambas variaveis tem o mesmo valor e mesmo tipo se estivesse com == ele só compararia os valores então transformaria a string em number e falararia que os valores são iguais"