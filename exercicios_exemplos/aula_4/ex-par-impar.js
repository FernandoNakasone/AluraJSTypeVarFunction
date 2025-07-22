const numero = Math.round(Math.random() * 100);

const verifica = numero % 2 === 0 ? 'é par' : 'é ímpar';

console.log(`O número ${numero}  ${verifica}`);
