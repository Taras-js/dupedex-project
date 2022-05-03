import { Filter } from "../../../shared/types";
import { getTagStyle } from "../../../utils/getTagStyle";

import { cls } from "../../../utils/helper";
import styles from "./labelItem.module.css";

interface LabelProps {
  label: any;
}

const LabelItem: React.FC<LabelProps> = (props: LabelProps) => {
  const { label } = props;

  const labelItemClass = {
    label__tag: true,
    positive: label[1].tag === Filter.positive,
    negative: label[1].tag === Filter.negative,
    neutral: label[1].tag === Filter.neutral,
    other: label[1].tag === null,
  };

  return (
    <li style={getTagStyle(label)} className={cls(styles, labelItemClass)}>
      <span>{label[1].name}</span>
      <span>
        (
        {
          Number(label[1].count).toFixed(0)
        }
        %)
      </span>
    </li>
  );
};

export default LabelItem;
