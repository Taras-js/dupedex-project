import { Button, Icon } from "../UIKit";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  showItem,
  posReviews,
  negReviews,
  showOrHideReviews,
  previousStep,
  followingStep,
  productState,
} from "./toolbarSlice";

import styles from "./toolbarContainer.module.css";

const Divider = () => <div className={styles.divider} />;

const ToolbarContainer = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(productState);

  const onComeBack = () => {
    dispatch(previousStep());
  };
  const onComeAhead = () => {
    dispatch(followingStep());
  };

  const onButtonClick1 = () => {
    dispatch(showItem([1]));
  };
  const onButtonClick2 = () => {
    dispatch(showItem([1, 2]));
  };
  const onButtonClick3 = () => {
    dispatch(showItem([1, 2, 3]));
  };
  const onButtonClick4 = () => {
    dispatch(showItem([1, 2, 3, 4]));
  };

  const onShowPositive = () => {
    dispatch(posReviews());
  };
  const onShowNegative = () => {
    dispatch(negReviews());
  };
  const onShowReviews = () => {
    dispatch(showOrHideReviews());
  };

  const isPrevDisabled = product.historyStep === 1;
  const isNextDisabled = product.historyStep === product.history.length;

  return (
    <div className={styles.container}>
      <Button icon onClick={() => {}}>
        <Icon type="tutorial" width={28} height={28} />
      </Button>

      <Divider />

      <Button icon onClick={onComeBack} isDisabled={isPrevDisabled}>
        <Icon type="comeBack" width={28} height={28} />
      </Button>
      <Button icon onClick={onComeAhead} isDisabled={isNextDisabled}>
        <Icon type="comeAhead" width={28} height={28} />
      </Button>

      <Divider />

      <Button icon onClick={onShowReviews}>
        <Icon type="showOrHideReviews" width={28} height={28} />
      </Button>
      <Button icon onClick={onShowPositive}>
        <Icon type="positiveReviews" width={28} height={28} />
      </Button>
      <Button icon onClick={onShowNegative}>
        <Icon type="negativeReviews" width={28} height={28} />
      </Button>
      <Button icon onClick={() => {}}>
        <Icon type="productClaims" width={28} height={28} />
      </Button>
      <Button icon onClick={() => {}}>
        <Icon type="writeNotes" width={28} height={28} />
      </Button>

      <Divider />

      <div>
        <Button onClick={onButtonClick1}>1</Button>
        <Button onClick={onButtonClick2}>2</Button>
        <Button onClick={onButtonClick3}>3</Button>
        <Button onClick={onButtonClick4}>4</Button>
      </div>

      <Divider />

      <Button icon onClick={onButtonClick1}>
        <Icon type="share" width={28} height={28} />
        Share
      </Button>
      <Button icon onClick={onButtonClick2}>
        <Icon type="save" width={28} height={28} />
        Save
      </Button>
    </div>
  );
};

export { ToolbarContainer };
