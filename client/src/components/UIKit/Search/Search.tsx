import React, {
  useCallback,
} from 'react';
import styles from './Search.module.css';
import { Icon } from '../Icon';
import ModalComponent from './modalComponent';
import ResultItem from './ResultItem';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

export interface Results {
  id?: number;
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

const Search: React.FC<SearchProps> = (props) => {
  const {
    results, placeholder, withDebounce, onChange,
  } = props;

  const dispatch = useDispatch();
  const optimized = useCallback(withDebounce(onChange), []);

  const { clickedOutside, myRef, handleClickInside } = ModalComponent(false);


  const onClick = () => {
    dispatch(getItem)
  } 
  return (
    <div className={styles.search}>
      <form className={styles.search__form}>
        <input
          className={styles.search__input}
          onClick={handleClickInside}
          ref={myRef}
          type="text"
          placeholder={placeholder}
          onChange={optimized}
        />
        <Icon type="search" width={25} height={25} />
      </form>
      <div className={clickedOutside ? styles.search__dropdown : styles.search__dropdown_passive}>
        {results && results.map((result) => (
          <ResultItem key={result.id} title={result.title} subtitle={result.subtitle} image={result.image} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};
export default Search;
