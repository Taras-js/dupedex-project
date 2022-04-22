import React from 'react';

import { productsMock } from '../../shared/mocks/productmock';
import { ProductItem } from './ProductItem';
import { Panel } from '../UIKit/Panel';

import styles from './productComponent.module.css';

const productList = productsMock;

const ProductList = () => (
  <>
    {productList.map((item) => (
      <Panel key={item.id} className={styles.products__panel}>
        <ProductItem
          id={item.id}
          prodLink={item.prodLink}
          imgLink={item.imgLink}
          brandName={item.brandName}
          prodName={item.prodName}
        />
      </Panel>
    ))}
  </>
);

const ProductComponent = () => {
  if (productList.length === 1) {
    return (
      <>
        <ProductList />
        <Panel padding={16}>
          <h3>Review</h3>
          {productList[0].Details}
        </Panel>
      </>

    );
  } return <ProductList />;
};

export default ProductComponent;
