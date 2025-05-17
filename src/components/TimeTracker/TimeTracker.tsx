import { useState } from "react";
import data from "../../data/data.json";
import avatarImage from "../../assets/images/image-jeremy.png";
import { ActivityType } from "../common/Card/Card.styles";
import { CardsContainer } from "../common/Common/CommonComponents";
import { TrackTimeContainer } from "./TImeTracker.styled";
import Card from "../common/Card/Card";
import UserCard from "../common/UserCard/UserCard";

export type Timeframe = "daily" | "weekly" | "monthly";

const DEFAULT_TIMEFRAME: Timeframe = "weekly";

const dataByTitle = data.reduce((acc, item) => {
  acc[item.title.toLowerCase() as ActivityType] = item.timeframes;
  return acc;
}, {} as Record<ActivityType, (typeof data)[0]["timeframes"]>);

export const TimeTracker = () => {
  const [timeframe, setTimeFrame] = useState<Timeframe>(DEFAULT_TIMEFRAME);

  const handleTimeFrameChange = (timeFrame: Timeframe) => {
    setTimeFrame(timeFrame);
  };

  return (
    <TrackTimeContainer>
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
    </TrackTimeContainer>
  );
};
