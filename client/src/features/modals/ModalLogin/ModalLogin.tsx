import React, {useState} from "react";
import styles from "./modalLogin.module.css";
import { Button } from "../../../components/UIKit";

const ModalLogin: React.FC = () => {
  const [input, setInput] = useState(true)
  const onMobileLoginClick = () => {
    setInput(false);
  };
  const container = {
    padding: 12,
    marginBottom: 10,
    borderRadius: 7,
    background: "rgba(255, 195, 200, 1)",
    textAlign: "center",
    width: 324,
    height: 59
  }
  const onEmailLoginClick = () => {
    console.log("onMessageClick click");
  };
  const sendSms = () => {
    console.log("send Sms");
  };

  return (
    <>
      <div className={styles.modal__login}>
        <div className={styles.modal__header}>Welcome!</div>
        <p className={styles.modal__text}>
          Sign up with mobile <br /> or another service to continue.{" "}
        </p>

        <div className={styles.modal__content}>
          {input
          ?
              <>
                <Button
                    icon
                    isDisabled={true}
                    className={"btn"}
                    onClick={onEmailLoginClick}
                >
                  <div className={styles.modal__content_email}>
                    Continue with email (coming soon)
                  </div>
                </Button>
                <Button
                    icon
                    isDisabled={false}
                    className={"btn"}
                    onClick={onMobileLoginClick}
                ><div className={styles.modal__content_mobile}>
                  Continue with mobile
                </div>
                </Button>
              </>
                :
              <>
                <input
                    style={container}
                    maxLength={14}
                />
                <Button
                    icon
                    isDisabled={false}
                    className={"btn"}
                    onClick={sendSms}
                ><div className={styles.modal__content_mobile}>
                  Send message
                </div>
                </Button>
              </>
          }
        </div>
        <p className={styles.modal__text}>
          By continuing, you agree with our{" "}
          <a href={"#"}>
            {" "}
            Terms of <br />
            Service{" "}
          </a>{" "}
          and <a href={"#"}>Privacy Policy</a>.
        </p>
      </div>
    </>
  );
};

export { ModalLogin };
