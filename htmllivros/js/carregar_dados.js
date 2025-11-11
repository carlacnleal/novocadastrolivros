document.addEventListener("DOMContentLoaded", function() {
    const tabela = document.querySelector("#tabelaLivros tbody");

    fetch("dados.json")
      .then(resposta => resposta.json())
      .then(dados => {
        dados.forEach(livro => {
            const linha = document.createElement("tr");

            linha.innerHTML = `
                    <td><img src="${livro.foto}" alt="Capa do livro ${livro.titulo}" width="100"></td>
                    <td>${livro.autor}</td>
                    <td>${livro.titulo}</td>
                    <td>${livro.genero}</td> 
                    `;

                    tabela.appendChild(linha)

        });
      })

      .catch(erro =>  {
        console.error("Erro ao carregar os dados: ", erro);

      });
})