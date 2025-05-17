import Icon from "../Icon/Icon";
import {
  ActivityAction,
  ActivityName,
  ActivityStats,
  ActiviyHeader,
  ActualTracking,
  Content,
  Container,
  PastTracking,
  Header,
  ImgContainer,
  ActivityType,
} from "./Card.styled";

interface Stats {
  current: number;
  previous: number;
}

const Card = ({ title, stats }: { title: ActivityType; stats: Stats }) => {
  return (
    <Container>
      <Header type={title} />
      <ImgContainer>
        <Icon name={title} />
      </ImgContainer>
      <Content>
        <ActiviyHeader>
          <ActivityName>{title}</ActivityName>
          <ActivityAction>
            <Icon name="ellipsis" width="21px" height="5px" />
          </ActivityAction>
        </ActiviyHeader>
        <ActivityStats>
          <ActualTracking>{stats.current}hrs</ActualTracking>
          <PastTracking>Last week - {stats.previous}hrs</PastTracking>
        </ActivityStats>
      </Content>
    </Container>
  );
};

export default Card;
