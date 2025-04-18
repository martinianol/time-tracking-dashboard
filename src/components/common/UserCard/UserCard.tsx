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

interface UserCardProps {
  name: string;
  avatar: string;
  activeState?: string;
  onChange?: (state: string) => void;
}

const MENU_ITEMS = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

const UserCard: React.FC<UserCardProps> = ({
  name,
  avatar,
  activeState = "weekly",
  onChange,
}) => {
  const handleMenuClick = (state: string) => {
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
            $active={activeState === item.value}
            onClick={() => handleMenuClick(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </UserCardContainer>
  );
};

export default UserCard;
