import React from 'react';

import styles from './productItem.module.css';

interface ProductProps {
  id: number;
  brandName: string;
  prodName: string;
  prodLink: string;
  imgLink: string;
}

function ProductItem(props: ProductProps) {
  const {
    id, brandName, prodName, prodLink, imgLink,
  } = props;

  return (
    <div key={id} className={styles.products__item}>
      <a href={prodLink}><img className={styles.img__link} src={imgLink} alt={prodLink} /></a>
      <h3>
        {brandName}
      </h3>
      <h4>
        {prodName}
      </h4>
    </div>
  );
}

export default ProductItem;
