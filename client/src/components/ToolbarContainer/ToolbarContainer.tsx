import classnames from 'classnames';
import { Button, Icon } from '../UIKit';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  posReviews,
  negReviews,
  showOrHideReviews,
  previousStep,
  followingStep,
  productState,
} from './toolbarSlice';

import styles from './toolbarContainer.module.css';
import { Filter } from '../../shared/types';

const Divider = () => (<div className={styles.divider} />);

const ToolbarContainer = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productState);

  const onTutorialClick = () => {};
  const onTutorialClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_tutorial);

  const isPrevDisabled = product.historyStep === 1;
  const onPrevStepClick = () => { dispatch(previousStep()); };
  const onPrevStepClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_prevstep);

  const isNextDisabled = product.historyStep === product.history.length;
  const onNextStepClick = () => { dispatch(followingStep()); };
  const onNextStepClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_nextstep);

  const isReviewShown = product.isReviewShown === false;
  const onShowReviewsClick = () => { dispatch(showOrHideReviews()); };
  const onShowReviewsClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_showreviews, { [styles.toolbar__btn_showreviews_active]: isReviewShown });

  const isPositive = product.filter === Filter.positive;
  const onShowPositiveClick = () => { dispatch(posReviews()); };
  const onShowPositiveClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_positive, { [styles.toolbar__btn_positive_active]: isPositive });

  const isNegative = product.filter === Filter.negative;
  const onShowNegativeClick = () => { dispatch(negReviews()); };
  const onShowNegativeClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_negative, { [styles.toolbar__btn_negative_active]: isNegative });

  const onProductClaimsClick = () => {};
  const onProductClaimsClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_productclaims);

  const onWriteNotesClick = () => {};
  const onWriteNotesClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_writenotes);

  const onShareClick = () => {};
  const onShareClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_share);

  const onSaveClick = () => {};
  const onSaveClassName = classnames(styles.toolbar__btn, styles.toolbar__btn_save);

  return (
    <div className={styles.container}>
      <Button
        icon
        className={onTutorialClassName}
        onClick={onTutorialClick}
      >
        <Icon type="tutorial" width={28} height={28} />
      </Button>

      <Divider />

      <Button
        icon
        className={onPrevStepClassName}
        onClick={onPrevStepClick}
        isDisabled={isPrevDisabled}
      >
        <Icon type="comeBack" width={28} height={28} />
      </Button>

      <Button
        icon
        className={onNextStepClassName}
        onClick={onNextStepClick}
        isDisabled={isNextDisabled}
      >
        <Icon type="comeAhead" width={28} height={28} />
      </Button>

      <Divider />

      <Button
        icon
        className={onShowReviewsClassName}
        onClick={onShowReviewsClick}
      >
        <Icon type="showOrHideReviews" width={28} height={28} />
      </Button>

      <Button
        icon
        className={onShowPositiveClassName}
        onClick={onShowPositiveClick}
      >
        <Icon type="positiveReviews" width={28} height={28} />
      </Button>

      <Button
        icon
        className={onShowNegativeClassName}
        onClick={onShowNegativeClick}
      >
        <Icon type="negativeReviews" width={28} height={28} />
      </Button>

      <Button
        icon
        className={onProductClaimsClassName}
        onClick={onProductClaimsClick}
      >
        <Icon type="productClaims" width={28} height={28} />
      </Button>

      <Button
        icon
        className={onWriteNotesClassName}
        onClick={onWriteNotesClick}
      >
        <Icon type="writeNotes" width={28} height={28} />
      </Button>

      <Divider />

      <Button
        icon
        className={onShareClassName}
        onClick={onShareClick}
      >
        <Icon type="share" width={28} height={28} />
        <span>Share</span>
      </Button>
      <Button
        icon
        className={onSaveClassName}
        onClick={onSaveClick}
      >
        <Icon type="save" width={28} height={28} />
        <span>Save</span>
      </Button>

    </div>
  );
};

export { ToolbarContainer };
