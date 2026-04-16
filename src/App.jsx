import React from "react";
import Header from "./components/Header";
import Projetos from "./components/Projetos";
import "./style.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sobre">
         <dic>
           <img src="/WhatsApp Image 2026-04-10 at 11.14.09.jpeg" width="50px" />
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
