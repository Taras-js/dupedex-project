import styles from "./button.module.css"

// interface ButtonProps {
//     children: JSX.Element[] | string;
//     icon?: boolean;
//     filled?: boolean;
//     outlined?: boolean;
//     large?: boolean;
//     small?: boolean;
//     className?: string;
// }

const Button = (props) => {
    const {
        children, 
        icon,
        filled,
        outlined,
        large,
        small,
        className
    } = props;

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
        <button className={`${styles.btn} ${styles[typeClass]}  ${icon ? '' : styles[sizeClass]} ${className}`}
            >
            {children}
        </button>
    )
}

export {Button};