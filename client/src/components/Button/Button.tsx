import React from "react";
import styles from "./button.module.css"

interface ButtonProps {
    children: JSX.Element | string;
    icon?: boolean;
    filled?: boolean;
    outlined?: boolean;
    large?: boolean;
    small?: boolean;
    className?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const {
        children, 
        icon,
        filled,
        outlined,
        large,
        small,
        className,
        onClick,
    } = props;

    const handleClick = () => {
        if (onClick) onClick();
    }

    const typeClass = !icon
        ? (filled ? 'btn_filled' 
            : (outlined ? 'btn_outlined'
                : 'btn_text'))
        : 'btn_icon'

    const sizeClass = !icon 
        ? (large 
            ? 'btn_large' 
            : (small 
                ? 'btn_small' 
                : 'btn_medium')
            )
        : 'btn_icon';

    return (
        <button
            className={`${styles.btn} ${styles[typeClass]}  ${icon ? '' : styles[sizeClass]} ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;