import React from "react";
import styles from './modalShare.module.css';
import { Button, Icon } from '../../UIKit';
import { useAppDispatch } from '../../../app/hooks';
import { toggleModal } from '../../UIKit/Modal/modalSlice';

const ModalShare:React.FC = (props) => {
    const dispatch = useAppDispatch();

    const onShareClick = () => {
        console.log("onShareClick click")
    }

    const onMessageClick = () => {
        console.log("onMessageClick click")
    }

    return (
        <div className={styles.modal__share}>
            <div className={styles.modal__share_exit}>
                <Button icon isDisabled={false} className={"btn"} onClick={() => { dispatch(toggleModal()) }}>
                    <Icon type="exit" width={24} height={22.5} color={"#000"}></Icon>
                </Button>
            </div>
            <div className={styles.modal__header}>Share skincare library</div>
                <div className={styles.modal__content}>
                    <Button icon isDisabled={false} className={"btn"} onClick={onShareClick}>
                        <div className={styles.modal__content_share}>
                            <Icon type="copyURL" width={55} height={49} color={"#000"}></Icon>
                            Copy URL
                        </div>
                    </Button>

                    <Button icon isDisabled={false} className={"btn"} onClick={onMessageClick}>
                        <div className={styles.modal__content_message}>
                            <Icon type="messenger" width={55} height={49} color={"#000"}></Icon>
                            Messenger
                        </div>
                    </Button>
                </div>
        </div>
    )
}

export { ModalShare }