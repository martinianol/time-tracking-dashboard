import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/common/Card/Card";
import UserCard from "./components/common/UserCard/UserCard";
import avatarImage from "./assets/images/image-jeremy.png";
import data from "./data/data.json"; // Assuming you have a data.json file with the required data
import { ActivityType } from "./components/common/Card/Card.styles";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.navy.navy950};
    color: white;
    font-family: ${({ theme }) => theme.fonts.main}
  }
`;

export type Timeframe = "daily" | "weekly" | "monthly";

const DEFAULT_TIMEFRAME: Timeframe = "weekly";

const dataByTitle = data.reduce((acc, item) => {
  acc[item.title.toLowerCase() as ActivityType] = item.timeframes;
  return acc;
}, {} as Record<ActivityType, (typeof data)[0]["timeframes"]>);

console.log(dataByTitle);

const App = () => {
  const [timeframe, setTimeFrame] = useState<Timeframe>(DEFAULT_TIMEFRAME);

  const handleTimeFrameChange = (timeFrame: Timeframe) => {
    setTimeFrame(timeFrame);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <UserCard
          name="Jeremy Robson"
          avatar={avatarImage}
          timeFrame={timeframe}
          onChange={handleTimeFrameChange}
        />
        <CardsContainer>
          {Object.entries(dataByTitle).map(([title, stats]) => (
            <Card
              key={title}
              title={title as ActivityType}
              stats={stats[timeframe]}
            />
          ))}
          {/* Example of using the default stats */}
          {/* <Card title="work" stats={DEFAULT_STATS} />
          <Card title="play" stats={DEFAULT_STATS} />
          <Card title="study" stats={DEFAULT_STATS} />
          <Card title="exercise" stats={DEFAULT_STATS} />
          <Card title="social" stats={DEFAULT_STATS} />
          <Card title="self-care" stats={DEFAULT_STATS} /> */}
        </CardsContainer>
      </MainContainer>
    </>
  );
};

export default App;

const MainContainer = styled.main`
  height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
