import { PayloadFilterReview } from "../../components/ProductContainer/productSlice";

const reactStringReplace = require("react-string-replace");

export const highlightText = (
  review: any,
  filterTags: PayloadFilterReview[],
  styles,
  i: number
): JSX.Element => {
  let cutTag: PayloadFilterReview | string;
  let newFilterTags: PayloadFilterReview[] = filterTags
    .map((tag) => {
      let splitTag = tag.filterTag.split(/\W/);
      if (splitTag[0] == "non" || splitTag[0] == "no") {
        return [{ ...tag, filterTag: tag.filterTag.split(/\W/)[1] }];
      } else if (splitTag[1] == "skin") {
        return [{ ...tag, filterTag: tag.filterTag.split(/\W/)[0] }];
      }
      return tag.filterTag.split(/\W/).flatMap((el) => {
        return { ...tag, filterTag: el };
      });
    })
    .flat();

  let review_text = review.review_text;

  newFilterTags.forEach((tag) => {
    cutTag =
      tag.filterTag.length > 7
        ? tag.filterTag.slice(0, Math.floor(tag.filterTag.length / 2) + 1)
        : tag.filterTag.length > 4
        ? tag.filterTag.slice(0, Math.ceil(tag.filterTag.length / 2) + 1)
        : tag.filterTag;
    review_text = reactStringReplace(
      review_text,
      new RegExp(`(\\b${cutTag}?\\w{0,5}\\b)`, "gi"),
      (str) => (
        <span key={Math.random()} className={styles[tag.mood] || styles.grey}>
          {str}
        </span>
      )
    );
  });

  return (
    <p key={i} className={styles.review__text}>
      {review_text}
    </p>
  );
};

// function to check if labels contain any element of filterTags. If contain then show review
export const filterReviewWithTags = (
  labels: string[],
  filterTags: any
): boolean => {
  return labels.some((el: string, i) => {
    return filterTags.some((tag) => el.includes(tag.filterTag));
  });
};
