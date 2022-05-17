/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useCallback, useEffect, useRef } from "react";

import ModalComponent from "./modalComponent";

import { Icon } from "../Icon";
import { ResultItem } from "./ResultItem";

import { cls } from "../../../utils/helper";
import styles from "./search.module.css";

export interface Results {
  id?: string;
  title?: string;
  subtitle?: string;
  image?: string;
}

export interface SearchProps {
  placeholder?: string;
  isFocused?: boolean;
  results?: Results[];
  withDebounce: Function;
  idProducts?: number[];
  // TODO remove idProducts, use disabled in results
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
    isFocused = false,
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
    handleFocus,
  } = ModalComponent();

  const inputRef = useRef<HTMLInputElement>(null);

  const resetSearch = () => {
    setClickedOutside(false);
    inputRef.current.value = "";
  };

  useEffect(() => {
    if (isFocused) {
      setClickItem(false);
      inputRef.current.focus();
      handleClickInside();
      return;
    }
    resetSearch();
  }, [isFocused]);

  useEffect(() => {
    console.log(inputRef.current.value);
    resetSearch();
  }, [clickItem, inputRef]);

  const searchClass = cls(styles, "search", { search_focused: isFocused });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleFocus}
      ref={myRef}
      className={searchClass}
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
        {results &&
          results.map((result) => (
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
export { Search };
