import React from "react";
import {
  Container,
  ContainerFlex,
  ContainerFlexFooter,
  Line,
  Text,
  Author,
  Category,
} from "./Phrase.style";

const Phrase = ({ quote, getQuoteAuthor }) => {
  const { quoteAuthor, quoteGenre, quoteText } = quote;

  return (
    <Container>
      {quoteAuthor && (
        <>
          <ContainerFlex>
            <Line />
            <Text>{quoteText}</Text>
          </ContainerFlex>
          <ContainerFlexFooter onClick={getQuoteAuthor}>
            <div>
              <Author>{quoteAuthor}</Author>
              <Category>{quoteGenre}</Category>
            </div>
            <div>
              <span className="material-icons">east</span>
            </div>
          </ContainerFlexFooter>
        </>
      )}
    </Container>
  );
};

export { Phrase };
