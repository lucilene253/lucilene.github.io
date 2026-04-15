import React from "react";

function Projetos() {
  const projetos = [
    {
      id: 1,
      nome: "Sistema de Fiscalização",
      descricao: "Sistema web para cadastro e consulta de fiscalizações."
    },
    {
      id: 2,
      nome: "Dashboard de Irregularidades",
      descricao: "Dashboard com filtros, gráficos e estatísticas."
    },
    {
      id: 3,
      nome: "Automação Google Drive",
      descricao: "Automação de documentos e envio de e-mails."
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