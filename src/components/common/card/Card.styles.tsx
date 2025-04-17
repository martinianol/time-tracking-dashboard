import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 5.5rem;
`;

const Header = styled.div`
  background-color: orange;
  border-radius: 15px;
  padding: 2.375rem 0;
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
`;

const ActiviyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
