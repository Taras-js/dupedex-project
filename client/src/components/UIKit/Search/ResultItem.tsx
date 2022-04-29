import React from 'react';
import styles from './resultItem.module.css';

interface ResultItemProps {
  title?: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
}

const ResultItem: React.FC<ResultItemProps> = (props) => {
  const {
    title, subtitle, image, onClick,
  } = props;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  return (
    <button onClick={handleClick} className={styles.search__item}>
      <p className={styles.search__subtitle}>{`${subtitle}`}</p>
      <p className={styles.search__title}>{ `- ${title}`}</p>
    </button>
  );
};

export default ResultItem;
