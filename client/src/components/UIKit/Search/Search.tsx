import React, { useCallback } from 'react';
import styles from './Search.module.css';
import { Icon } from '../Icon';

export interface Results {
  title?: string;
  subtitle?: string;
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

  return (
    <div className={styles.search_block}>
      <input
        className={styles.search_block__input}
        type="text"
        placeholder={placeholder}
        onChange={optomizedVersion}
      />
      <Icon type="search" width={15} height={15} />
    </div>
  );
};

export default Search;
