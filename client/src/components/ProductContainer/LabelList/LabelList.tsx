import { Filter, CardSize } from "../../../shared/types";
import { cls, SortLabels } from "../../../utils/helper";

import { LabelItem } from "../LabelItem";
import styles from "./labelList.module.css";

interface LabelProps {
  labels: SortLabels[];
  size: CardSize;
  filter?: Filter;
  maxQuantity?: number;
  isShowClose: boolean;
}

const LabelList: React.FC<LabelProps> = (props: LabelProps) => {
  const {
    labels, size, filter, maxQuantity = 6, isShowClose,
  } = props;

  const listClass = cls(styles, "labels__list", size);

  const labelsToRender = labels
    .filter(
      (label) => label[1].count > 1 && (filter === null || label[1].tag === filter),
    )
    .filter((label, index) => index < maxQuantity);

  return (
    <>
      {!!labelsToRender.length && (
        <ul className={listClass}>
          {labelsToRender.map((label) => (
            <LabelItem key={label[0]} label={label} isShowClose={isShowClose} />
          ))}
        </ul>
      )}
      {!labelsToRender.length && (
        <p className={styles.noReviews}>
          {"This product has no "}
          {filter}
          {" reviews ⌛"}
        </p>
      )}
    </>
  );
};

export default LabelList;
