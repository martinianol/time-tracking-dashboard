import styled from "styled-components";
export const Footer = () => {
  return (
    <StyledFooter>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/martinianol" target="_blank">
        Mars
      </a>
      .
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  font-size: 11px;
  text-align: center;
  margin-top: auto;
  padding: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.navy.navy200};
  }
`;
