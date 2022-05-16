import React, { useEffect, useState } from "react";
import styles from "./modalShare.module.css";
import { Button, Icon } from "../../../components/UIKit";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { FacebookShareButton } from "react-share";
import { productsState } from "../../../components/ProductContainer/productSlice";
import { toolbarState } from "../../../components/ToolbarContainer/toolbarSlice";
import { toggleModal } from "../../../components/UIKit/Modal/modalSlice";

const ModalShare: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productsState);
  const toolbar = useAppSelector(toolbarState);
  const [copyURL, setCopyURL] = useState("http://dupedex.co");

  useEffect(() => {
    const domen = window.location.origin + "/products?ids=";

    const urlCopy = product.reduce(
      (prev, next) =>
        prev === domen
          ? prev + (toolbar.idItemsOnScreen.includes(next._id) ? next.id : "")
          : toolbar.idItemsOnScreen.includes(next._id)
          ? prev + "%" + next.id
          : prev,
      domen
    );

    setCopyURL(urlCopy);
  }, []);

  const onShareClick = () => {
    navigator.clipboard.writeText(copyURL);
    dispatch(toggleModal());
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

        <div className={styles.modal__facebook_button}>
          <FacebookShareButton
            quote={copyURL}
            url={"http://dupedex.co"}
            onClick={() => dispatch(toggleModal())}
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
        </div>
      </div>
    </div>
  );
};

export { ModalShare };
