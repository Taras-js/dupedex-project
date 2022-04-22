import React from 'react';
import { productsMock } from '../../../shared/mocks/productmock';
import { FilterType } from '../../../shared/types';

import styles from './productItem.module.css';

interface ProductProps {
  id: number;
  filter?: FilterType;
}

function ProductItem(props: ProductProps) {
  const { id, filter } = props;

  const item = productsMock.find((itemToFind) => itemToFind.id === id);

  return (
    <div key={id} className={styles.products__item}>
      <a href={item.prodLink}><img className={styles.img__link} src={item.imgLink} alt={item.prodLink} /></a>
      <h3>
        {item.brandName}
      </h3>
      <h4>
        {item.prodName}
      </h4>

      <h4>
        some
        {' '}
        {filter}
        {' '}
        reviews
      </h4>
    </div>
  );
}

export default ProductItem;
