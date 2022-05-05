export enum Filter {
  positive = "positive",
  negative = "negative",
  neutral = "neutral",
}

export enum CardSize {
  large = "large",
  medium = "medium",
  small = "small",
}

export interface ProductContent {
  currentItemId: number;
  itemsIdList: number[];
  filter: Filter | null;
  isReviewShown: boolean;
}
