import styles from './Container.module.css'

interface ContainerProps {
    children?: React.ReactChild | React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div> 
    ) 
}

export default Container;