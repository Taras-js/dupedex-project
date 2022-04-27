import classNames from 'classnames';
import { Filter } from '../../../shared/types';

import styles from './labelItem.module.css';

interface LabelProps {
  labels: any;
  filter?: Filter;
}

const LabelItem: React.FC<LabelProps> = (props: LabelProps) => {
  const { labels, filter } = props;

  return (
    <ul className={styles.review_taglist}>
      {filter === Filter.positive && labels
        .filter((label) => (label[1].count > 1 && label[1].tag === filter))
        .filter((label, index) => index < 10)
        .map((review) => (
          <li key={review[0]} className={classNames(styles.review__tag, styles.positive)}>
            <span>{review[0]}</span>
            <span>
              (
              {Number(review[1].count).toFixed(0)}
              %)
            </span>
          </li>
        ))}

      {filter === Filter.negative && labels
        .filter((label) => (label[1].count > 1 && label[1].tag === filter))
        .filter((label, index) => index < 10)
        .map((review) => (
          <li key={review[0]} className={classNames(styles.review__tag, styles.negative)}>
            <span>{review[0]}</span>
            <span>
              (
              {Number(review[1].count).toFixed(0)}
              %)
            </span>
          </li>
        ))}

      {filter === null && labels
        .filter((label) => (label[1].count > 1))
        .filter((label, index) => index < 10)
        .map((review) => (
          <li
            key={review[0]}
            className={
                classNames(styles.review__tag, {
                  [styles.positive]: review[1].tag === Filter.positive,
                  [styles.negative]: review[1].tag === Filter.negative,
                  [styles.neutral]: review[1].tag === Filter.neutral,
                  [styles.other]: review[1].tag === null,
                })
              }
          >
            <span>{review[0]}</span>
            <span>
              (
              {Number(review[1].count).toFixed(0)}
              %)
            </span>
          </li>
        ))}
    </ul>
  );
};

export default LabelItem;
