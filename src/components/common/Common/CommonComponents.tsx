import styled from "styled-components";
import { BREAK_POINTS } from "../../../consts/consts";

export const MainContainer = styled.main`
  /* margin: auto; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  max-width: 70rem;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    width: 80vw;
    margin: 0 auto;
  }

  @media (min-width: ${BREAK_POINTS.laptop}) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
  }
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
