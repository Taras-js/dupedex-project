/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, {
  useCallback, useEffect, useRef, useState,
} from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setSearchBarBlurred } from "../../ToolbarContainer/toolbarSlice";

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
  propIsFocused?: boolean;
  results?: Results[];
  withDebounce: Function;
  idProducts?: string[];
  // TODO remove idProducts, use disabled in results
  onChange?: (e: React.ChangeEvent) => void;
  onClickResult?: (number) => void;
  resetSearch?: () => void;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const {
    results,
    placeholder,
    withDebounce,
    onChange,
    onClickResult,
    propIsFocused = false,
    idProducts,
    resetSearch,
  } = props;

  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const [isFocused, setIsFocused] = useState<boolean>(propIsFocused);

  // actions when input blurred
  const setBlur = () => {
    setIsFocused(false);
    dispatch(setSearchBarBlurred());
    inputRef.current.blur();
    inputRef.current.value = "";
    resetSearch();
  };

  // blur input if clicked outside input
  const handleBlur = (e?) => {
    if (inputRef.current !== e.target) setBlur();
    document.removeEventListener("click", handleBlur);
  };

  // focus input and add event listener for click outside
  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.focus();
    document.addEventListener("click", handleBlur);
  };

  // focus input from outside action
  useEffect(() => {
    if (propIsFocused) {
      handleFocus();
      inputRef.current.focus();
    }
  }, [propIsFocused]);

  const optimized = useCallback(withDebounce(onChange), []);

  const searchClass = cls(styles, "search", { search_focused: isFocused });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleFocus}
      ref={divRef}
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

      <div className={styles.search__dropdown}>
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
            />
          ))}
      </div>
    </div>
  );
};
export { Search };
