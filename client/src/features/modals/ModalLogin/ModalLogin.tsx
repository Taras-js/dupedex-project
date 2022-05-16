import React, { useState } from "react";
import styles from "./modalLogin.module.css";
import { Button } from "../../../components/UIKit";

const ModalLogin: React.FC = () => {
  const [input, setInput] = useState(true);
  const [phone, setPhone] = useState(null);
  const [mobilePin, setMobilePin] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccessMessage] = useState("");
  const [pinClient, setPinClient] = useState("");
  const onMobileLoginClick = () => {
    setInput(false);
  };
  const onEmailLoginClick = () => {};
  const sendSms = async (event) => {
    setError("");
    setSuccessMessage("");
    await clickSend(phone);
    setPhone("");
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
        if (res.message) {
          setError(res.message);
        } else {
          setMobilePin(res.mobilePin);
          setSuccessMessage(res.status);
          console.log(res.mobilePin);
        }
      });
  }

  let textSendMessageButton = (
    <div className={styles.modal__content_mobile}>Send message</div>
  );
  const textRegistrationButton = (
    <div className={styles.modal__content_mobile}>Continue with mobile </div>
  );
  if (success) {
    textSendMessageButton = (
      <div className={styles.modal__content_mobile}> Сonfirm registration</div>
    );
  }
  return (
    <>
      <div className={styles.modal__login}>
        <div className={styles.modal__header}>Welcome!</div>
        <p className={styles.modal__text}>
          Sign up with mobile <br /> or another service to continue.{" "}
        </p>
        {mobilePin === pinClient ? (
          <div className={styles.modal__registration}>
            <h2>
              Congratulations, you have successfully registered on Dupedex.app
            </h2>
          </div>
        ) : (
          <div className={styles.modal__content}>
            {success ? (
              <input
                className={styles.modal__container}
                maxLength={4}
                autoFocus
                value={pinClient}
                placeholder="Please enter code from sms"
                onChange={(e) => {
                  setPinClient(e.target.value);
                }}
              />
            ) : (
              ""
            )}
            <div className={styles.modal__wrapper}>
              {success ? <h3>{success}</h3> : ""}

              {error ? <h3>{error}</h3> : ""}
            </div>

            {input ? (
              <>
                <Button
                  icon
                  isDisabled={true}
                  className={"btn"}
                  onClick={onEmailLoginClick}
                >
                  <div className={styles.modal__content_email}>
                    {" "}
                    Continue with email (coming soon)
                  </div>
                </Button>
                <Button
                  icon
                  isDisabled={false}
                  className={"btn"}
                  onClick={onMobileLoginClick}
                >
                  {textRegistrationButton}
                </Button>
              </>
            ) : (
              <>
                <input
                  className={styles.modal__container}
                  maxLength={14}
                  autoFocus
                  value={phone}
                  placeholder="Please enter number phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Button
                  icon
                  isDisabled={false}
                  className={"btn"}
                  onClick={sendSms}
                >
                  {textSendMessageButton}
                </Button>
              </>
            )}
          </div>
        )}

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
