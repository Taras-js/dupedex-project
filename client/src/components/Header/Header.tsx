import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Icon, Button } from "../UIKit";
import { Modal } from "../UIKit/Modal";
import {
  Modals,
  modalState,
  setModalComponent,
  toggleModal,
  setIsUnclosable,
} from "../UIKit/Modal/modalSlice";

import styles from "./header.module.css";
import { modalComponents } from "../../features/modals/helper";

function Header() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(modalState);
  const onClickMain = () => {
  };

  const onClickSignIn = () => {
    dispatch(setModalComponent(Modals.ModalLogin));
    dispatch(setIsUnclosable(false));
  };

  const onClickSignUp = () => {
  };

  const onClickDarkMode = () => {
  };

  return (
    <header className={styles.header}>
      <h1 hidden>Dupe.dex - reviews agregator</h1>

      <div className={styles.header__container}>
        <Button icon className={styles.header__logo} onClick={onClickMain}>
          <Icon type="logo" />
        </Button>

        <div className={styles.header__btn_wrapper}>
          <Button large onClick={onClickSignIn}>
            SIGN IN
          </Button>
          <Button large outlined onClick={onClickSignUp}>
            SIGN UP
          </Button>

          <Button
            icon
            className={styles.btn_darkMode}
            onClick={onClickDarkMode}
          >
            <Icon type="darkmode" width="50" height="50" color="#000" />
          </Button>
        </div>
      </div>
      {modal.isModalShown && (
        <Modal
          isUnclosable={modal.isUnclosable}
          onClose={() => {
            dispatch(toggleModal());
          }}
        >
          {modalComponents[modal.modalComponent]}
        </Modal>
      )}
    </header>
  );
}

export default Header;
