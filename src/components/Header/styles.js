import styled from "styled-components";

export const HeaderStyles = styled.header`
  background: linear-gradient(90deg, #0051ff, #00bfff);
  width: 100vw;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

export const ListStyles = styled.ul`
  list-style-type: none;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 5rem;
  align-items: center;
  margin-right: 4rem;
  font-size: 1rem;
  margin: 0;
`;

export const Links = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: lightblue;
    text-decoration: underline;
  }
`;
