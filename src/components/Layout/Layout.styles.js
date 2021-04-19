import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  padding: 2rem 5rem;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (max-width: 480px) {
    padding: 1rem;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  min-height: 5rem;
  text-align: right;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  cursor: pointer;
`;

const Main = styled.div`
  grid-area: main;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Footer = styled.div`
  grid-area: footer;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
  margin-top: 5rem;
`;

export { Container, Header, Main, Footer };
