import { useAppDispatch } from '../../../app/hooks';
import { productsMock } from '../../../shared/mocks/productmock';
import { Filter } from '../../../shared/types';
import { getLabels } from '../../../utils/helper';
import { removeItem } from '../../ToolbarContainer/toolbarSlice';
import { Button, Icon } from '../../UIKit';
import { LabelItem } from '../LabelItem';

import styles from './productItem.module.css';

interface ProductProps {
  id: number;
  isShowClose?: boolean;
  filter?: Filter;
}

const ProductItem: React.FC<ProductProps> = (props: ProductProps) => {
  const { id, isShowClose = false, filter } = props;
  const dispatch = useAppDispatch();

  const onCloseSelected = () => {
    dispatch(removeItem(id));
  };

  const item = productsMock.find((itemToFind) => itemToFind.id === id);

  const labels = getLabels(item.reviews);

  return (
    <div key={id} className={styles.products__item}>
      <img className={styles.products__img} src={item.img_link} alt={item.prod_link} />
      <h3 className={styles.heading}>
        {item.brand_name}
      </h3>
      <a className={styles.products__link} target="_blank" rel="noreferrer" href={item.prod_link}>(www.meccabeauty.co.nz)</a>
      <h4 className={styles.heading}>
        {item.prod_name}
      </h4>

      <LabelItem labels={labels} filter={filter} />

      {isShowClose && (
        <Button
          icon
          className={styles.close_btn}
          onClick={onCloseSelected}
        >
          <Icon type="exit" width={18} height={18} />
        </Button>
      )}
    </div>
  );
};

export default ProductItem;
