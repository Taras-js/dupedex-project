import {
  productState,
  toggleReviews,
} from "../../ToolbarContainer/toolbarSlice";
import { Button, Icon } from "../../UIKit";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { productsMock } from "../../../shared/mocks/productmock";

import styles from "./reviewItem.module.css";
import { filterReviewWithTags, highlightText } from "../../../features/highlight/highlight";

interface ReviewProps {
  id: number;
}

const ReviewItem: React.FC<ReviewProps> = (props: ReviewProps) => {
  let count = 0;
  const { id } = props;
  const dispatch = useAppDispatch();
  const product = useAppSelector(productState);

  const onShowReviewsClick = () => {
    dispatch(toggleReviews());
  };

  return (
    <div className={styles.review__container}>
      <h3 className={styles.review__headtext_color}>Review</h3>
      {!product.filterReview.filter
        ? productsMock
            .find((item) => item.id === id)
            .reviews.filter((review, index) => index < 8)
            .map((review) => (
              <p className={styles.review__text}>{review.review_text}</p>
            ))
        : productsMock
            .find((item) => item.id === id)
            .reviews.filter(
              (review, index) =>
                filterReviewWithTags(
                  review.labels,
                  product.filterReview.filterTags
                ) && count++ < 8
            )
            .map((review) =>
              highlightText(review, product.filterReview.filterTags, styles)
            )}

      <Button icon className={styles.close_btn} onClick={onShowReviewsClick}>
        <Icon type="toggleReviews" width={28} height={28} />
      </Button>
    </div>
  );
};

export default ReviewItem;
