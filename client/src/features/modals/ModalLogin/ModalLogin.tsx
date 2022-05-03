import React from 'react'
import styles from './modalLogin.module.css'
import { Button } from '../../../components/UIKit'

const ModalLogin: React.FC = () => {
  const onMobileLoginClick = () => {
    console.log('onShareClick click')
  }

  const onEmailLoginClick = () => {
    console.log('onMessageClick click')
  }
  return (
    <>
      <div className={styles.modal__login}>
        <div className={styles.modal__header}>Welcome!</div>
        <p className={styles.modal__text}>
          Sign up with mobile <br /> or another service to continue.{' '}
        </p>

        <div className={styles.modal__content}>
          <Button
            icon
            isDisabled={false}
            className={'btn'}
            onClick={onEmailLoginClick}
          >
            <div className={styles.modal__content_email}>
              Continue with email (coming soon)
            </div>
          </Button>
          <Button
            icon
            isDisabled={false}
            className={'btn'}
            onClick={onMobileLoginClick}
          >
            <div className={styles.modal__content_mobile}>
              Continue with mobile
            </div>
          </Button>
        </div>

        <p className={styles.modal__text}>
          By continuing, you agree with our{' '}
          <a href={'#'}>
            {' '}
            Terms of <br />
            Service{' '}
          </a>{' '}
          and <a href={'#'}>Privacy Policy</a>.
        </p>
      </div>
    </>
  )
}

export { ModalLogin }
