import React from "react";
import styled from "styled-components";

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  alt = "",
  width = "78px",
  height = "78px",
  ...props
}) => {
  try {
    const iconSrc = new URL(
      `../../../assets/icons/icon-${name}.svg`,
      import.meta.url
    ).href;

    return (
      <IconWrapper width={width} height={height} {...props}>
        <StyledImg src={iconSrc} alt={alt || name} />
      </IconWrapper>
    );
  } catch (error) {
    console.error(`Icon not found: icon-${name}.svg`);
    console.error(error);
    return <ErrorMessage>Icon not found</ErrorMessage>;
  }
};

export default Icon;

// Styled Components
const IconWrapper = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  text-align: center;
`;
