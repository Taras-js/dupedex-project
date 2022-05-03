import { Filter, CardSize } from "../../../shared/types";
import { cls } from "../../../utils/helper";

import { LabelItem } from "../LabelItem";
import styles from "./labelList.module.css";

interface LabelProps {
  labels: any;
  size: CardSize;
  filter?: Filter;
  maxQuantity?: number;
}

const LabelList: React.FC<LabelProps> = (props: LabelProps) => {
  const {
    labels, size, filter, maxQuantity,
  } = props;

  const listClass = cls(styles, "labels__list", size);

  return (
    <ul className={listClass}>
      {labels
        .filter(
          (label) => label[1].count > 1 && (filter === null || label[1].tag === filter),
        )
        .filter((label, index) => index < maxQuantity)
        .map((label) => (
          <LabelItem key={label[0]} label={label} />
        ))}
    </ul>
  );
};

export default LabelList;
