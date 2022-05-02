type RGBonly = `${number}, ${number}, ${number}`;
type RGBA = `rgba(${RGBonly}, ${number})`;

enum Marks {
  positive = "28, 191, 96",
  negative = "251, 120, 142",
  neutral = "254, 226, 148",
  other = "170, 170, 170",
}

interface TagStyle {
  backgroundColor: RGBA;
  color: string;
}

const getAlphaFromScore = (score: number, color: string): number => {
  switch (true) {
    case color === Marks.other:
      return 1;
    case score > 13:
      return 1;
    case score > 7:
      return 0.75;
    case score > 5:
      return 0.55;
    case score > 3:
      return 0.35;
    default:
      return 0.2;
  }
};

export const getTagStyle = ([tagLabel, tagInfo]: Array<any>): TagStyle => {
  const re: RegExp = /\((.*?)[)|/]/g;
  const findMood: RegExpExecArray = re.exec(tagLabel.split(" ").pop());

  const color: RGBonly = !findMood ? Marks.other : Marks[findMood[1]];
  const alpha = getAlphaFromScore(Number(tagInfo.count), color);

  const tagStyle: TagStyle = {
    backgroundColor: `rgba(${color}, ${alpha})`,
    color: color === Marks.other || alpha > 0.6 ? "#FFF" : "111",
  };

  return tagStyle;
};
