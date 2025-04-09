import styled from "styled-components";
import Icon from "../Icon/Icon";

const Card = () => {
  return (
    <Container>
      <ActivityAndAction>
        <Activity>Work</Activity>
        <Icon name="ellipsis" />
      </ActivityAndAction>
      <TimeTrackingContainer>
        <ActualTracking>32hrs</ActualTracking>
        <PastTracking>Last week - 36hrs</PastTracking>
      </TimeTrackingContainer>
    </Container>
  );
};

export default Card;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.navy.navy900};
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ActivityAndAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeTrackingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Activity = styled.h1`
  font: ${({ theme }) => theme.typography.textPreset5M.style};
  color: ${({ theme }) => theme.colors.primary.white};
`;

const ActualTracking = styled.p`
  font: ${({ theme }) => theme.typography.textPreset3.style};
`;

const PastTracking = styled.p`
  color: ${({ theme }) => theme.colors.navy.navy200};
  font: ${({ theme }) => theme.typography.textPreset6.style};
`;
