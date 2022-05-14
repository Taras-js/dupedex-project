import { Panel } from "../UIKit";
import { ProductItem } from "./ProductItem";
import { ReviewItem } from "./ReviewItem";

import { ProductContent } from "../../shared/types";
import { productsMock } from "../../shared/mocks/productmock";

import styles from "./productContainer.module.css";
import { getCardSize } from "../../utils/helper";

const ProductContainer: React.FC<ProductContent> = (props: ProductContent) => {
  const {
    itemsIdList, currentItemId, filter, isReviewShown = false,
  } = props;

  const productList = productsMock.filter((item) => itemsIdList.includes(item.id));

  const itemSize = getCardSize(itemsIdList, isReviewShown);

  return (
    <div className={styles.product__container}>
      {productList.map((item) => (
        <Panel key={item.id} className={styles.products__panel}>
          <ProductItem
            id={item.id}
            size={itemSize}
            filter={filter}
            isShowClose={productList.length !== 1}
          />
        </Panel>
      ))}

      {productList.length === 1 && isReviewShown && (
        <Panel padding={16} className={styles.products__panel}>
          <ReviewItem id={currentItemId}/>
        </Panel>
      )}
    </div>
  );
};

export default ProductContainer;
