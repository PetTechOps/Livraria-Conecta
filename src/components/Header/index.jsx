import logoLivro from "../../assets/logo-livro.png";
import { HeaderStyles, ListStyles, Links } from "./styles";

export function Header() {
  const listaHeader = [
    { texto: "Cadastre seu Livro", link: "/" },
    { texto: "Pesquisar livros", link: "/catalogo" },
  ];
  return (
    <HeaderStyles>
      <img src={logoLivro} height={70} width={70} />

      <ListStyles>
        {listaHeader.map((item) => {
          return (
            <li>
              <Links href={item.link}>{item.texto}</Links>
            </li>
          );
        })}
      </ListStyles>
    </HeaderStyles>
  );
}
