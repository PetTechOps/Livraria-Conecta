import { Header } from "../components/Header";
import { Input } from "../components/Input";
import Livro from "../assets/livro.jpg";
import { CardStyles } from "../components/Card/styles";

export function Catalogo() {
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
            {Array(6)
              .fill()
              .map((_, index) => (
                <CardStyles key={index}>
                  <img src={Livro} alt="Livro" />
                  <span>Nome</span>
                  <span>Autor</span>
                  <span>Editora</span>
                  <span>Ano de publicação</span>
                </CardStyles>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
