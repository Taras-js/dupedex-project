import classNames from "classnames/bind";
import { CardSize } from "../shared/types";

export function cls(styles, ...args) {
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

  const objLabels = {};

  reviews.map((review) => allLabels.push(...review.labels));

  for (let i = 0; i < allLabels.length; i += 1) {
    const a = allLabels[i].toString();
    let currentTag: string | null = null;

    if (a.includes("(positive")) currentTag = "positive";
    if (a.includes("(negative")) currentTag = "negative";
    if (a.includes("(neutral")) currentTag = "neutral";
    const currentName = a.replace(/(\((.*?)\))/gi, "").trim();

    if (objLabels[a] === undefined) {
      objLabels[a] = {
        tag: currentTag,
        count: 100 / reviews.length,
        name: currentName,
      };
    } else objLabels[a].count += 100 / reviews.length;
  }

  return sortLabels(Object.entries<number>(objLabels));
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

export const getCardSize = (productList: any[], isReviewShown: boolean): CardSize => {
  if (productList.length === 1 && isReviewShown === false) return CardSize.large;

  if (productList.length === 2 || (productList.length === 1 && isReviewShown === true)) return CardSize.medium;

  return CardSize.small;
};

export const getQuantity = (size: CardSize): number => {
  if (size === CardSize.large) return 24;

  if (size === CardSize.medium) return 18;

  return 6;
};
