import React from "react";
import {
  Container,
  ContainerFlex,
  ContainerFlexFooter,
  Line,
  Text,
  Author,
  Category,
} from "./PhraseList.style";

const PhraseList = ({ quotesAuthor }) => {
  return (
    quotesAuthor &&
    quotesAuthor.map((value) => (
      <Container>
        <ContainerFlex>
          <Line />
          <Text>{value.quoteText}</Text>
        </ContainerFlex>
      </Container>
    ))
  );
};

export { PhraseList };
