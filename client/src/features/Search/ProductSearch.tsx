import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { searchProduct } from './searchProductAction';
import Search from './Search';

const ProductSearch = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  const result = useAppSelector((state) => state.product);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(searchProduct(search));
  }, [search]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Search
      onChange={handleChange}
      placeholder="Look for a skincare product name, brand name and etc."
      results={result.products}
    />
  );
};

export default ProductSearch;
