import { Filter } from '../../../shared/types';

import { LabelItem } from '../LabelItem';
import styles from './labelList.module.css';

interface LabelProps {
  labels: any;
  filter?: Filter;
  maxQuantity?: number
}

const LabelList: React.FC<LabelProps> = (props: LabelProps) => {
  const { labels, filter, maxQuantity = 10 } = props;

  return (
    <ul className={styles.review_taglist}>
      {labels
        .filter((label) => (
          label[1].count > 1
          && (
            filter === null
            || label[1].tag === filter
          )
        ))
        .filter((label, index) => index < maxQuantity)
        .map((review) => (
          <LabelItem key={review[0]} review={review} />
        ))}
    </ul>
  );
};

export default LabelList;
