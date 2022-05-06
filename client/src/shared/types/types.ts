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
  currentItemId: number;
  itemsListOnScreen: number[];
  filter: Filter | null;
  isReviewShown: boolean;
}
