import React from "react";
import styles from "./librarycontainer.module.css";
import TextInput from "../TextInput";
import { LibraryItem } from "./LibraryItem";
import { Button, Icon, ScrollPanel } from "../UIKit";
import { itemsIdListMock } from "../../shared/mocks/consts";

const LibraryContainer = () => (
  <div className={styles.container}>
    <div className={styles.container__wrapper}>
      <Button className={`${styles.menu_button} ${styles.is_active}`}>
        My Library
      </Button>
      <Button className={styles.menu_button}>
        Explore
      </Button>
    </div>

    <div className={styles.container__wrapper}>
      <TextInput placeholder="Search for routines" />
    </div>

    <ScrollPanel padding={8}>
      {itemsIdListMock.map((item) => (
        <LibraryItem key={item} id={item} />
      ))}
    </ScrollPanel>

    <Button
      icon
      className={styles.close_btn}
      onClick={() => {}}
    >
      <Icon type="exit" width={18} height={18} color="var(--color-cross-grey)" />
    </Button>
  </div>
);

export { LibraryContainer };
