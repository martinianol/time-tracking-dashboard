import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/common/card/Card";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.navy.navy950};
    color: white;
    font-family: ${({ theme }) => theme.fonts.main}
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
