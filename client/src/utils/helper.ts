import classNames from 'classnames/bind';

export function combinedClass(styles, ...args) {
  const sx = classNames.bind(styles);
  const className = sx(...args);
  return className;
}

export function sort(array: Array<any>, key: any): Array<any> {
  const sortedArray = array.sort((a, b) => (a[key] < b[key] ? 1 : -1));

  return sortedArray;
}

export function getReviews(reviews: Array<any>): Array<any> {
  const allReviews = [];
  const objReviews = {};

  reviews.map((review) => allReviews.push(...review.labels));

  for (let i = 0; i < allReviews.length; i += 1) {
    const a = allReviews[i];
    if (objReviews[a] !== undefined) objReviews[a] += 100 / allReviews.length;
    else objReviews[a] = 100 / allReviews.length;
  }

  return sort(Object.entries(objReviews), 1);
}

export const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};
