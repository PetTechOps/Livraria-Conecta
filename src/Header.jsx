import styled from "styled-components";
import logoLivro from "../assets/logo-livro.png";

const HeaderStyles = styled.header`
  background: linear-gradient(90deg, #0051ff, #00bfff);
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;

const ListStyles = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  margin: 0;
`;

const Links = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: lightblue;
    text-decoration: underline;
  }
`;
const listaHeader = [
  "Cadastro de Cliente",
  "Cadastro de Livro",
  "Pequisar Cliente",
  "Pesquisar Livro",
];
export function Header() {
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
