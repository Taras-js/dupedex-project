import { LibraryItem } from "./LibraryItem";
import { Button, ScrollPanel, Search } from "../UIKit";

import { itemsIdLibraryMock } from "../../shared/mocks/consts";

import styles from "./librarycontainer.module.css";

const LibraryContainer = () => (
  <div className={styles.container}>
    <div className={styles.container__wrapper}>
      <Button className={`${styles.menu_button} ${styles.is_active}`}>
        My Library
      </Button>
      <Button className={styles.menu_button}>Explore</Button>
    </div>

    <div className={styles.container__wrapper}>
      <div className={styles.search__wrapper}>
        <Search
          placeholder="Search for routines"
          withDebounce={() => {}}
        />
      </div>
    </div>

    <ScrollPanel padding={8}>
      {itemsIdLibraryMock.map((item) => (
        <LibraryItem key={item} id={item} />
      ))}
    </ScrollPanel>
  </div>
);

export { LibraryContainer };
