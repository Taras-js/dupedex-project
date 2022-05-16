import { cls } from "../../../utils/helper";
import styles from "./tooltip.module.css";

interface TooltipProps {
  children: React.ReactNode;
  className?: string;
  placement?: keyof typeof PlacementTypes;
  title: string;
  bgColor?: string;
  textSize?: string;
}

enum PlacementTypes {
  top = "tooltip__top",
  left = "tooltip__left",
  right = "tooltip__right",
  bottom = "tooltip__bottom",
}

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const {
    children,
    className,
    placement = "top",
    title,
    bgColor = "#202020",
    textSize = "16",
  } = props;

  const arrowColorGenerator = () => {
    const placementArray: Array<string> = ["top", "right", "bottom", "left"];
    const arrowColor: string = placementArray
      .map((el) => (el === placement ? bgColor : "transparent"))
      .join(" ");
    return arrowColor;
  };

  const tooltipStyle = cls(
    styles,
    "tooltip",
    className,
    PlacementTypes[`${placement}`],
  );
  const tooltipTextStyle = cls(styles, "tooltip__text");

  return (
    <div className={cls(styles, "tooltip__wrapper")}>
      {children}
      <div className={tooltipStyle}>
        <div
          style={{ fontSize: textSize, backgroundColor: bgColor }}
          className={tooltipTextStyle}
        >
          {title}
          <span
            style={{ borderColor: `${arrowColorGenerator()}` }}
            className={cls(
              styles,
              "tooltip__arrow",
              `tooltip__arrow_${placement}`,
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
