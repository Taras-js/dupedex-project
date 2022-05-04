import { Panel, ScrollPanel } from "../UIKit";
import { ProductItem } from "./ProductItem";
import { ReviewItem } from './ReviewItem';

import { ProductContent } from "../../shared/types";
import { productsMock } from "../../shared/mocks/productmock";

import styles from './productContainer.module.css';
import AddProductButton from "../../features/ProductButton/AddProductButton";

const ProductContainer: React.FC<ProductContent> = (props: ProductContent) => {
  const {
    itemsIdList, currentItemId, filter, isReviewShown = false,
  } = props;

  const productList = productsMock.filter((item) => itemsIdList.includes(item.id));
  const MAX_PRODUCT_IN_CONTAINER = productList.length < 4;
  if (productList.length === 1) {
    return (

      <div className={styles.product__container}>
        {productList.map((item) => (
          <ScrollPanel key={item.id} className={styles.products__panel}>
            <ProductItem id={item.id} filter={filter} />
          </ScrollPanel>
        ))}

        {isReviewShown && (
          <Panel padding={16} className={styles.products__panel}>
            <ReviewItem id={currentItemId} />
          </Panel>
        )}
        {MAX_PRODUCT_IN_CONTAINER && <AddProductButton />}
      </div>
    );
  } return (
    <div className={styles.product__container}>
      {productList.map((item) => (
        <ScrollPanel key={item.id} className={styles.products__panel}>
          <ProductItem isShowClose id={item.id} filter={filter} />
        </ScrollPanel>
      ))}
      {MAX_PRODUCT_IN_CONTAINER && <AddProductButton />}
    </div>
  );
};

export default ProductContainer;
