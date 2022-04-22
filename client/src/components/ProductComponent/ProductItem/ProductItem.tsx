import React from 'react';
import { productsMock } from '../../../shared/mocks/productmock';

import styles from './productItem.module.css';

interface ProductProps {
  id: number;
}

function ProductItem(props: ProductProps) {
  const { id } = props;

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
    </div>
  );
}

export default ProductItem;
