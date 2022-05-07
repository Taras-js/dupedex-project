import { useAppDispatch } from "../../app/hooks";
import { toggleAddItemToList } from "../../components/ToolbarContainer/toolbarSlice";
import { Icon } from "../../components/UIKit";

import styles from './addProductButton.module.css';

const AddProductButton = () => {
  const dispatch = useAppDispatch();

  const onClickButton = () => {
    dispatch(toggleAddItemToList());
  };
  return (
    <button className={styles.button} onClick={onClickButton}>
      <Icon type="plus" width={25} height={25} />
    </button>
  );
};

export { AddProductButton };
