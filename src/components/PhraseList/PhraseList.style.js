import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

const ContainerFlex = styled.div`
  padding: 0rem 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const NameAuthor = styled.div`
  margin: 2rem;
  margin-right: 8rem;
  margin-left: 11rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #333333;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-left: 1.5rem;
  }
`;

const Line = styled.hr`
  height: 50vh;
  border-left: 8px solid #f7df94;
  margin-right: 2.5rem;

  @media (max-width: 480px) {
    height: 75vh;
    margin-right: 1.5rem;
  }
`;

const Text = styled.p`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  color: #000000;
  margin: 0;
`;

const Category = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
`;

const Author = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;

export { Container, ContainerFlex, NameAuthor, Line, Text, Category, Author };
