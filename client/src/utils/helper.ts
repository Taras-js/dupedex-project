import classNames from 'classnames/bind';

// interface ReturnReview {
//   positive: [string, number][],
//   negative: [string, number][],
//   neutral: [string, number][],
//   other: [string, number][],
//   all: [string, number][],
// }

export function combinedClass(styles, ...args) {
  const sx = classNames.bind(styles);
  const className = sx(...args);
  return className;
}

export function sort(array: Array<any>, key: any): Array<any> {
  const sortedArray = array.sort((a, b) => (a[key] < b[key] ? 1 : -1));

  return sortedArray;
}

export function sortLabels(array: Array<any>): Array<any> {
  const sortedArray = array.sort((a, b) => (a[1].count < b[1].count ? 1 : -1));

  return sortedArray;
}

export function getLabels(reviews: Array<any>) {
  const allLabels = [];

  const objLabels = {
  };

  reviews.map((review) => allLabels.push(...review.labels));

  for (let i = 0; i < allLabels.length; i += 1) {
    const a = allLabels[i].toString();

    if (objLabels[a] === undefined) {
      objLabels[a] = {
        tag: null,
        count: 100 / reviews.length,
      };
    } else objLabels[a].count += 100 / reviews.length;

    if (a.includes('(positive')) objLabels[a].tag = 'positive';
    if (a.includes('(negative')) objLabels[a].tag = 'negative';
    if (a.includes('(neutral')) objLabels[a].tag = 'neutral';
  }

  return sortLabels(Object.entries<number>(objLabels));
}
