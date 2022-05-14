import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { CardSize, Filter } from "../../../shared/types";
import { getTagStyle } from "../../../utils/getTagStyle";

import { cls } from "../../../utils/helper";
import {
  productState,
  setFilterReview,
} from "../../ToolbarContainer/toolbarSlice";
import styles from "./labelItem.module.css";

interface LabelProps {
  label: any;
  isShowClose: boolean;
}

const LabelItem: React.FC<LabelProps> = (props: LabelProps) => {
  const product = useAppSelector(productState);
  const dispatch = useAppDispatch();
  const { label, isShowClose } = props;
  const elem = useRef<HTMLLIElement>(null);

  useEffect(() => {
    !product.filterReview.filter
      ? elem.current.classList.remove(styles.border)
      : null;
  }, [product.filterReview.filter]);

  const labelItemClass = {
    label__tag: true,
    positive: label[1].tag === Filter.positive,
    negative: label[1].tag === Filter.negative,
    neutral: label[1].tag === Filter.neutral,
    other: label[1].tag === null,
  };

  const filterReview = (filter: string) => {
    if (!product.isReviewShown) return;
    dispatch(setFilterReview({ filterTag: filter }));
  };

  const toggleTagStyle = () => {
    console.log(isShowClose, product.isReviewShown)
    if (isShowClose || !product.isReviewShown) return;
    elem.current.classList.contains(styles.border)
      ? elem.current.classList.remove(styles.border)
      : elem.current.classList.add(styles.border);
  };

  return (
    <li
      ref={elem}
      style={getTagStyle(label)}
      className={cls(
        styles,
        labelItemClass,
        isShowClose ? null : "label__tag_pointer"
      )}
      onClick={() => {
        filterReview(label[1].name);
        toggleTagStyle();
      }}
    >
      <span>{label[1].name}</span>
      <span>
        ({Number(label[1].count).toFixed(0)}
        %)
      </span>
    </li>
  );
};

export default LabelItem;
