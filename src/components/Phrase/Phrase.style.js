import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerFlex = styled.div`
  height: 65%;
  padding: 0rem 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const ContainerFlexFooter = styled.div`
  margin: 2rem;
  margin-right: 8rem;
  margin-left: 11rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #4f4f4f;

  :hover {
    color: #f2f2f2;
    background-color: #333333;
  }
`;

const Line = styled.div`
  height: 100%;
  border-left: 8px solid #f7df94;
  margin-right: 2.5rem;
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

export {
  Container,
  ContainerFlex,
  ContainerFlexFooter,
  Line,
  Text,
  Category,
  Author,
};
