const numero = 10;
const resultado1 = (numero > 5 && numero < 15);
const resultado2 = (numero === 10 || numero > 20);
const resultado3 = !(numero < 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);

//Quais serão os valores booleanos de resultado1, resultado2 e resultado3 após a execução do código?
//O valor do resultado1 é true porque 10 é maior que cinco e menor que quinze, o resultado2 é true porque ele é uma variavel do tipo number com o valor 10, sendo que ele só retorna true se o valor for number 10 ou maior que 20 e o resultado3 retorna true porque ele nega o que está dentro dos parenteses, no caso em questão o numero não é menor que cinco então ele deveria retornar false porem a "1" nega isso fazendo com que o false vire true