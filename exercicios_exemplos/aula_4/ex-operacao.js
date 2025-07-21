let saldoNaConta;
let valorDeposito;
let valorSaque;

saldoNaConta = 2607.04;
valorDeposito = 2500.89;
valorSaque = 1000.04;

const operacao = saldoNaConta + valorDeposito - valorSaque;

console.log(`Saldo restante: R$${operacao.toFixed(2)}`);