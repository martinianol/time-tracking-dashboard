import styled from "styled-components";

function App() {
  return (
    <Container>
      <h1>Hello, Vite + React + Styled Components + TypeScript!</h1>
      <p>This is a theme-powered component.</p>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  max-width: ${({ theme }) => theme.sizes.containerWidth};
  margin: 0 auto;
  padding: 20px;
`;
