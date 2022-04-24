export type FilterType = 'positive' | 'neutral' | 'negative' | null;

export interface ProductContent {
  currentItemId: number;
  itemsIdList: number[];
  filter: FilterType;
  isReviewShown: boolean,
}
