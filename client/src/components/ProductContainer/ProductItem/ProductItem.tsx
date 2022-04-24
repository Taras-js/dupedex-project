import { productsMock } from '../../../shared/mocks/productmock';
import { Filter } from '../../../shared/types';
import { getReviews } from '../../../utils/helper';

import styles from './productItem.module.css';

interface ProductProps {
  id: number;
  filter?: Filter;
}

function ProductItem(props: ProductProps) {
  const { id, filter } = props;

  const item = productsMock.find((itemToFind) => itemToFind.id === id);

  const reviews = getReviews(item.reviews);

  return (
    <div key={id} className={styles.products__item}>
      <a href={item.prod_link}><img className={styles.img__link} src={item.img_link} alt={item.prod_link} /></a>
      <h3>
        {item.brand_name}
      </h3>
      <h4>
        {item.prod_name}
      </h4>

      <h4>
        {filter}
        reviews:
      </h4>
      {reviews.map((review) => (
        <div>
          <span>{review[0]}</span>
          {' '}
          <span>{Number(review[1]).toFixed(2)}</span>
        </div>
      ))}

    </div>
  );
}

export default ProductItem;
