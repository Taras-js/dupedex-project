type RGBonly = `${number}, ${number}, ${number}`;
type RGBA = `rgba(${RGBonly}, ${number})`;

enum Marks {
  positive = "28, 191, 96",
  negative = "251, 120, 142",
  neutral = "254, 226, 148",
  other = "180, 180, 180",
}

interface TagStyle {
  backgroundColor: RGBA;
  color: string;
}

const getAlphaFromScore = (score: number): number => {
  switch (true) {
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

export const getTagStyle = ({tag, count}): TagStyle => {
  const color: RGBonly = !tag ? Marks.other : Marks[tag];
  const alpha = getAlphaFromScore(Number(count));

  const tagStyle: TagStyle = {
    backgroundColor: `rgba(${color}, ${alpha})`,
    color: alpha > 0.8 ? "#FFF" : "111",
  };

  return tagStyle;
};
