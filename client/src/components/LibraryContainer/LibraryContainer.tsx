import styles from "./librarycontainer.module.css";
import { LibraryItem } from "./LibraryItem";
import { Button, Icon, ScrollPanel } from "../UIKit";
import { itemsIdLibraryMock } from "../../shared/mocks/consts";
import Search from "../UIKit/Search/Search";
import { libraryMock } from "../../shared/mocks/librarymock";

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
          results={libraryMock}
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

    <Button icon className={styles.close_btn} onClick={() => {}}>
      <Icon
        type="exit"
        width={18}
        height={18}
        color="var(--color-cross-grey)"
      />
    </Button>
  </div>
);

export { LibraryContainer };
