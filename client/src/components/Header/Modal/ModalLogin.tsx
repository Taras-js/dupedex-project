import React from 'react';
import styles from './modalLogin.module.css';
import { Button, Icon } from '../../UIKit';
import { toggleModal } from '../../UIKit/Modal/modalSlice';
import { useAppDispatch } from '../../../app/hooks';



const ModalLogin:React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className={styles.modal__login}>
            <div className={styles.modal__login_exit}>
                <Button icon isDisabled={false} className={"btn"} onClick={() => { dispatch(toggleModal()); }}>
                        <Icon type="exit" width={24} height={22.5} color={"#000"}></Icon>
                </Button>
            </div>
            <div className={styles.modal__header}>Welcome!</div>
            <p className={styles.modal__text}>Sign up with mobile <br/> or another service to continue. </p>

            <div className={styles.modal__content}>
                <Button icon isDisabled={false} className={"btn"} >
                    <div className={styles.modal__content_email}>
                        Continue with email (coming soon)
                    </div>
                </Button>
                <Button icon isDisabled={false} className={"btn"} >
                    <div className={styles.modal__content_mobile}>
                        Continue with mobile
                    </div>
                </Button>
            </div>

            <p className={styles.modal__text}>By continuing, you agree with our <a href={"#"}> Terms of <br/>
                Service </a> and <a href={"#"}>Privacy Policy</a>.</p>
        </div>
    )
}

export { ModalLogin }