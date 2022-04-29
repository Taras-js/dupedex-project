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

  //function to apply color for tag
  const fillTagBackground = (review:string, score:number):string => {
    let alpha;
    let re = /\((.*?)[\)|\/]/g;
    let checkMark = re.exec(review);
    let mark = !checkMark ? "other" : checkMark[1] ;

    enum Marks {
      positive = "28, 191, 96",
      negative = "251, 120, 142",
      neutral = "254, 226, 148",
      other = "240, 240, 240"
    }

    switch (true) {
      case(mark === "other" || !Marks[mark]): alpha = 1; break;
      case(score > 13): alpha = 1; break;
      case(score > 7): alpha = 0.75; break;
      case(score > 5): alpha = 0.55; break;
      case(score > 3): alpha = 0.35; break;
      case(score > 0): alpha = 0.2; break;
    }
    return `rgba(${ !Marks[mark] ? Marks["other"] : Marks[mark] }, ${alpha})`
  }

  return (
    <div key={id} className={styles.products__item}>
      <a href={item.prod_link}><img className={styles.img__link} src={item.img_link} alt={item.prod_link} /></a>
      <h3 className={styles.heading}>
        {item.brand_name}
      </h3>
      <h4 className={styles.heading}>
        {item.prod_name}
      </h4>

      <h4 className={styles.heading}>
        {filter}
        reviews:
      </h4>
      {reviews
        .filter((review) => (review[1] > 1))
        .map((review) => (
          <div style={{backgroundColor: fillTagBackground(review[0], Number(review[1])), padding: "8px 12px", borderRadius: "9px", margin: "5px", minWidth: "160px", textAlign: "center"}}>
            <span>{review[0]}</span>
            {': '}
            <span>{Number(review[1]).toFixed(2)}</span>
          </div>
        ))}
      other:
      {reviews
        .filter((review) => (review[1] < 1))
        .map((review) => review[1])
        .reduce((acc, value) => acc + value)
        .toFixed(2)}

    </div>
  );
}

export default ProductItem;
