interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
  alt?: string;
}

const Icon: React.FC<IconProps> = ({ name, alt = "", ...props }) => {
  try {
    const iconSrc = new URL(
      `../../../assets/icons/icon-${name}.svg`,
      import.meta.url
    ).href;
    return <img src={iconSrc} alt={alt || name} {...props} />;
  } catch (error) {
    console.error(`Icon not found: icon-${name}.svg`);
    console.error(error);
    return null;
  }
};

export default Icon;
