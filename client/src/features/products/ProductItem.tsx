/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from './Products.module.css';

interface ProductProps {
  _id: {
    $oid: string;
  };
  id: number,
  brand_name: string,
  prod_name: string,
  prod_link: string,
  price: string,
  category: string,
  img_link: string,
  Benefits: string,
  Details: string,
  Usage: string,
  Ingredients: string,
}

function Products(props: ProductProps) {
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

export default Products;
