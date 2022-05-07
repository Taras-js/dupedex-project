import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { showItem, removeItem, setCurrentItem } from "../../ToolbarContainer/toolbarSlice";
import { cls, getLabels, getQuantity } from "../../../utils/helper";

import { Button, Icon } from "../../UIKit";
import { LabelList } from "../LabelList";

import { productsMock } from "../../../shared/mocks/productmock";
import { Filter, CardSize } from "../../../shared/types";

import styles from "./productItem.module.css";
import { reviewsState } from "../../../features/Search/productSlice";

interface ProductProps {
  id: number;
  size: CardSize;
  isShowClose?: boolean;
  filter?: Filter;
}

const ProductItem: React.FC<ProductProps> = (props: ProductProps) => {
  const {
    id, size, isShowClose = false, filter,
  } = props;
  const dispatch = useAppDispatch();

  const onSelectProduct = () => {
    dispatch(setCurrentItem(id));
    dispatch(showItem([id]));
  };

  const onCloseSelected = () => {
    dispatch(removeItem(id));
  };
  const reviews = useAppSelector(reviewsState);

  const item = productsMock.find((itemToFind) => itemToFind.id === id);

  const itemReviews = reviews.find((itemToFind) => itemToFind.id === id);
  const labels = itemReviews ? getLabels(itemReviews.reviews) : [];

  const labelQuantity = getQuantity(size);

  const itemClass = cls(styles, "products__item", size);

  return (
    <div key={id} className={itemClass}>
      <button className={styles.products__img} onClick={onSelectProduct}>
        <img src={item.img_link} alt={item.prod_link} />
      </button>

      <div className={styles.products__text}>
        <h3 className={styles.products__heading}>{item.brand_name}</h3>
        <a
          className={styles.products__link}
          target="_blank"
          rel="noreferrer"
          href={item.prod_link}
        >
          (www.meccabeauty.co.nz)
        </a>
        <h4 className={styles.products__description}>{item.prod_name}</h4>
      </div>

      <div className={styles.products__labels}>
        <LabelList labels={labels} filter={filter} size={size} maxQuantity={labelQuantity} />
      </div>

      {isShowClose && (
        <Button icon className={styles.close_btn} onClick={onCloseSelected}>
          <Icon
            type="exit"
            width={18}
            height={18}
            color="var(--color-cross-grey)"
          />
        </Button>
      )}
    </div>
  );
};

export default ProductItem;
