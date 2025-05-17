import styled from "styled-components";
import { BREAK_POINTS } from "../../../consts/consts";

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.navy.navy900};
  width: 100%;
  border-radius: 15px;

  @media (min-width: ${BREAK_POINTS.laptop}) {
    justify-content: space-between;
    height: 100%
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple.purple600};
  border-radius: 15px;
  padding: 2rem;
  z-index: 1;

  @media (min-width: ${BREAK_POINTS.laptop}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    flex-grow: 1.68;
  }
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.white};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: ${BREAK_POINTS.laptop}) {
    max-width: 138px;
  }
`;

export const Greeting = styled.p`
  font: ${({ theme }) => theme.typography.textPreset6.style};
  color: ${({ theme }) => theme.colors.navy.navy200};
`;

export const Name = styled.h1`
  font: ${({ theme }) => theme.typography.textPreset4.style};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary.white};

  @media (min-width: ${BREAK_POINTS.laptop}) {
    font: ${({ theme }) => theme.typography.textPreset2.style};
    font-size: 2.5rem;
    line-height: 117.5%;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  padding: 1.5rem 0;
  width: 100%;

  @media (min-width: ${BREAK_POINTS.laptop}) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2rem;
    padding-bottom: 2rem;
    gap: 1.3125rem; //CHECK
  }
`;

export const MenuItem = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary.white : theme.colors.purple.purple500};
  font: ${({ theme }) => theme.typography.textPreset5R.style};
  line-height: 21px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;
