import { Header } from "../components/Header";
import { Input } from "../components/Input";
import Livro from "../assets/livro.jpg";
import { CardStyles } from "../components/Card/styles";
import { useEffect, useState } from "react";
import { FooterComponent } from "../components/Footer";

export function Catalogo() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    // Recupera o JSON do localStorage
    const livroData = localStorage.getItem("livroData");

    // Verifica se existem dados e converte de string para objeto
    if (livroData) {
      const livrosArray = JSON.parse(livroData);
      setLivros(livrosArray);
    }
  }, []);

  return (
    <>
      <Header />
      <section
        style={{
          width: "100%",
          height: "100vh",
          padding: "10rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Input />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            className="box-cards"
            style={{
              width: "90%",
              display: "flex",
              gap: "4rem",
              flexWrap: "wrap",
              paddingLeft: "0.5rem",
              justifyContent: "flex-start",
            }}
          >
            {livros.map((livro, index) => (
              <CardStyles key={index}>
                <img src={Livro} alt="Livro" />
                <span>{livro["Nome do Livro"]}</span>
                <span>{livro["Autor"]}</span>
                <span>{livro["Editora"]}</span>
                <span>{livro["Ano de publicação"]}</span>
              </CardStyles>
            ))}
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
