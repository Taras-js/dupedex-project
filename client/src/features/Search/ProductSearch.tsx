import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setProduct } from "./searchProductAction";
import Search, { Results } from "../../components/UIKit/Search/Search";
import { debounce } from "../../utils/helper";
import { getProductBySearch } from "./SearchSelector";

import styles from "./productSearch.module.css";

const ProductSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Results[]>();
  const dispatch = useAppDispatch();

  const goods = useAppSelector((state) => state.goods.products);

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
    <div className={styles.product__search}>
      <Search
        onChange={handleChange}
        placeholder="Look for a skincare product name, brand name and etc."
        results={result}
        withDebounce={debounce}
      />
    </div>
  );
};

export default ProductSearch;
