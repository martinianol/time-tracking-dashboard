import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Card from "./components/common/Card/Card";
import UserCard from "./components/common/UserCard/UserCard";
import avatarImage from "./assets/images/image-jeremy.png";
import data from "./data/data.json"; // Assuming you have a data.json file with the required data
import { ActivityType } from "./components/common/Card/Card.styles";
import {
  CardsContainer,
  MainContainer,
  PageContainer,
} from "./components/common/Common/CommonComponents";
import { Footer } from "./components/common/Footer/Footer";

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

const App = () => {
  const [timeframe, setTimeFrame] = useState<Timeframe>(DEFAULT_TIMEFRAME);

  const handleTimeFrameChange = (timeFrame: Timeframe) => {
    setTimeFrame(timeFrame);
  };

  return (
    <PageContainer>
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
        </CardsContainer>
      </MainContainer>
      <Footer />
    </PageContainer>
  );
};

export default App;
