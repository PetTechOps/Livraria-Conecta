// src/components/Footer/styled.js
import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 1rem 0; /* Adiciona um padding para o footer */
  display: flex; /* Usa flexbox para alinhar os itens horizontalmente */
  align-items: center; /* Centraliza os itens */
  border-top: 2px solid #4444;

  @media (min-width: 600px) {
    flex-direction: row; /* Muda para linha em telas maiores */
    justify-content: space-between; /* Espaça os itens nas extremidades */
  }
`;

export const FooterLogo = styled.img`
  max-width: 40px;
  height: auto;
  margin-bottom: 10px;
  margin-left: 20px;
`;

export const FooterNav = styled.nav`
  display: block; /* Usa flexbox para alinhar os links horizontalmente */
  gap: 1rem; /* Espaçamento entre os links */
  margin-right: 20px;
  margin-top: 0.5rem; /* Espaçamento acima da navegação */

  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;
