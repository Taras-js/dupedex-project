import { Button, Icon, ScrollPanel } from "../../UIKit";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { toggleReviews } from "../../ToolbarContainer/toolbarSlice";
import { reviewsState } from "../productSlice";

import styles from "./reviewItem.module.css";

interface ReviewProps {
  id: number;
}

const ReviewItem: React.FC<ReviewProps> = (props: ReviewProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(reviewsState);

  const onShowReviewsClick = () => {
    dispatch(toggleReviews());
  };

  return (
    <div className={styles.review__container}>
      <h3 className={styles.review__heading}>Reviews</h3>
      <ScrollPanel>
        {reviews
          .find((item) => item.id === id)
          ?.reviews.filter((review, index) => index < 7)
          .map((review) => (
            <p key={review.name} className={styles.review__text}>
              {review.review_text}
            </p>
          ))}
      </ScrollPanel>
      <Button icon className={styles.close_btn} onClick={onShowReviewsClick}>
        <Icon type="toggleReviews" width={28} height={28} />
      </Button>
    </div>
  );
};

export default ReviewItem;
