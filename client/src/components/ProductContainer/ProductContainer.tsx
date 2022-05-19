/* eslint-disable no-underscore-dangle */
import { cls, getCardSize } from "../../utils/helper";
import { useAppSelector } from "../../app/hooks";
import { toolbarState } from "../ToolbarContainer/toolbarSlice";
import { productsState } from "./productSlice";

import { Panel, Tooltip } from "../UIKit";
import { ProductItem } from "./ProductItem";
import { ReviewItem } from "./ReviewItem";
import { AddProductButton } from "../../features/AddProductButton";

import styles from "./productContainer.module.css";

const ProductContainer: React.FC = () => {
  const {
    idCurrentItem, idItemsOnScreen, filter, isReviewShown,
  } = useAppSelector(toolbarState);
  const products = useAppSelector(productsState);

  const productList = products.filter((item) => idItemsOnScreen.includes(item._id));

  const itemSize = getCardSize(idItemsOnScreen, isReviewShown);

  const containerClass = cls(styles, "product__container", itemSize);
  const panelClass = cls(styles, "products__panel", itemSize);
  const addBtnClass = cls(styles, "products__add_button", itemSize);

  return (
    <div className={containerClass}>
      {productList.map((item) => (
        <Panel key={item.id} className={panelClass}>
          <ProductItem
            id={item._id}
            size={itemSize}
            filter={filter}
            isShowClose={productList.length !== 1}
          />
        </Panel>
      ))}

      {productList.length === 1 && isReviewShown && (
        <Panel className={styles.products__panel}>
          <ReviewItem id={idCurrentItem} />
        </Panel>
      )}

      {productList.length < 4 && (
        <Panel className={addBtnClass}>
          <Tooltip title="Add a new product">
            <AddProductButton />
          </Tooltip>
        </Panel>
      )}
    </div>
  );
};

export default ProductContainer;
