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
  const [base_url, setBase_url] = useState("http://dupedex.co");

  useEffect(() => {
    const domain = window.location.origin + "/products?ids=";

    const urlCopy = product.reduce(
      (prev, next) =>
        prev === domain
          ? prev + (toolbar.idItemsOnScreen.includes(next._id) ? next.id : "")
          : toolbar.idItemsOnScreen.includes(next._id)
          ? prev + "%" + next.id
          : prev,
      domain
    );

    setBase_url(urlCopy);
  }, []);

  const onShareClick = () => {
    navigator.clipboard.writeText(base_url);
    dispatch(toggleModal());
  };

  return (
    <div className={styles.modal__share}>
      <div className={styles.modal__header}>Share skincare library</div>
      <div className={styles.modal__content}>
        <Button icon isDisabled={false} className="btn" onClick={onShareClick}>
          <div className={styles.modal__content_share}>
            <Icon type="copyURL" width={55} height={49} color={"#000"} />
            Copy URL
          </div>
        </Button>

        <div className={styles.modal__facebook_button}>
          <FacebookShareButton
            quote={base_url}
            url={"http://dupedex.co"}
            onClick={() => dispatch(toggleModal())}
          >
            <div className={styles.modal__content_message}>
              <Icon type="messenger" width={55} height={49} color={"#000"} />
              Messenger
            </div>
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};

export { ModalShare };
