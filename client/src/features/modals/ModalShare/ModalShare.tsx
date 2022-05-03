import React from 'react'
import styles from './modalShare.module.css'
import { Button, Icon } from '../../../components/UIKit'

const ModalShare: React.FC = () => {
  const onShareClick = () => {
    console.log('onShareClick click')
  }

  const onMessageClick = () => {
    console.log('onMessageClick click')
  }

  return (
    <div className={styles.modal__share}>
      <div className={styles.modal__header}>Share skincare library</div>
      <div className={styles.modal__content}>
        <Button
          icon
          isDisabled={false}
          className={'btn'}
          onClick={onShareClick}
        >
          <div className={styles.modal__content_share}>
            <Icon type="copyURL" width={55} height={49} color={'#000'}></Icon>
            Copy URL
          </div>
        </Button>

        <Button
          icon
          isDisabled={false}
          className={'btn'}
          onClick={onMessageClick}
        >
          <div className={styles.modal__content_message}>
            <Icon type="messenger" width={55} height={49} color={'#000'}></Icon>
            Messenger
          </div>
        </Button>
      </div>
    </div>
  )
}

export { ModalShare }
