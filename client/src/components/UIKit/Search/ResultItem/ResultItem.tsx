import React from "react";

import styles from "./resultItem.module.css";

interface ResultItemProps {
  id: string;
  title?: string;
  subtitle?: string;
  image?: string;
  idProducts: string[];
  onClick?: (id: string) => void;
}

const ResultItem: React.FC<ResultItemProps> = (props: ResultItemProps) => {
  const {
    title, subtitle, image, id, onClick, idProducts,
  } = props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick(id);
  };

  const product = idProducts
    ? idProducts.find((productId) => String(productId) === id)
    : 0;
  // TODO remove 0
  return (
    <button
      disabled={!!product}
      onClick={handleClick}
      className={styles.search__item}
    >
      <p className={styles.search__title}>{`${title} `}</p>
      <p className={styles.search__subtitle}>
        {` - ${subtitle}`}
      </p>
    </button>
  );
};

export { ResultItem };
