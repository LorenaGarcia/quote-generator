import React from "react";
import { Container, Header, Main, Footer } from "./Layout.styles";

const Layout = ({ children, getQuoteRandom }) => {
  return (
    <Container>
      <Header onClick={() => getQuoteRandom()}>
        Random <span className="material-icons">autorenew</span>
      </Header>
      <Main> {children} </Main>
      <Footer>created by Lorraine</Footer>
    </Container>
  );
};

export { Layout };
