import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children, onClose } = props;

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target === ref.current) {
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.getElementById('modal__root');
  if (!node) return null;

  return ReactDOM.createPortal(
    (
      <div className={styles.modal} ref={ref}>
        <div className={styles.modal__inner}>
          {children}
        </div>
      </div>
    ), node,
  );
};

export { Modal };
