import reactStringReplace from "react-string-replace";
import { PayloadFilterReview } from "../../components/ProductContainer/productSlice";

// amount of letters in word. It helps to half of word and some next letters and search it in the review
const LONG_WORD: number = 7;
const MIDDLE_WORD: number = 3;

export const highlightText = (
  review: any,
  filterTags: PayloadFilterReview[],
  styles: any,
  i: number,
): JSX.Element => {
  let cutTag: PayloadFilterReview | string;
  const newFilterTags: PayloadFilterReview[] = filterTags
    .map((tag) => {
      const splitTag = tag.filterTag.split(/\W/);
      if (splitTag[0] === "non" || splitTag[0] === "no") {
        return [{ ...tag, filterTag: tag.filterTag.split(/\W/)[1] }];
      } if (splitTag[1] === "skin") {
        return [{ ...tag, filterTag: tag.filterTag.split(/\W/)[0] }];
      }
      return tag.filterTag.split(/\W/).flatMap((el) => ({ ...tag, filterTag: el }));
    })
    .flat();

  let reviewText = review.review_text;

  newFilterTags.forEach((tag) => {
    if (tag.filterTag.length > LONG_WORD) {
      cutTag = tag.filterTag.slice(0, Math.floor(tag.filterTag.length / 2) + 1);
    } else if (tag.filterTag.length > MIDDLE_WORD) {
      cutTag = tag.filterTag.slice(0, Math.ceil(tag.filterTag.length / 2) + 1);
    } else {
      cutTag = tag.filterTag;
    }
    const reg = new RegExp(`(\\b${cutTag}?\\w{0,5}\\b)`, "gi");
    reviewText = reactStringReplace(reviewText, reg, (str) => (
      <span key={Math.random()} className={styles[tag.mood] || styles.grey}>
        {str}
      </span>
    ));
  });

  return (
    <p key={i} className={styles.review__text}>
      {reviewText}
    </p>
  );
};

// function to check if labels contain any element of filterTags. If contain then show review
export const filterReviewWithTags = (
  labels: string[],
  filterTags: any,
): boolean => labels.some((el: string, i) => filterTags.some((tag) => el.includes(tag.filterTag)));
