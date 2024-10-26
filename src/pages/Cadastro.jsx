import { Header } from "../components/Header";
import { FormLivro } from "../components/FormLivro";
import { FooterComponent } from "../components/Footer";

export function Cadastro() {
  const infoLivro = ["Nome do Livro", "Autor", "Editora", "Ano de publicação"];
  return (
    <>
      <Header />
      <h1 style={{ color: "black", marginTop: "10rem", textAlign: "center" }}>
        Cadastro de Livros
      </h1>
      <FormLivro info={infoLivro} />
      <FooterComponent />
    </>
  );
}
