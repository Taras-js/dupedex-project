import { Icon } from '../../features/Icon';

import styles from './header.module.css';
import { Button } from '../Button';

function Header() {
  const onClickMain = () => {
    console.log('click Main');
  };

  const onClickSignIn = () => {
    console.log('click SignIn');
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
    </header>
  );
}

export default Header;
