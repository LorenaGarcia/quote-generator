import React from "react";
import {
  Container,
  ContainerFlex,
  NameAuthor,
  Line,
  Text,
} from "./PhraseList.style";

const PhraseList = ({ quotesAuthor, author }) => {
  return (
    <>
      <Container>
        <NameAuthor>{author}</NameAuthor>
      </Container>
      {quotesAuthor &&
        quotesAuthor.map((value, index) => (
          <Container key={index}>
            <ContainerFlex>
              <Line />
              <Text>{value.quoteText}</Text>
            </ContainerFlex>
          </Container>
        ))}
    </>
  );
};

export { PhraseList };
