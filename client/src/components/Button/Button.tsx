import React from "react";

import styles from "./button.module.css"
import { combinedClass } from "../../utils/helper"

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

    
    const classPropMap = {
        'btn_filled': filled,
        'btn_outlined': outlined,
        'btn_icon': icon,
        'btn_text': (!filled && !outlined && !icon),

        'btn_large': large,
        'btn_small': small,
        'btn_medium': (!large && !small && !icon)
    }
    const btnStyle = combinedClass(styles, 'btn', className, classPropMap);

    const handleClick = () => {
        if (onClick) onClick();
    }

    return (
        <button
            className={btnStyle}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;