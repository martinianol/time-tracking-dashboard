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
      <div
        style={{
          width,
          height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={iconSrc}
          alt={alt || name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          {...props}
        />
      </div>
    );
  } catch (error) {
    console.error(`Icon not found: icon-${name}.svg`);
    console.error(error);
    return null;
  }
};

export default Icon;
