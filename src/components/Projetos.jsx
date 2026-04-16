import React from "react";

function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Belas Paisagens de Lagoa do Barro do Piaui",
      descricao: "Projeto apresentando paisagens naturais de minha cidade."
    },
    {
      id: 2,
      nome: "Sobre mim",
      descricao: "Projeto com informações pessoais sobre mim."
    },
    {
      id: 3,
      nome: "Portfolio",
      descricao: "Portoflio de apresentação para a disciplina Programação Web."
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-container">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="card">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
