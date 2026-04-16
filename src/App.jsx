import React from "react";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import minhaFoto from './assets/eu.jpeg';
import "./style.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sobre">
          <div className="flex">
            <img src={minhaFoto} width="75px" alt="Minha Foto" />
            <h2>Sobre Mim</h2>
          </div>
          <p>
            Sou apaixonada por tecnologia, ensino e inovação. Gosto de aprender e compartilhar conhecimento.
          </p>
        </section>

        <Projetos />
      </main>

      <footer>
        <p>© 2026 - Meu Portfólio</p>
      </footer>
    </>
  );
}

export default App;
