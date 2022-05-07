import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Search, { Results } from "../../components/UIKit/Search/Search";
import { debounce } from "../../utils/helper";
import { getProductBySearch } from "./SearchSelector";

import styles from "./productSearch.module.css";
import { searchesState } from "./productSlice";

const ProductSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Results[]>();

  const searches = useAppSelector(searchesState);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    setResult(getProductBySearch(searches, search));
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
