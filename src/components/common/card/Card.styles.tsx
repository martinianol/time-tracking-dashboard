import styled from "styled-components";

import theme from "../../../theme/theme";

const ACTIVITY_COLORS = {
  work: theme.colors.orange,
  play: theme.colors.blue300,
  study: theme.colors.pink400,
  exercise: theme.colors.green400,
  social: theme.colors.purple.purple700,
  "self care": theme.colors.yellow300,
};

export type ActivityType = keyof typeof ACTIVITY_COLORS;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: -0.75rem;
`;

const Header = styled.div<{ type: ActivityType }>`
  background-color: ${({ type }) => ACTIVITY_COLORS[type]};
  padding: 2.375rem 0;
  border-radius: 15px;
`;

const Content = styled.section`
  background-color: ${({ theme }) => theme.colors.navy.navy900};
  border-radius: 15px;
  padding: 27.5px 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: -2.375rem; // overlapping by padding height
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.colors.navy.navy800};
  }
`;

const ActiviyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ActivityStats = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActivityName = styled.h2`
  font: ${({ theme }) => theme.typography.textPreset5M.style};
  color: ${({ theme }) => theme.colors.primary.white};
  text-transform: capitalize;
`;

const ActualTracking = styled.p`
  font: ${({ theme }) => theme.typography.textPreset3.style};
`;

const PastTracking = styled.p`
  color: ${({ theme }) => theme.colors.navy.navy200};
  font: ${({ theme }) => theme.typography.textPreset6.style};
`;

const ActivityAction = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export {
  ImgContainer,
  Container,
  Content,
  Header,
  ActivityAction,
  ActiviyHeader,
  ActivityStats,
  ActivityName,
  ActualTracking,
  PastTracking,
};
