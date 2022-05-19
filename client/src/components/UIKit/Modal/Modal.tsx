import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch } from '../../../app/hooks';
import { Button } from '../Button';
import { Icon } from '../Icon';

import styles from './modal.module.css';
import { toggleModal } from './modalSlice';

interface ModalProps {
  children: React.ReactNode
  onClose?: () => void
  isUnclosable?: boolean
}

const Modal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children, onClose, isUnclosable } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target === ref.current) {
        onClose?.();
      }
    }

    if (!isUnclosable) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.getElementById('modal__root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <div className={styles.modal__inner}>
        {!isUnclosable ? (
          <div className={styles.modal__exit}>
            <Button
              icon
              isDisabled={false}
              className="btn"
              onClick={() => {
                dispatch(toggleModal());
              }}
            >
              <Icon type="exit" width={24} height={22.5} color="#000" />
            </Button>
          </div>
        ) : null}

        {children}
      </div>
    </div>,
    node,
  );
};

export { Modal };
