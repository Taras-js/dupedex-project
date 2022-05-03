import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Icon, Button } from '../UIKit';
import { Modal } from '../UIKit/Modal';
import { modalState, setModalComponent, toggleModal, setIsUnclosable } from '../UIKit/Modal/modalSlice';

import styles from './header.module.css';
import { modalComponents, modals } from '../../features/modals/helper';

function Header() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(modalState);
  
  const onClickMain = () => {
    console.log('click Main');
  };

  const onClickSignIn = () => {
    console.log('click SignIn');
    dispatch(setModalComponent(modals.ModalLogin));
    dispatch(setIsUnclosable(false)); 
  };

  const onClickSignUp = () => {
    console.log('click SignUp');
  };

  const onClickDarkMode = () => {
    console.log('click DarkMode');
  };

  return (
    <header className={styles.header}>
      <h1 hidden>Dupe.dex - reviews agregator</h1>

      <div className={styles.header__container}>
        <Button icon className={styles.header__logo} onClick={onClickMain}>
          <Icon type="logo" />
        </Button>

        <div className={styles.header__btn_wrapper}>
          <Button large onClick={onClickSignIn}>SIGN IN</Button>
          <Button large outlined onClick={onClickSignUp}>SIGN UP</Button>

          <Button icon className={styles.btn_darkMode} onClick={onClickDarkMode}>
            <Icon type="darkmode" width="50" height="50" color="#000" />
          </Button>
        </div>
      </div>
      {modal.isModalShown && (
        <Modal isUnclosable={modal.isUnclosable} onClose={() => { dispatch(toggleModal())}}>
          {modalComponents[modal.modalComponent]}
        </Modal>
      )}
    </header>
  );
}

export default Header;
