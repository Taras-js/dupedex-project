import React from "react";
import styles from "./modalShare.module.css";
import { Button, Icon } from "../../../components/UIKit";
import { useAppSelector } from "../../../app/hooks";
import { productState } from "../../../components/ToolbarContainer/toolbarSlice";

const ModalShare: React.FC = () => {
  const product = useAppSelector(productState);

  const onShareClick = () => {
    let domen = window.location.origin + "/products?ids=";
    let urlCopy = product.itemsIdList.reduce(
      (prev, next) => (prev === domen ? prev + next : prev + "%" + next),
      domen
    );
    navigator.clipboard.writeText(urlCopy);

    console.log("onShareClick click");
  };

  const onMessageClick = () => {
    console.log("onMessageClick click");
  };

  return (
    <div className={styles.modal__share}>
      <div className={styles.modal__header}>Share skincare library</div>
      <div className={styles.modal__content}>
        <Button
          icon
          isDisabled={false}
          className={"btn"}
          onClick={onShareClick}
        >
          <div className={styles.modal__content_share}>
            <Icon type="copyURL" width={55} height={49} color={"#000"}></Icon>
            Copy URL
          </div>
        </Button>

        <Button
          icon
          isDisabled={false}
          className={"btn"}
          onClick={onMessageClick}
        >
          <div className={styles.modal__content_message}>
            <Icon type="messenger" width={55} height={49} color={"#000"}></Icon>
            Messenger
          </div>
        </Button>
      </div>
    </div>
  );
};

export { ModalShare };
