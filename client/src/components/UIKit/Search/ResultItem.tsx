import React from 'react';
import styles from './resultItem.module.css';

interface ResultItemProps {
  id: number;
  title?: string;
  subtitle?: string;
  image?: string;
  idProducts: number[];
  onClick?: (number)=>void;
  setClickItem?: (boolean) => void;
}

const ResultItem: React.FC<ResultItemProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title, subtitle, image, id, onClick, idProducts, setClickItem,
  } = props;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick(id);
    setClickItem(true);
  };
  const product = idProducts.find((productId) => productId === id);
  return (
    (
      <button disabled={!!product} onClick={handleClick} className={styles.search__item}>
        <p className={styles.search__subtitle}>{`${subtitle}`}</p>
        <p className={styles.search__title}>{ `- ${title}`}</p>
      </button>
    )
  );
};

export default ResultItem;
