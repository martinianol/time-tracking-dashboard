import React from "react";
import styled from "styled-components";

interface UserCardProps {
  name: string;
  avatar: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, avatar }) => {
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
        <MenuItem>Daily</MenuItem>
        <MenuItem active>Weekly</MenuItem>
        <MenuItem>Monthly</MenuItem>
      </Menu>
    </UserCardContainer>
  );
};

export default UserCard;

const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.navy.navy900};
  width: 100%;
  /* gap: 1.5rem; */
  /* position: relative; */
  border-radius: 15px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple.purple600};
  border-radius: 15px;
  padding: 2rem;
  z-index: 1;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 15px;
  border: 3px solid ${({ theme }) => theme.colors.primary.white};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Greeting = styled.p`
  font: ${({ theme }) => theme.typography.textPreset6.style};
  color: ${({ theme }) => theme.colors.navy.navy200};
`;

const Name = styled.h1`
  font: ${({ theme }) => theme.typography.textPreset4.style};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary.white};
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  /* position: absolute; */
  /* bottom: -2rem; */
`;

const MenuItem = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary.white : theme.colors.navy.navy200};
  font: ${({ theme }) => theme.typography.textPreset6.style};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;
