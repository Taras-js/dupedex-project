import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setProduct } from './searchProductAction';
import Search, { Results } from '../../components/UIKit/Search/Search';
import { debounce } from '../../utils/helper';
import { getProductBySearch } from './SearchSelector';
import { addIdItem, showItem } from '../../components/ToolbarContainer/toolbarSlice';
import { setAddItemToList } from './productSlice';

const ProductSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [result, setResult] = useState<Results[]>();
  const dispatch = useAppDispatch();

  const goods = useAppSelector((state) => state.goods.products);
  const isAddItemtolist = useAppSelector((state) => state.goods.isAddItemToList);
  const productsIdList = useAppSelector((state) => state.product.itemsIdList);

  const onClickResult = (id) => {
    if (isAddItemtolist) {
      dispatch(addIdItem(id));
      dispatch(setAddItemToList());
    } else { dispatch(showItem([id])); }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setResult(getProductBySearch(goods, search));
  }, [search]);
  useEffect(() => {
    dispatch(setProduct());
  }, [search]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Search
      idProducts={productsIdList}
      onChange={handleChange}
      placeholder="Look for a skincare product name, brand name and etc."
      results={result}
      withDebounce={debounce}
      onClickResult={onClickResult}
      isOpen={isAddItemtolist}
    />
  );
};

export default ProductSearch;
