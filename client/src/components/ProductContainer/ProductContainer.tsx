import { Panel } from "../UIKit";
import { ProductItem } from "./ProductItem";
import { ReviewItem } from "./ReviewItem";

import { getCardSize } from "../../utils/helper";
import { useAppSelector } from "../../app/hooks";
import { toolbarState } from "../ToolbarContainer/toolbarSlice";
import { productsState } from "../../features/Search/productSlice";

import styles from "./productContainer.module.css";

const ProductContainer: React.FC = () => {
  const {
    currentItemId, itemsListOnScreen, filter, isReviewShown,
  } = useAppSelector(toolbarState);
  const { products } = useAppSelector(productsState);

  const productList = products.filter((item) => itemsListOnScreen.includes(item.id));

  const itemSize = getCardSize(itemsListOnScreen, isReviewShown);

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
          <ReviewItem id={currentItemId} />
        </Panel>
      )}
    </div>
  );
};

export default ProductContainer;
