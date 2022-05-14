
export const highlightText = (review: any, filterTags: string[], styles): JSX.Element => {
    let cutTag: string;
    let arrayWords: [] = review.review_text.split(" ");
    let newFilterTags: string[] = filterTags
      .map((tag) => {
        let splittingTag = tag.split(/\W/);
        return [...splittingTag];
      })
      .flat();

    return (
      <p className={styles.review__text}>
        {arrayWords.map((el: string, i) => {
          let s: boolean = newFilterTags.some((tag, i) => {
            cutTag = tag.slice(0, Math.ceil(tag.length / 2) + 1);
            return el.indexOf(cutTag) > -1;
          });
          return !s ? `${el} ` : <span>{el} </span>;
        })}
      </p>
    );
  };

export const filterReviewWithTags = (labels: string[], filterTags: string[]) => {
    return labels.some((el: string, i) => {
      return filterTags.some((tag) => el.includes(tag));
    });
  };