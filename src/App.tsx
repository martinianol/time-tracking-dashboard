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

const DEFAULT_STATS = {
  current: 32,
  previous: 36,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <CardsContainer>
          <Card title="work" stats={DEFAULT_STATS} />
          <Card title="work" stats={DEFAULT_STATS} />
          <Card title="work" stats={DEFAULT_STATS} />
          <Card title="work" stats={DEFAULT_STATS} />
          <Card title="work" stats={DEFAULT_STATS} />
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
