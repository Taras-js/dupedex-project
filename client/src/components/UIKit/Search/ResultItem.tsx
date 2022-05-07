import React from 'react';

import styles from "./resultItem.module.css";

interface ResultItemProps {
  id: number;
  title?: string;
  subtitle?: string;
  image?: string;
  idProducts: number[];
  onClick?: (number)=>void;
  setClickItem?: (boolean) => void;
}

const ResultItem: React.FC<ResultItemProps> = (props: ResultItemProps) => {
  const {
    title, subtitle, image, id, onClick, idProducts, setClickItem,
  } = props;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setClickItem(true);
    onClick(id);
  };
  const product = idProducts
    ? idProducts.find((productId) => productId === id)
    : 0;

  return (
    (
      <button
        disabled={!!product}
        onClick={handleClick}
        className={styles.search__item}
      >
        <p className={styles.search__title}>{`${title} `}</p>
        <p className={styles.search__subtitle}>{` - ${subtitle} (meccabeauty.co.nz)`}</p>
      </button>
    )
  );
};

export default ResultItem;
