import { Button, Icon } from '../UIKit';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  oneItem,
  fourItems,
  posReviews,
  negReviews,
  showOrHideReviews,
  previousStep,
  followingStep,
  productState,
} from './toolbarSlice';

const ToolbarContainer = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productState);

  const onComeBack = () => { dispatch(previousStep()); };
  const onComeAhead = () => { dispatch(followingStep()); };
  const onButtonClick1 = () => { dispatch(oneItem()); };
  const onButtonClick4 = () => { dispatch(fourItems()); };
  const onShowPositive = () => { dispatch(posReviews()); };
  const onShowNegative = () => { dispatch(negReviews()); };
  const onShowReviews = () => { dispatch(showOrHideReviews()); };

  const isPrevDisabled = product.historyStep === 1;
  const isNextDisabled = product.historyStep === product.history.length;

  return (
    <div style={{ display: 'flex' }}>
      <Button outlined onClick={onComeBack} isDisabled={isPrevDisabled}>
        <Icon type="comeBack" width={28} height={28} />
      </Button>
      <Button outlined onClick={onComeAhead} isDisabled={isNextDisabled}>
        <Icon type="comeAhead" width={28} height={28} />
      </Button>
      <Button outlined onClick={onButtonClick1}>
        1 Item
      </Button>
      <Button outlined onClick={onButtonClick4}>
        4 Items
      </Button>
      <Button outlined onClick={onShowNegative}>
        <Icon type="negativeReviews" width={28} height={28} />
      </Button>
      <Button outlined onClick={onShowPositive}>
        <Icon type="positiveReviews" width={28} height={28} />
      </Button>
      <Button outlined onClick={onShowReviews}>
        <Icon type="showOrHideReviews" width={28} height={28} />
      </Button>
    </div>
  );
};

export { ToolbarContainer };
