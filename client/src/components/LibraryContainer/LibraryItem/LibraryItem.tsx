import React, { useState, useRef, useEffect } from "react";
import { libraryMock } from "../../../shared/mocks/librarymock";
import { Button, Icon, Panel } from "../../UIKit";
import styles from "./libraryitem.module.css";

interface LibraryItemProps {
  id: number;
}

const LibraryItem = (props: LibraryItemProps) => {
  const { id } = props;
  const items = libraryMock.find((item) => item.id === id);

  const [title, setTitle] = useState(items.title);
  const [isEdit, setIsEdit] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(
    () => {
      if (isEdit) {
        inputRef.current.focus();
      }
    },

    [isEdit],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTitle(newValue);
  };

  const handleBlur = () => {
    setIsEdit(false);
  };

  const handleClick = () => {
    setIsEdit(true);
  };

  return (
    <Panel className={styles.library__pack}>
      <div className={styles.content_wrapper}>
        {items.products.map((item) => (
          <Panel className={styles.library__item}>
            <img
              className={styles.item__image}
              src={item.img_link}
              alt={item.prod_link}
            />
          </Panel>
        ))}
      </div>

      <div className={styles.title_wrapper}>
        {
          isEdit
            ? <input className={styles.title_input} value={title} onChange={handleChange} onBlur={handleBlur} ref={inputRef} />
            : <Button className={styles.title_button} onClick={handleClick}>{title}</Button>
        }
        <Button icon>
          <Icon type="ellipsis" width={32} />
        </Button>
      </div>
    </Panel>
  );
};

export { LibraryItem };
