import React from "react";

import styles from "./resultItem.module.css";

interface ResultItemProps {
  id: string;
  title?: string;
  subtitle?: string;
  image?: string;
  idProducts: number[];
  onClick?: (id: string) => void;
  setClickItem?: (isClickable: boolean) => void;
}

const ResultItem: React.FC<ResultItemProps> = (props: ResultItemProps) => {
  const { title, subtitle, image, id, onClick, idProducts, setClickItem } =
    props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setClickItem(true);
    onClick(id);
  };
  const product = idProducts
    ? idProducts.find((productId) => String(productId) === id)
    : 0;
  // TODO remove 0 and (meccabeauty.co.nz)
  return (
    <button
      disabled={!!product}
      onClick={handleClick}
      className={styles.search__item}
    >
      <p className={styles.search__title}>{`${title} `}</p>
      <p className={styles.search__subtitle}>
        {` - ${subtitle} (meccabeauty.co.nz)`}
      </p>
    </button>
  );
};

export { ResultItem };
