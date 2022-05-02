import { Filter } from '../../../shared/types';
import { getTagStyle } from '../../../utils/getTagStyle';

import { cls } from "../../../utils/helper";
import styles from './labelItem.module.css';

interface LabelProps {
  review: any;
}

const LabelItem: React.FC<LabelProps> = (props: LabelProps) => {
  const { review } = props;

  const labelItemClass = {
    review__tag: true,
    positive: review[1].tag === Filter.positive,
    negative: review[1].tag === Filter.negative,
    neutral: review[1].tag === Filter.neutral,
    other: review[1].tag === null,
  };

  return (
    <li style={getTagStyle(review)} className={cls(styles, labelItemClass)}>
      <span>{review[0]}</span>
      <span>
        (
        {Number(review[1].count).toFixed(0)}
        %)
      </span>
    </li>
  );
};

export default LabelItem;
