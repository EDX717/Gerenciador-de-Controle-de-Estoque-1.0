// Salvando as informações do Produto do Usuário
const BtnAd = window.document.getElementById("BotaoAdi");
const Produto = window.document.getElementById("Produto");
const Quanti = window.document.getElementById("Quantidade");
const Unitario = window.document.getElementById("ValorUnitario");
const ListaProdutos = window.document.querySelector(".Produtos-cadastrados");
const Item = window.document.querySelectorAll('.Item');

// Adicionando a Interatividade

const Produtos = window.document.getElementById("ProdutoCada");
const Quantidade = window.document.getElementById("QuantidadeCada");
const ValorUnitario = window.document.getElementById("ValUni");

//Adiciona os Items na Tela
// Produto do Usuário

const produtos = [];

BtnAd.addEventListener("click", function () {

  Produtos.textContent = Produto.value;
  Quantidade.textContent = Number(Quanti.value);
  ValorUnitario.textContent = "R$ " + Number(Unitario.value);

  const produto = {
    nome: Produto.value,
    quantidade: Quanti.value,
    preco: Unitario.value,
  };

  produtos.push(produto);

  ListaProdutos.innerHTML = "";

  produtos.forEach(function (produto) {
    ListaProdutos.innerHTML += // O (+=) mantém o conteúdo e adiciona mais.
    ` 
        <div class="Item">
            <h2>${produto.nome}</h2>
            <p>Quantidade: ${produto.quantidade}</p>
            <p>Preço: R$ ${produto.preco}</p>
        </div>
    `;
  });
});
