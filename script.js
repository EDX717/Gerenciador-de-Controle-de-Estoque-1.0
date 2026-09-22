// Script do Controle de Estoque

// Botões de Adicionar e Excluir Produto 
const BtnAd = window.document.getElementById("BotaoAdi");
const BtnEx = window.document.getElementById("BotaoEx");

// Salvando as informações do Produto do Usuário
const Produto = window.document.getElementById("Produto");
const Quanti = window.document.getElementById("Quantidade");
const Unitario = window.document.getElementById("ValorUnitario");
const ListaProdutos = window.document.querySelector(".Produtos-cadastrados");
const Item = window.document.querySelectorAll('.Item');

// Adicionando a Interatividade
const Produtos = window.document.getElementById("ProdutoCada");
const Quantidade = window.document.getElementById("QuantidadeCada");
const ValorUnitario = window.document.getElementById("ValUni");

// -- Adiciona os Itens na Tela -- //

// Produto do Usuário

const produtos = [];

BtnAd.addEventListener("click", function () {

  if (Produto.value === "") {
    alert("Por favor, Insira um Produto Necessário!")
  } else {

    Produtos.textContent = Produto.value;
    Quantidade.textContent = Number(Quanti.value);
    ValorUnitario.textContent = "R$ " + Number(Unitario.value);

    const produto = {
      nome: Produto.value,
      quantidade: Quanti.value,
      preco: Unitario.value,
    };

    ListaProdutos.classList.add('mostrar');

    produtos.push(produto);

    ListaProdutos.innerHTML = "";

    produtos.forEach(function (produto) {
      ListaProdutos.innerHTML += // O (+=) mantém o conteúdo e adiciona mais.
        ` 
        <div class="Item">
            <p><strong class="p2">Nome:</strong> <br> ${produto.nome}</p>
            <p><strong class="p2">Quantidade:</strong> <br> ${produto.quantidade}</p>
            <p><strong class="p2">Valor:</strong> <br> R$ ${produto.preco}</p>
        </div>
    `;
    });
  }

});

// -- Exclui os Itens na Tela -- //

BtnEx.addEventListener('click', function () {
  if (Produto.value === "") {
    alert("Por favor, insira um Produto para o Excluir!");
  } else {
    
    ListaProdutos.classList.add('mostrar');

    produtos.forEach(function (produ) {
      const Sem = produtos.length = ""
      ListaProdutos.innerHTML = Sem
    });
  }
});


