import { toggleReviews } from "../../ToolbarContainer/toolbarSlice";
import { Button, Icon } from "../../UIKit";

import { useAppDispatch } from "../../../app/hooks";
import { productsMock } from "../../../shared/mocks/productmock";

import styles from "./reviewItem.module.css";

interface ReviewProps {
  id: number;
}

const ReviewItem: React.FC<ReviewProps> = (props: ReviewProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();

  const onShowReviewsClick = () => {
    dispatch(toggleReviews());
  };

  return (
    <div className={styles.review__container}>
      <h3>Review</h3>
      {productsMock.find((item) => item.id === id).Details}

      <Button icon className={styles.close_btn} onClick={onShowReviewsClick}>
        <Icon type="toggleReviews" width={28} height={28} />
      </Button>
    </div>
  );
};

export default ReviewItem;
