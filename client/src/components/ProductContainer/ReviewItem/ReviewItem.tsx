import { Button, Icon, ScrollPanel } from "../../UIKit";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { toggleReviews } from "../../ToolbarContainer/toolbarSlice";
import { filterReviewState, reviewsState } from "../productSlice";

import styles from "./reviewItem.module.css";
import {
  filterReviewWithTags,
  highlightText,
} from "../../../features/highlight/highlight";

interface ReviewProps {
  id: string;
}

const ReviewItem: React.FC<ReviewProps> = (props: ReviewProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(reviewsState);
  const filterReview = useAppSelector(filterReviewState);

  const onShowReviewsClick = () => {
    dispatch(toggleReviews());
  };

  return (
    <div className={styles.review__container}>
      <h3 className={styles.review__heading}>Reviews</h3>
      <ScrollPanel>
        {!filterReview.filter
          ? reviews
          // eslint-disable-next-line no-underscore-dangle
            .find((item) => item.id === id)
            ?.reviews.filter((review, index) => index < 7)
            .map((review) => (
              <p key={review.name} className={styles.review__text}>
                {review.review_text}
              </p>
            ))
          : reviews
            .find((item) => item.id === id)
            ?.reviews.filter(
              (review, index) => filterReviewWithTags(
                review.labels,
                filterReview.filterTags,
              ) && index < 7,
            )
            .map((review, i) => highlightText(review, filterReview.filterTags, styles, i))}
      </ScrollPanel>
      <Button icon className={styles.close_btn} onClick={onShowReviewsClick}>
        <Icon type="toggleReviews" width={28} height={28} />
      </Button>
    </div>
  );
};

export default ReviewItem;
