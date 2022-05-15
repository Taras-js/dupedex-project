import React, { useState } from "react";
import styles from "./modalLogin.module.css";
import { Button } from "../../../components/UIKit";

const ModalLogin: React.FC = () => {
  const [input, setInput] = useState(true);
  const [phone, setPhone] = useState(null);
  const [mobilePin, setMobilePin] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccessMessage] =useState(null);
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
    height: 59,
  };
  const onEmailLoginClick = () => {
    console.log("onMessageClick click");
  };
  const sendSms = async () => {
    await clickSend(phone)

  };
  function clickSend(payload) {
    return fetch("/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        payload,
      }),
    })
        .then((response) => response.json())
        .then((res) => {
          if(res.message) {
            setError(res.message)
          } else {
            setMobilePin(res.mobilePin)
            setSuccessMessage(res.status)
            console.log(res.mobilePin)

          }
          }

    );

  }

  return (
    <>
      <div className={styles.modal__login}>
        <div className={styles.modal__header}>Welcome!</div>
        <p className={styles.modal__text}>
          Sign up with mobile <br /> or another service to continue.{" "}
        </p>

        <div className={styles.modal__content}>
          {success
              ? <h3>{success}</h3>
              : ''
          }

          {error
          ? <h3>{error}</h3>
              : ''
          }
          {input ? (
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
              >
                <div className={styles.modal__content_mobile}>
                  Continue with mobile
                </div>
              </Button>
            </>
          ) : (
            <>
              <input
                style={container}
                maxLength={14}
                autoFocus
                placeholder="Please enter number phone"
                onChange={(e) => {
                  setPhone(e.target.value)
                  if(mobilePin) {
                    setPhone(null)
                  }
                }}
              />
              <Button
                icon
                isDisabled={false}
                className={"btn"}
                onClick={sendSms}
              >
                <div className={styles.modal__content_mobile}>Send message</div>
              </Button>
            </>
          )}
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

export {ModalLogin};
