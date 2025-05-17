import styled from "styled-components";
import { BREAK_POINTS } from "../../consts/consts";

export const TrackTimeContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 70rem;

  @media (min-width: ${BREAK_POINTS.tablet}) {
    min-width: 34.5rem;
    width: 80vw;
    margin: 0 auto;
  }

  @media (min-width: ${BREAK_POINTS.laptop}) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    height: fit-content;
  }
`;
