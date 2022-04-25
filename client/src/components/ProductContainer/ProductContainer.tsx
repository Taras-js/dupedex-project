import { Panel } from '../UIKit';
import { ProductItem } from './ProductItem';

import { productsMock } from '../../shared/mocks/productmock';

import styles from './productContainer.module.css';
import { ProductContent } from '../../shared/types';
import { ReviewItem } from './ReviewItem';

const ProductContainer: React.FC<ProductContent> = (props: ProductContent) => {
  const {
    itemsIdList, currentItemId, filter, isReviewShown = false,
  } = props;

  const productList = productsMock.filter((item) => itemsIdList.includes(item.id));

  if (productList.length === 1) {
    return (
      <div className={styles.product__container}>
        {productList.map((item) => (
          <Panel key={item.id} className={styles.products__panel}>
            <ProductItem id={item.id} filter={filter} />
          </Panel>
        ))}

        {isReviewShown && (
        <Panel padding={16} className={styles.products__panel}>
          <ReviewItem id={currentItemId} />
        </Panel>
        )}
      </div>

    );
  } return (
    <div className={styles.product__container}>
      {productList.map((item) => (
        <Panel key={item.id} className={styles.products__panel}>
          <ProductItem isShowClose id={item.id} filter={filter} />
        </Panel>
      ))}
    </div>
  );
};

export default ProductContainer;
