import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/common/card/Card";
import UserCard from "./components/common/UserCard/UserCard";
import avatarImage from "./assets/images/image-jeremy.png"; // Adjust the path based on your folder structure


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
        <UserCard name="Jeremy Robson" avatar={avatarImage} />
        <CardsContainer>
          <Card title="work" stats={DEFAULT_STATS} />
          <Card title="play" stats={DEFAULT_STATS} />
          <Card title="study" stats={DEFAULT_STATS} />
          <Card title="exercise" stats={DEFAULT_STATS} />
          <Card title="social" stats={DEFAULT_STATS} />
          <Card title="self-care" stats={DEFAULT_STATS} />
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
  gap: 1.5rem;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
