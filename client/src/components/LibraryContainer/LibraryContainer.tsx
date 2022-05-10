import styles from "./librarycontainer.module.css";
import { LibraryItem } from "./LibraryItem";
import { Button, Icon, ScrollPanel } from "../UIKit";
import { itemsIdLibraryMock } from "../../shared/mocks/consts";
import Search from "../UIKit/Search/Search";

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
          results={[]}
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
