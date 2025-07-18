let estoqueProdutoA = 50;

//A
function realizarVenda(quantidade) {
  if (estoqueProdutoA >= quantidade) {
    estoqueProdutoA = estoqueProdutoA - quantidade;
  } else {
    console.log("Estoque insuficiente.");
  }
}

//B
function realizarVenda(quantidade) {
  if (quantidade <= estoqueProdutoA) {
    estoqueProdutoA = estoqueProdutoA - quantidade;
    console.log(`Estoque atualizado. Novo estoque: ${estoqueProdutoA}`);
  }
}

//C
function realizarVenda(quantidade) {
  if (estoqueProdutoA == true) {
    estoqueProdutoA = quantidade - estoqueProdutoA;
    console.log(`Venda realizada. Novo estoque: ${estoqueProdutoA}`);
  } else {
    console.log("Quantidade insuficiente em estoque.");
  }
}

//D
function realizarVenda(quantidade) {
  if (quantidade > estoqueProdutoA) {
    console.log("Quantidade insuficiente em estoque.");
  } else {
    estoqueProdutoA -= quantidade;
    console.log(
      `Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`
    );
  }
}

//Opção correta é a D pois é a unica que verifica se a quantidade pedida é menor que a quantidade em estoque, tira  a quantidade se possivel do estoque e dá um feedback da venda realizada
