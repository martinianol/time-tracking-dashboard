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
} from "./Card.styles";

interface Stats {
  current: number;
  previous: number;
}

const Card = ({ title, stats }: { title: string; stats: Stats }) => {
  return (
    <Container>
      <Header />
      <Content>
        <ActiviyHeader>
          <ActivityName>{title}</ActivityName>
          <ActivityAction>
            <Icon name="ellipsis" />
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
