import { cls } from "../../../utils/helper";
import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  icon?: boolean;
  filled?: boolean;
  outlined?: boolean;
  large?: boolean;
  small?: boolean;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

function Button(props: ButtonProps) {
  const {
    children,
    icon,
    filled,
    outlined,
    large,
    small,
    className,
    onClick,
    isDisabled,
  } = props;

  const btnClassMap = {
    btn_filled: filled,
    btn_outlined: outlined,
    btn_icon: icon,
    btn_text: !filled && !outlined && !icon,

    btn_large: large,
    btn_small: small,
    btn_medium: !large && !small && !icon,
  };
  const btnStyle = cls(styles, "btn", btnClassMap, className);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      className={btnStyle}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
