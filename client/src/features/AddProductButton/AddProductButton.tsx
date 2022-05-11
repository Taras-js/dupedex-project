import { useAppDispatch } from "../../app/hooks";
import { setSearchBarFocused } from "../../components/ToolbarContainer/toolbarSlice";
import { Icon } from "../../components/UIKit";

import styles from "./addProductButton.module.css";

const AddProductButton = () => {
  const dispatch = useAppDispatch();

  const onClickButton = () => {
    dispatch(setSearchBarFocused());
  };
  return (
    <button className={styles.button} onClick={onClickButton}>
      <Icon type="plus" width={30} height={30} />
    </button>
  );
};

export { AddProductButton };
