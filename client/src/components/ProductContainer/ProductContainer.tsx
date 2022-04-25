import { Panel } from '../UIKit';
import { ProductItem } from './ProductItem';

import { productsMock } from '../../shared/mocks/productmock';

import styles from './productContainer.module.css';
import { ProductContent } from '../../shared/types';

const ProductContainer: React.FC<ProductContent> = (props: ProductContent) => {
  const {
    itemsIdList, currentItemId, filter, isReviewShown = false,
  } = props;

  const productList = productsMock.filter((item) => itemsIdList.includes(item.id));

  if (productList.length === 1) {
    return (
      <>
        {productList.map((item) => (
          <Panel key={item.id} className={styles.products__panel}>
            <ProductItem id={item.id} filter={filter} />
          </Panel>
        ))}

        {isReviewShown && (
        <Panel padding={16}>
          <h3>Review</h3>
          {productsMock.find((item) => item.id === currentItemId).Details}
        </Panel>
        )}
      </>

    );
  } return (
    <>
      {productList.map((item) => (
        <Panel key={item.id} className={styles.products__panel}>
          <ProductItem id={item.id} filter={filter} />
        </Panel>
      ))}
    </>
  );
};

export default ProductContainer;
