/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ProductProps } from '../../interfaces/ProductProps';

import styles from './productItem.module.css';

function ProductItem(props: ProductProps) {
  return (
    <div key={props.id} className={styles.products_item}>
      <a href={props.prod_link}><img className={styles.img_link} src={props.img_link} alt={props.prod_link} /></a>
      <h2>
        {props.brand_name}
      </h2>
      <h4>
        {props.prod_name}
      </h4>
    </div>
  );
}

export default ProductItem;
