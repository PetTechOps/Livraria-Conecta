import React from "react";
import { Footer, FooterLogo, FooterNav } from "./styles";
import logo from "../../assets/logo-livro.png";

export function FooterComponent() {
  return (
    <Footer>
      <FooterLogo src={logo} alt="Logo" />
      <p>&copy; 2024 Livraria. Todos os direitos reservados.</p>
      <FooterNav>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
        <a href="#privacidade">Política de Privacidade</a>
      </FooterNav>
    </Footer>
  );
}
