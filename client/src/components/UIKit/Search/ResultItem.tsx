import React from 'react';
import styles from './resultItem.module.css';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { AddItem, showItem } from '../../ToolbarContainer/toolbarSlice';
import { productSlice } from '../../../features/Search/productSlice';

interface ResultItemProps {
  id: number;
  title?: string;
  subtitle?: string;
  image?: string;
}

const ResultItem: React.FC<ResultItemProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title, subtitle, image, id,
  } = props;

  const dispatch = useAppDispatch();
  const isAddItemtolist = useAppSelector((state) => state.goods.isAddItemToList);
  const productsIdList = useAppSelector((state) => state.product.itemsIdList);
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAddItemtolist) {
      dispatch(AddItem(id));
      dispatch(productSlice.actions.noSetAddItemToList());
    } else { dispatch(showItem([id])); }
  };
  const product = productsIdList.find((productId) => productId === id);
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
