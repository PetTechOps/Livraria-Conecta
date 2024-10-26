import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import Livro from "../assets/livro.jpg";
import { CardStyles } from "../components/Card/styles";

export function Catalogo() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("livroData")) || [];
    setLivros(existingData);
  }, []);

  return (
    <>
      <Header />
      <section
        style={{
          width: "100vw",
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
            {livros.length > 0 ? (
              livros.map((livro, index) => (
                <CardStyles key={index}>
                  <img src={Livro} alt="Livro" />
                  <span>{livro["Nome"]}</span>
                  <span>{livro["Autor"]}</span>
                  <span>{livro["Editora"]}</span>
                  <span>{livro["Ano de publicação"]}</span>
                </CardStyles>
              ))
            ) : (
              <p>Nenhum livro cadastrado.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
