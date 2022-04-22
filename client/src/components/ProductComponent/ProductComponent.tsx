import React from 'react';

import { Panel } from '../UIKit';
import { ProductItem } from './ProductItem';

import { productsMock } from '../../shared/mocks/productmock';

import styles from './productComponent.module.css';

interface ProductProps {
  isReviewShow? : boolean;
}

const productList = productsMock;

const ProductList = () => (
  <>
    {productList.map((item) => (
      <Panel key={item.id} className={styles.products__panel}>
        <ProductItem id={item.id} />
      </Panel>
    ))}
  </>
);

const ProductComponent = (props: ProductProps) => {
  const { isReviewShow = false } = props;

  if (productList.length === 1) {
    return (
      <>
        <ProductList />

        {isReviewShow && (
        <Panel padding={16}>
          <h3>Review</h3>
          {productList[0].Details}
        </Panel>
        )}
      </>

    );
  } return <ProductList />;
};

export default ProductComponent;
