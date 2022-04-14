import styles from "./button.module.css"

// enum Type {
//     filled = 'filled',
//     outlined = 'outlined',
//     text = 'text',
//     icon = 'icon',
// }

// enum Size {
//     large = 'large',
//     medium = 'medium',
//     small = 'small',
// }

// interface ButtonProps {
//     children: JSX.Element[] | string;
//     type: Type;
//     size?: Size;
//     className?: string;
// }



const Button = (props) => {
    const {children, type, size, className} = props;

    const typeClass = `btn_${type}`
    const sizeClass = type !== 'icon' ? (size ? `btn_${size}` : `btn_medium`) : '';

    return (
        <button className={`${styles.btn} ${styles[typeClass]}  ${styles[sizeClass]} ${className}`}
            >
            {children}
        </button>
    )
}

export {Button};