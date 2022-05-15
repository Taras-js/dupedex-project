import React, { useEffect, useState } from "react";
import styles from "./modalShare.module.css";
import { Button, Icon } from "../../../components/UIKit";
import { useAppSelector } from "../../../app/hooks";
import { FacebookShareButton } from "react-share";
import {productsState} from "../../../components/ProductContainer/productSlice";

const ModalShare: React.FC = () => {
  const product = useAppSelector(productsState);
  const [copyURL, setCopyURL] = useState("http://dupedex.co")

  useEffect(() => {
    const domen = window.location.origin + "/products?ids=";
    const urlCopy = product.reduce(
      (prev, next) => (prev === domen ? prev + next : prev + "%" + next),
      domen
    );
    setCopyURL(urlCopy)
  }, [])

  const onShareClick = () => {
    let domen = window.location.origin + "/products?ids=";
    let urlCopy = product.reduce(
      (prev, next) => (prev === domen ? prev + next : prev + "%" + next),
      domen
    );
    navigator.clipboard.writeText(urlCopy);
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
        >
          <FacebookShareButton
            quote={copyURL}
            url={"http://dupedex.co"}
          >
            <div className={styles.modal__content_message}>
              <Icon
                type="messenger"
                width={55}
                height={49}
                color={"#000"}
              ></Icon>
              Messenger
            </div>
          </FacebookShareButton>
        </Button>
      </div>
    </div>
  );
};

export { ModalShare };
