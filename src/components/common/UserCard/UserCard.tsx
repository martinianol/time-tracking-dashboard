import React from "react";
import {
  UserCardContainer,
  TopSection,
  Avatar,
  InfoContainer,
  Greeting,
  Name,
  Menu,
  MenuItem,
} from "./UserCard.styles";
import { Timeframe } from "../../TimeTracker/TimeTracker";


interface UserCardProps {
  name: string;
  avatar: string;
  timeFrame?: string;
  onChange?: (state: Timeframe) => void;
}

const MENU_ITEMS = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

const UserCard: React.FC<UserCardProps> = ({
  name,
  avatar,
  timeFrame = "weekly",
  onChange,
}) => {
  const handleMenuClick = (state: Timeframe) => {
    if (onChange) {
      onChange(state);
    }
  };
  return (
    <UserCardContainer>
      <TopSection>
        <Avatar src={avatar} alt={`${name}'s avatar`} />
        <InfoContainer>
          <Greeting>Report for</Greeting>
          <Name>{name}</Name>
        </InfoContainer>
      </TopSection>
      <Menu>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.value}
            $active={timeFrame === item.value}
            onClick={() => handleMenuClick(item.value as Timeframe)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </UserCardContainer>
  );
};

export default UserCard;
