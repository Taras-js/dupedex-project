export enum Filter {
  positive = 'positive',
  negative = 'negative',
  neutral = 'neutral',
}

export interface ProductContent {
  currentItemId: number;
  itemsIdList: number[];
  filter: Filter | null;
  isReviewShown: boolean,
}
