    var produtos = [
      { id: 1, nome: 'Camiseta Branca', preco: 'R$ 30,00', imagem: './img/camisebranca.jpg' },
      { id: 2, nome: 'Calça Jeans', preco: 'R$ 80,00', imagem: './img/jeans.jpg' },
      { id: 3, nome: 'Jaqueta', preco: 'R$ 120,00', imagem: './img/jaqueta.jpg' },
      { id: 4, nome: 'Jaqueta', preco: 'R$ 240,00', imagem: './img/moletom.png' },
    ];

    var divProdutos = document.getElementById('produtos');

    produtos.forEach(produto => {
      var divProduto = document.createElement('div');
      divProduto.className = 'produto';

      var imgProduto = document.createElement('img');
      imgProduto.src = produto.imagem;
      divProduto.appendChild(imgProduto);

      var nomeProduto = document.createElement('h2');
      nomeProduto.textContent = produto.nome;
      divProduto.appendChild(nomeProduto);

      var precoProduto = document.createElement('p');
      precoProduto.textContent = produto.preco;
      divProduto.appendChild(precoProduto);

      var botaoComprar = document.createElement('button');
      botaoComprar.textContent = 'Comprar';
      botaoComprar.addEventListener('click', function () {
        alert('Você comprou ' + produto.nome);
      });
      divProduto.appendChild(botaoComprar);

      divProdutos.appendChild(divProduto);
    });