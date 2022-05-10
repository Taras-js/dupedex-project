import { cls } from "../../utils/helper";
import { Button, Icon, Tooltip } from "../UIKit";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  setFilter,
  toggleReviews,
  getHistoryStep,
  toolbarState,
} from "./toolbarSlice";
import { Filter } from "../../shared/types";

import styles from "./toolbarContainer.module.css";

const Divider = () => <div className={styles.divider} />;

const ToolbarContainer = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(toolbarState);

  const onShowTutorial = () => {};
  const onShowTutorialClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_tutorial",
  );

  const isPrevDisabled = product.historyStep === 1;
  const onGetPrevStep = () => {
    dispatch(getHistoryStep(-1));
  };
  const onGetPrevStepClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_prev_step",
  );

  const isNextDisabled = product.historyStep === product.history.length;
  const onGetNextStep = () => {
    dispatch(getHistoryStep(+1));
  };
  const onGetNextStepClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_next_step",
  );

  const isReviewShown = product.isReviewShown === false;
  const onToggleReviews = () => {
    dispatch(toggleReviews());
  };
  const onToggleReviewsClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_toggle_reviews",
    { toolbar__btn_toggle_reviews_active: isReviewShown },
  );

  const isPositive = product.filter === Filter.positive;
  const onFilterPositive = () => {
    dispatch(setFilter(Filter.positive));
  };
  const onFilterPositiveClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_positive",
    { toolbar__btn_positive_active: isPositive },
  );

  const isNegative = product.filter === Filter.negative;
  const onFilterNegative = () => {
    dispatch(setFilter(Filter.negative));
  };
  const onFilterNegativeClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_negative",
    { toolbar__btn_negative_active: isNegative },
  );

  const onShowProductClaims = () => {};
  const onShowProductClaimsClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_product_claims",
  );

  const onWriteNotes = () => {};
  const onWriteNotesClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_write_notes",
  );

  const onShareLibrary = () => {};
  const onShareLibraryClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_share",
  );

  const onSaveLibrary = () => {};
  const onSaveLibraryClassName = cls(
    styles,
    "toolbar__btn",
    "toolbar__btn_save",
  );

  return (
    <div className={styles.container}>
      <Tooltip placement="top" title="Tutorial">
        <Button
          icon
          className={onShowTutorialClassName}
          onClick={onShowTutorial}
        >
          <Icon type="tutorial" width={28} height={28} />
        </Button>
      </Tooltip>

      <Divider />

      <Tooltip title="undo">
        <Button
          icon
          className={onGetPrevStepClassName}
          onClick={onGetPrevStep}
          isDisabled={isPrevDisabled}
        >
          <Icon type="comeBack" width={28} height={28} />
        </Button>
      </Tooltip>

      <Tooltip title="redo">
        <Button
          icon
          className={onGetNextStepClassName}
          onClick={onGetNextStep}
          isDisabled={isNextDisabled}
        >
          <Icon type="comeAhead" width={28} height={28} />
        </Button>
      </Tooltip>

      <Divider />

      <Tooltip title="Show/hide reviews">
        <Button
          icon
          className={onToggleReviewsClassName}
          onClick={onToggleReviews}
        >
          <Icon type="toggleReviews" width={28} height={28} />
        </Button>
      </Tooltip>

      <Tooltip title="Show only positive reviews">
        <Button
          icon
          className={onFilterPositiveClassName}
          onClick={onFilterPositive}
        >
          <Icon type="positiveReviews" width={28} height={28} />
        </Button>
      </Tooltip>

      <Tooltip title="Show only negative reviews">
        <Button
          icon
          className={onFilterNegativeClassName}
          onClick={onFilterNegative}
        >
          <Icon type="negativeReviews" width={28} height={28} />
        </Button>
      </Tooltip>

      <Button
        icon
        className={onShowProductClaimsClassName}
        onClick={onShowProductClaims}
      >
        <Icon type="productClaims" width={28} height={28} />
      </Button>

      <Button
        icon
        className={onWriteNotesClassName}
        onClick={onWriteNotes}
      >
        <Icon type="writeNotes" width={28} height={28} />
      </Button>

      <Divider />

      <Tooltip title="Share library">
        <Button
          icon
          className={onShareLibraryClassName}
          onClick={onShareLibrary}
        >
          <Icon type="share" width={28} height={28} />
          <span>Share</span>
        </Button>
      </Tooltip>

      <Tooltip title="Save library">
        <Button
          icon
          className={onSaveLibraryClassName}
          onClick={onSaveLibrary}
        >
          <Icon type="save" width={28} height={28} />
          <span>Save</span>
        </Button>
      </Tooltip>
    </div>
  );
};

export { ToolbarContainer };
