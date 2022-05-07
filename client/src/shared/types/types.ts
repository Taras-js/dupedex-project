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

export interface ToolbarContent {
  idCurrentItem: number;
  idItemsOnScreen: number[];
  filter: Filter | null;
  isReviewShown: boolean;
}
