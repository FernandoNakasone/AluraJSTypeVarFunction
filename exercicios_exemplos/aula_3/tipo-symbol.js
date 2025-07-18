const meuSimbolo = Symbol();

const simboloComDescricao = Symbol('descricao_do_simbolo');

const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); 

const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

console.log(obj[meuSimbolo]);