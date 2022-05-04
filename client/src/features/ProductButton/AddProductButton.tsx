import { useAppDispatch } from "../../app/hooks";
import { Icon } from "../../components/UIKit";
import styles from './addProductButton.module.css';
import { setAddItemToList } from "../Search/productSlice";

const AddProductButton = () => {
  const dispatch = useAppDispatch();

  const onClickButton = () => {
    dispatch(setAddItemToList());
  };
  return (
    <button className={styles.button} onClick={onClickButton}>
      <Icon type="plus" width={25} height={25} />
    </button>
  );
};

export default AddProductButton;
