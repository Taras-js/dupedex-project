import LogoIcon from "../icons/LogoIcon.jsx";
import DarkModeIcon from "../icons/DarkModeIcon.jsx";

import styles from "./header.module.css"
import {Button} from "../Button/Button.jsx";

const Header = () => {
    return <header  className={styles.header}>
                <h1 hidden>Dupe.dex - reviews agregator</h1>

                <div className={styles.header__container}>
                    <a href="#" className={styles.header_logo}>
                        <LogoIcon />
                    </a>

                    <div className={styles.header__btn_wrapper}>
                        <Button type="text" size="large" >SIGN IN</Button>
                        <Button type="outlined" size="large" >SIGN UP</Button>

                        <Button type="icon" className={styles.btn_darkMode}>
                            <DarkModeIcon />
                        </Button>
                    </div>
                </div>
    </header>
}

export {Header};