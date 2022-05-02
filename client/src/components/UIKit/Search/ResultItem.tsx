import React from "react";
import styles from "./resultItem.module.css";
import { useAppDispatch } from "../../../app/hooks";
import { showItem } from "../../ToolbarContainer/toolbarSlice";

interface ResultItemProps {
  id: number;
  title?: string;
  subtitle?: string;
  image?: string;
}

const ResultItem: React.FC<ResultItemProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title,
    subtitle,
    image,
    id,
  } = props;

  const dispatch = useAppDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(showItem([id]));
  };
  return (
    <button onClick={handleClick} className={styles.search__item}>
      {image && <img src={image} alt={title} className={styles.search__title} />}
      <p className={styles.search__subtitle}>{`${subtitle}`}</p>
      <p className={styles.search__title}>{`- ${title}`}</p>
    </button>
  );
};

export default ResultItem;
