import styled, { createGlobalStyle } from "styled-components";
import { BREAK_POINTS } from "../../../consts/consts";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.navy.navy950};
    color: white;
    font-family: ${({ theme }) => theme.fonts.main}
  }
`;

export const MainContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${BREAK_POINTS.laptop}) {
    gap: 2rem;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
