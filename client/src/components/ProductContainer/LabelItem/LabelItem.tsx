/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Filter } from "../../../shared/types";
import { getTagStyle } from "../../../utils/getTagStyle";

import { cls, SortLabels } from "../../../utils/helper";
import { toolbarState } from "../../ToolbarContainer/toolbarSlice";
import { filterReviewState, setFilterReview } from "../productSlice";
import styles from "./labelItem.module.css";

interface LabelProps {
  label: SortLabels;
  isShowClose: boolean;
}

const LabelItem: React.FC<LabelProps> = (props: LabelProps) => {
  const { label, isShowClose } = props;
  const dispatch = useAppDispatch();
  const filterReview = useAppSelector(filterReviewState);
  const product = useAppSelector(toolbarState);

  const labelItemClass = {
    label__tag: true,
    positive: label[1].tag === Filter.positive,
    negative: label[1].tag === Filter.negative,
    neutral: label[1].tag === Filter.neutral,
    other: label[1].tag === null,
    border: filterReview.filterTags.some((tag) => (
      tag.filterTag === label[1].name && product.idItemsOnScreen.length === 1
    )),
  };

  const addFilterReview = (filter: string) => {
    if (!product.isReviewShown || product.idItemsOnScreen.length > 1) return;
    dispatch(setFilterReview({ filterTag: filter, mood: label[1].tag }));
  };

  return (
    <li
      style={getTagStyle(label[1])}
      className={cls(
        styles,
        labelItemClass,
        isShowClose ? null : "label__tag_pointer",
      )}
      onClick={() => {
        addFilterReview(label[1].name);
      }}
    >
      <span>{label[1].name}</span>
      <span>
        (
        {Number(label[1].count).toFixed(0)}
        %)
      </span>
    </li>
  );
};

export default LabelItem;
