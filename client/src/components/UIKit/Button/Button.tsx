import classnames from 'classnames';
import styles from './button.module.css';

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

  const classPropMap = {
    [styles.btn]: true,
    [styles.btn_filled]: filled,
    [styles.btn_outlined]: outlined,
    [styles.btn_icon]: icon,
    [styles.btn_text]: (!filled && !outlined && !icon),

    [styles.btn_large]: large,
    [styles.btn_small]: small,
    [styles.btn_medium]: (!large && !small && !icon),
  };
  const btnStyle = classnames(classPropMap, className);

  const handleClick = () => {
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
