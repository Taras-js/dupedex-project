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

//function to apply color for tag background and text
interface getTagStyle {
  backgroundColor: RGBA,
  color: string
}

type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

enum Marks {
  positive = "28, 191, 96",
  negative = "251, 120, 142",
  neutral = "254, 226, 148",
  other = "170, 170, 170"
}

export const getTagStyle = (review:string, score:number):getTagStyle => {
  let tagColor:string,
      alpha:number;
  let re:RegExp = /\((.*?)[\)|\/]/g;
  let findMood:RegExpExecArray = re.exec(review.split(" ").pop());
  let color:Marks = !findMood ? Marks["other"] : Marks[findMood[1]];

  alpha = getAplhaFromScore(score, color)
  tagColor = (color === Marks["other"]) ? "#FFFFFF" : alpha > .6 ? "#FFF" : "111";
  return {backgroundColor: `rgba(${color}, ${alpha})`, color: tagColor}
}

const getAplhaFromScore = (score:number, color:string):number => {
  switch (true) {
    case(color === Marks["other"]): return 1; break;
    case (score > 13): return 1; break;
    case (score > 7): return 0.75; break;
    case (score > 5): return 0.55; break;
    case (score > 3): return 0.35; break;
    case (score > 0): return 0.2; break;
  }
}