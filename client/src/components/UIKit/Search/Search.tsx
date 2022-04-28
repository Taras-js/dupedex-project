import React, {
  useCallback,
} from 'react';
import styles from './Search.module.css';
import { Icon } from '../Icon';
import ModalComponent from './modalComponent';

export interface Results {
  prod_name?: string;
  brand_name?: string;
  image?: string;
}

export interface SearchProps {
  placeholder?: string;
  results?: Results[];
  withDebounce: (Function);
  onChange?: (e: React.ChangeEvent) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder, onChange, results, withDebounce,
}) => {
  const optomizedVersion = useCallback(withDebounce(onChange), []);

  const { clickedOutside, myRef, handleClickInside } = ModalComponent(false);

  return (
    <div className={styles.search}>
      <form className={styles.search__form}>
        <input
          className={styles.search__input}
          onClick={handleClickInside}
          ref={myRef}
          type="text"
          placeholder={placeholder}
          onChange={optomizedVersion}
        />
        <Icon type="search" width={25} height={25} />
      </form>
      <div className={clickedOutside ? styles.search__dropdown : styles.search__dropdown_passive}>
        {results && results.map((result) => (
          <div className={styles.search__item}>
            <p className={styles.search__prod_name}>{`${result.prod_name}`}</p>
            <p className={styles.search__brand_name}>{ `- ${result.brand_name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
