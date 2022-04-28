import * as icons from "../../../assets/icons";

type IconTypes = keyof typeof icons;

interface IconProps {
  type?: IconTypes;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  const {
    type,
    width = "100%",
    height = "100%",
    className,
    color = "#78838c",
  } = props;

  return (
    <svg
      className={className}
      viewBox={icons[type].viewBox}
      width={width}
      height={height}
      fill={color}
    >
      {icons[type].path}
    </svg>
  );
};

export default Icon;
