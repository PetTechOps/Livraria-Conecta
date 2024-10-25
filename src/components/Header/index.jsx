import logoLivro from "../../assets/logo-livro.png";
import { HeaderStyles, ListStyles, Links } from "./styles";

export function Header() {
  const listaHeader = [
    "Cadastro de Cliente",
    "Cadastro de Livro",
    "Pequisar Cliente",
    "Pesquisar Livro",
  ];
  return (
    <HeaderStyles>
      <img src={logoLivro} height={70} width={70} />

      <ListStyles>
        {listaHeader.map((item) => {
          return (
            <li>
              <Links href="">{item}</Links>
            </li>
          );
        })}
      </ListStyles>
    </HeaderStyles>
  );
}
