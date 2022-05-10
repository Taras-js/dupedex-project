/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useCallback, useEffect, useRef } from "react";

import ModalComponent from "./modalComponent";

import { Icon } from "../Icon";
import { ResultItem } from "./ResultItem";

import styles from "./search.module.css";

export interface Results {
  id?: number;
  title?: string;
  subtitle?: string;
  image?: string;
}

export interface SearchProps {
  placeholder?: string;
  isOpen?: boolean;
  results?: Results[];
  withDebounce: Function;
  idProducts?: number[];
  onChange?: (e: React.ChangeEvent) => void;
  onClickResult?: (number) => void;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const {
    results,
    placeholder,
    withDebounce,
    onChange,
    onClickResult,
    isOpen = false,
    idProducts,
  } = props;

  const optimized = useCallback(withDebounce(onChange), []);
  const {
    clickedOutside,
    myRef,
    handleClickInside,
    clickItem,
    setClickItem,
    setClickedOutside,
  } = ModalComponent();

  const inputRef = useRef(null);

  useEffect(() => {
    setClickedOutside(false);
    inputRef.current.value = "";
  }, [clickItem]);

  useEffect(() => {
    setClickItem(false);
    inputRef.current.focus();
    handleClickInside();
  }, [isOpen]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleClickInside}
      ref={myRef}
      className={styles.search}
      role="button"
    >
      <form className={styles.search__form}>
        <input
          ref={inputRef}
          className={styles.search__input}
          type="text"
          placeholder={placeholder}
          onChange={optimized}
        />
        <Icon type="search" width={25} height={25} />
      </form>
      <div
        className={
          clickedOutside
            ? styles.search__dropdown
            : styles.search__dropdown_passive
        }
      >
        {results
          && results.map((result) => (
            <ResultItem
              onClick={onClickResult}
              key={result.id}
              title={result.title}
              subtitle={result.subtitle}
              image={result.image}
              id={result.id}
              idProducts={idProducts}
              setClickItem={setClickItem}
            />
          ))}
      </div>
    </div>
  );
};
export default Search;
