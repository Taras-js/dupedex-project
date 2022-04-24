import React, { useCallback } from 'react';
import styles from './Search.module.css';
import {SearchIcon} from '../../assets/icons';

export interface Ioid {
  $oid?: string;
}
export interface Results {
  _d?: Ioid;
  d?: number;
  title?: string;
  subtitle?: string;
  prod_link?: string;
  price?: string;
}

export interface SearchProps {
  placeholder?: string;
  results?: Results[];
  onChange?: (e: React.ChangeEvent) => void;
}

const Search: React.FC<SearchProps> = ({
  placeholder, onChange, results,
}) => {
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optomizedVersion = useCallback(debounce(onChange), []);

  return (
    <div>
      <input
        className={styles.main__input}
        type="text"
        placeholder={placeholder}
        onChange={optomizedVersion}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
