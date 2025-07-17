const contatos = [
      { nome: "Mateus", telefone: "(11) 98765-4321", email: "mateusnf@email.com" },
      { nome: "Marcos", telefone: "(21) 99876-5432", email: "marcos365@email.com" },
      { nome: "Mario", telefone: "(31) 91234-5678", email: "marioworld@email.com" },
      { nome: "Malena", telefone: "(41) 93456-7890", email: "danicalabresa@email.com" }
    ];

    // Solicita o nome do contato
    const nomeBusca = prompt("Digite o nome do contato que deseja buscar:");

    if (nomeBusca) {
      // Busca o contato (ignora maiúsculas/minúsculas e espaços extras)
      const contatoEncontrado = contatos.find(contato =>
        contato.nome.toLowerCase() === nomeBusca.trim().toLowerCase()
      );

      // Mostra os dados ou mensagem de erro
      if (contatoEncontrado) {
        alert(
          `Contato encontrado:\n\n` +
          `Nome: ${contatoEncontrado.nome}\n` +
          `Telefone: ${contatoEncontrado.telefone}\n` +
          `E-mail: ${contatoEncontrado.email}`
        );
      } else {
        alert("Contato não registrado!");
      }
    } else {
      alert("Nenhum nome foi digitado.");
    }
    