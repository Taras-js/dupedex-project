import { useAppDispatch } from "../../../app/hooks";
import { productsMock } from "../../../shared/mocks/productmock";
import { Filter } from "../../../shared/types";
import { getReviews } from "../../../utils/helper";
import { showItem } from "../../ToolbarContainer/toolbarSlice";

import styles from "./productItem.module.css";

interface ProductProps {
  id: number;
  filter?: Filter;
}

const ProductItem: React.FC<ProductProps> = (props: ProductProps) => {
  const { id, filter } = props;
  const dispatch = useAppDispatch();
  const onSelectProduct = () => {
    dispatch(showItem([id]));
  };

  const item = productsMock.find((itemToFind) => itemToFind.id === id);

  const reviews = getReviews(item.reviews);

  return (
    <button key={id} className={styles.products__item} onClick={onSelectProduct}>
      <a href={item.prod_link}>
        <img
          className={styles.img__link}
          src={item.img_link}
          alt={item.prod_link}
        />
      </a>
      <h3 className={styles.heading}>{item.brand_name}</h3>
      <h4 className={styles.heading}>{item.prod_name}</h4>
      <h4 className={styles.heading}>
        {filter}
        reviews:
      </h4>
      {reviews
        .filter((review) => review[1] > 1)
        .map((review) => (
          <div>
            <span>{review[0]}</span>
            {": "}
            <span>{Number(review[1]).toFixed(2)}</span>
          </div>
        ))}
      other:
      {reviews
        .filter((review) => review[1] < 1)
        .map((review) => review[1])
        .reduce((acc, value) => acc + value)
        .toFixed(2)}

    </button>
  );
};

export default ProductItem;
